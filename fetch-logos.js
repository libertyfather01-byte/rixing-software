const https = require('https');
const fs = require('fs');

async function fetchLogo(url, name) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const match = data.match(/<meta property="og:image" content="([^"]+)"/);
                if (match && match[1]) {
                    let imgUrl = match[1];
                    console.log(`Found logo for ${name}: ${imgUrl}`);
                    
                    https.get(imgUrl, (imgRes) => {
                        const file = fs.createWriteStream(`public/${name}.png`);
                        imgRes.pipe(file);
                        file.on('finish', () => {
                            file.close();
                            console.log(`Saved ${name}.png`);
                            resolve();
                        });
                    }).on('error', reject);
                } else {
                    console.log(`No logo found for ${name}`);
                    resolve();
                }
            });
        }).on('error', reject);
    });
}

(async () => {
    await fetchLogo('https://play.google.com/store/apps/details?id=com.Yamposki.popnchat&pcampaignid=web_share', 'popnchat-logo');
    await fetchLogo('https://play.google.com/store/apps/details?id=com.allroundar.www&pcampaignid=web_share', 'allrounder-logo');
    await fetchLogo('https://play.google.com/store/apps/details?id=com.schoolhives.app', 'schoolhive-logo');
})();
