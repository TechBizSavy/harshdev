'use client';

import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <h1 className={styles.pageTitle}>Contact Me</h1>
      <p className={styles.pageDescription}>
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2>Get In Touch</h2>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

          <div className={styles.contactMethod}>
            <strong>Email:</strong>
            <a href="mailto:contact@harshchalwadi.com">contact@harshchalwadi.com</a>
          </div>

          <div className={styles.contactMethod}>
            <strong>Location:</strong>
            <span>Mumbai, India</span>
          </div>

          <div className={styles.socialConnect}>
            <h3>Connect with me</h3>
            <p>Find me on social media platforms for more updates and interactions.</p>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2>Contact Form</h2>
          {submitted && (
            <div className={styles.successMessage}>
              <p>Thank you for reaching out! I'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your Email"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Your Message"
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
