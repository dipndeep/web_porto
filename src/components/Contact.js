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
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3500);
    }, 900);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="section">
        <AnimateOnScroll>
          <span className="section-label">Communication</span>
          <h2 className="section-title">
            Initiate Inquiry or <em>Collaboration</em>
          </h2>
          <p className="section-subtitle">
            Whether for research partnerships, data analytics consulting, or engineering opportunities,
            my inbox is open. I aim to respond within 24–48 hours.
          </p>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {/* Form */}
          <AnimateOnScroll delay={100} className={styles.formWrapper} animation="fade-up">
            <form onSubmit={handleSubmit} className={styles.form} id="contact-form">
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@organization.com"
                    required
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message / Project Scope
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline the objectives, timeframe, or questions you have..."
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
                    <span>Dispatching...</span>
                  </>
                ) : status === 'sent' ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Message Dispatched</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </AnimateOnScroll>

          {/* Contact Details */}
          <div className={styles.info}>
            <AnimateOnScroll delay={150} animation="fade-up">
              <a
                href="mailto:ganendraptpratama@gmail.com"
                className={`card ${styles.infoCard}`}
                id="contact-email-link"
              >
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>DIRECT EMAIL</span>
                  <p className={styles.infoValue}>ganendraptpratama@gmail.com</p>
                </div>
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} animation="fade-up">
              <div className={`card ${styles.infoCard}`}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>BASE LOCATION &amp; TIMEZONE</span>
                  <p className={styles.infoValue}>Merauke, South Papua, ID (WIT / UTC+9)</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250} animation="fade-up">
              <div className={`card ${styles.infoCard}`}>
                <div className={styles.infoIcon}>
                  <span className={styles.statusDot} />
                </div>
                <div>
                  <span className={styles.infoLabel}>CURRENT STATUS</span>
                  <p className={styles.infoValue}>Open for Applied AI, Data Modeling &amp; Research</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
