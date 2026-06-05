'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="section">
        <AnimateOnScroll>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I&apos;d love to hear from you.
          </p>
        </AnimateOnScroll>

        <div className={styles.grid}>
          <AnimateOnScroll delay={100} className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form} id="contact-form">
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className={styles.textarea}
                />
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === 'sending'}
                id="contact-submit"
              >
                {status === 'sending' ? (
                  <>
                    <span className={styles.spinner} />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Sent!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </AnimateOnScroll>

          <div className={styles.info}>
            <AnimateOnScroll delay={150} animation="zoom-in">
              <a href="https://mail.google.com/mail/?view=cm&to=ganendraptpratama@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.infoCard} id="contact-email-link">
                <div className={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Email</h4>
                  <p className={styles.infoValue}>ganendraptpratama@gmail.com</p>
                </div>
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} animation="zoom-in">
              <a href="https://www.google.com/maps/place/Merauke,+South+Papua" target="_blank" rel="noopener noreferrer" className={styles.infoCard} id="contact-location-link">
                <div className={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Location</h4>
                  <p className={styles.infoValue}>Merauke, South Papua</p>
                </div>
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250} animation="zoom-in">
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Availability</h4>
                  <p className={styles.infoValue}>Open to opportunities</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
