"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { submitContactRequest } from "@/app/actions/contact";
import styles from "./page.module.css";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactRequest(formData);
    
    if (result.error) {
      setErrorMessage(result.error);
      setStatus("error");
    } else {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className="animate-fade-in">
            <h1 className={styles.heroTitle}>Get in <span className="text-gradient">Touch</span></h1>
            <p className={styles.heroSubtitle}>
              Ready to start your next enterprise project? Contact our team of experts to discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h2 className={styles.infoTitle}>Contact Information</h2>
            <p className={styles.infoDesc}>
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <Mail className={styles.infoIcon} />
                <div>
                  <h4>Email</h4>
                  <p>support@rixings.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Phone className={styles.infoIcon} />
                <div>
                  <h4>Phone</h4>
                  <p>08062862155, 07032372123</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <MapPin className={styles.infoIcon} />
                <div>
                  <h4>Headquarters</h4>
                  <p>
                    B301 Ogba multipurpose shopping Mall.<br /><br />
                    60 Oshola street, Ifako Ijaye Lagos.<br /><br />
                    Room 5 Edo house bishop Oluwole street Victoria Island Lagos Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`glass-card ${styles.formContainer}`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email">Work Email *</label>
                <input type="email" id="email" name="email" required placeholder="john@company.com" />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" placeholder="Acme Inc." />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="service">Service of Interest</label>
                <select id="service" name="service">
                  <option value="">Select a service...</option>
                  <option value="custom-software">Custom Software Development</option>
                  <option value="web-development">Web Applications</option>
                  <option value="mobile-apps">Mobile Apps</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="ai-integration">AI Integration</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Project Details *</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project requirements..."></textarea>
              </div>

              {status === "error" && <p className={styles.errorMsg}>{errorMessage}</p>}
              {status === "success" && <p className={styles.successMsg}>Your request has been submitted successfully. We will contact you soon!</p>}

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? "Sending..." : (
                  <>Send Request <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
