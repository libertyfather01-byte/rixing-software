const Jimp = require('jimp');

Jimp.read('public/logo.jpg')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // The background is a very dark grey/black.
      // If it's below a threshold, make it transparent.
      // Adjust threshold slightly if we get jagged edges or preserve too much.
      if (red < 40 && green < 40 && blue < 40) {
        // Calculate a smooth alpha so it's not totally jagged
        // If it's 0, it's totally transparent. If it's 40, it's opaque.
        // Wait, simple threshold is safer for now.
        this.bitmap.data[idx + 3] = 0;
      }
    });
    
    image.write('public/logo-transparent.png', () => {
      console.log('Saved transparent logo.');
    });
  })
  .catch(err => {
    console.error('Error processing image:', err);
  });
