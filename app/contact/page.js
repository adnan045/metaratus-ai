"use client";

import { useState } from 'react';
import PremiumStyles from '../../components/ModernPremium.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    interest: 'Metaratus.ai Platform Access',
    message: '',
    engagementLevel: 'Not sure yet',
    contactMethod: 'Email',
    timeWindow: 'Morning',
    source: 'Referral',
    consent: false,
    website_hidden: '' // Honeypot field
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    // Allows digits, spaces, parentheses, hyphens, and plus signs
    return /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/.test(phone.replace(/\s/g, ''));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={PremiumStyles.container}>
        <Header />
        <main className={PremiumStyles.mainSection}>
          <div className={PremiumStyles.contentWrapper}>
            <motion.div 
              className={PremiumStyles.successMessage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={PremiumStyles.successTitle}>Thank You</h2>
              <p className={PremiumStyles.successText}>
                Your message has been received. A Metaratus representative will review your request and follow up.
              </p>
              <button 
                className={PremiumStyles.submitButton}
                onClick={() => {
                  setSubmitted(false);
                  setFormData(prev => ({ ...prev, message: '', website_hidden: '', consent: false }));
                }}
                style={{ marginTop: '3rem' }}
              >
                Send Another Message
              </button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={PremiumStyles.container}>
      <Header />
      
      <main className={PremiumStyles.mainSection}>
        {/* Hero Section */}
        <header className={PremiumStyles.hero}>
          <motion.div 
            className={PremiumStyles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className={PremiumStyles.subtitle}>Contact Metaratus®</span>
            <h1 className={PremiumStyles.title}>Let’s Connect</h1>
            <p className={PremiumStyles.tagline}>
              Whether exploring Humanocentric™ AI enablement, platform access, or institutional engagement, we welcome the opportunity to learn about your objectives.
            </p>
          </motion.div>
          
          <motion.div 
            className={PremiumStyles.imageWrapper} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Image 
              src="/assets/Flux_Images/Flux_8.avif" 
              alt="Collaboration" 
              fill
              className={PremiumStyles.heroImage}
              style={{ objectFit: 'contain' }}
              priority
            />
            <div className={PremiumStyles.imageOverlay} />
          </motion.div>
        </header>

        <div className={PremiumStyles.contentWrapper} style={{ marginTop: '6rem' }}>
          <motion.div className={PremiumStyles.infoSection} {...fadeInUp}>
            <motion.p className={PremiumStyles.paragraph} {...fadeInUp}>
              Whether you are exploring Humanocentric™ AI enablement, platform access, consulting, training, or a more complex institutional engagement, we welcome the opportunity to learn about your objectives and determine fit.
            </motion.p>

            <motion.div className={PremiumStyles.contactInfo} {...fadeInUp}>
              <div className={PremiumStyles.infoItem}>
                <span className={PremiumStyles.infoLabel}>Mailing Address</span>
                <span className={PremiumStyles.infoValue}>
                  Metaratus, Inc.<br />
                  3343 Peachtree Rd NE<br />
                  Ste. 145-293<br />
                  Atlanta, GA 30326
                </span>
              </div>
              <div className={PremiumStyles.infoItem}>
                <span className={PremiumStyles.infoLabel}>Email</span>
                <span className={PremiumStyles.infoValue}>support@metaratus.ai</span>
              </div>
              <div className={PremiumStyles.infoItem}>
                <span className={PremiumStyles.infoLabel}>Phone</span>
                <span className={PremiumStyles.infoValue}>Toll Free: (888) 260-8805</span>
                <span className={PremiumStyles.infoValue}>Local: (470) 574-5655</span>
              </div>
              <div className={PremiumStyles.infoItem}>
                <span className={PremiumStyles.infoLabel}>Headquarters</span>
                <span className={PremiumStyles.infoValue}>Atlanta, GA</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className={PremiumStyles.formSection} {...fadeInUp}>
            <h2 className={PremiumStyles.formTitle}>Request Information</h2>
            <p className={PremiumStyles.formSubtitle}>Tell Us What You’re Building</p>
            
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                style={{ color: '#ff4d4d', marginBottom: '2rem', fontSize: '0.95rem', padding: '1rem', background: 'rgba(255, 77, 77, 0.05)', borderRadius: '12px', border: '1px solid rgba(255, 77, 77, 0.2)', textAlign: 'center' }}
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className={PremiumStyles.hidden}>
                <input 
                  type="text" 
                  name="website_hidden" 
                  tabIndex="-1" 
                  autoComplete="off"
                  value={formData.website_hidden}
                  onChange={handleChange}
                />
              </div>

              <div className={PremiumStyles.formGroup}>
                <label className={PremiumStyles.label}>Full Name<span className={PremiumStyles.required}>*</span></label>
                <input 
                  type="text" 
                  name="fullName"
                  required 
                  className={PremiumStyles.input} 
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>

              <div className={PremiumStyles.formGroup}>
                <label className={PremiumStyles.label}>Email Address<span className={PremiumStyles.required}>*</span></label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  className={PremiumStyles.input} 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                />
              </div>

              <div className={PremiumStyles.formGroup}>
                <label className={PremiumStyles.label}>Phone Number<span className={PremiumStyles.required}>*</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  className={PremiumStyles.input} 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                />
              </div>

              <div className={PremiumStyles.formGroup}>
                <label className={PremiumStyles.label}>Company / Organization<span className={PremiumStyles.required}>*</span></label>
                <input 
                  type="text" 
                  name="company"
                  required 
                  className={PremiumStyles.input} 
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name (or 'Independent')"
                />
              </div>

              <div className={PremiumStyles.formGroup}>
                <label className={PremiumStyles.label}>Primary Interest<span className={PremiumStyles.required}>*</span></label>
                <select 
                  name="interest"
                  className={PremiumStyles.select}
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option>Metaratus.ai Platform Access</option>
                  <option>Humanocentric™ AI Training (Individual)</option>
                  <option>Humanocentric™ AI Training (Organization / Team)</option>
                  <option>Consulting (Business Management / Strategy)</option>
                  <option>Digital Project Management</option>
                  <option>Managed IT / Remote Help Desk</option>
                  <option>Web / Hosting / Webmaster Services</option>
                  <option>SEO / PPC / Social Media</option>
                  <option>Research / Technical Writing / White Papers</option>
                  <option>Metaratus™ Hardware (Computers / Tablets)</option>
                  <option>Innovatus™ AI Glasses</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={PremiumStyles.formGroup}>
                <label className={PremiumStyles.label}>Message / Objectives<span className={PremiumStyles.required}>*</span></label>
                <textarea 
                  name="message"
                  required 
                  className={PremiumStyles.textarea}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you trying to accomplish?"
                />
              </div>

              <div className={PremiumStyles.formGroup}>
                <label className={PremiumStyles.label}>Engagement Level (Optional)</label>
                <select 
                  name="engagementLevel"
                  className={PremiumStyles.select}
                  value={formData.engagementLevel}
                  onChange={handleChange}
                >
                  <option>Not sure yet</option>
                  <option>Humanocentric™ Foundation ($350/mo)</option>
                  <option>Humanocentric™ Ascension ($1,250/mo)</option>
                  <option>Humanocentric™ Continuum ($3,500–$5,000/mo)</option>
                  <option>Humanocentric™ Imperium ($10,000+/mo)</option>
                  <option>Humanocentric™ Apex (Custom)</option>
                </select>
              </div>

              <div className={PremiumStyles.formGroup}>
                <label className={PremiumStyles.label}>Preferred Contact Method</label>
                <div className={PremiumStyles.radioGroup}>
                  <label className={PremiumStyles.radioLabel}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="Email"
                      checked={formData.contactMethod === 'Email'}
                      onChange={handleChange}
                      className={PremiumStyles.radio} 
                    />
                    Email
                  </label>
                  <label className={PremiumStyles.radioLabel}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="Phone"
                      checked={formData.contactMethod === 'Phone'}
                      onChange={handleChange}
                      className={PremiumStyles.radio} 
                    />
                    Phone
                  </label>
                </div>
              </div>

              <div className={PremiumStyles.formGroup}>
                <label className={PremiumStyles.label}>Preferred Time Window</label>
                <select 
                  name="timeWindow"
                  className={PremiumStyles.select}
                  value={formData.timeWindow}
                  onChange={handleChange}
                >
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>

              <div className={PremiumStyles.formGroup}>
                <label className={PremiumStyles.label}>How did you hear about us?</label>
                <select 
                  name="source"
                  className={PremiumStyles.select}
                  value={formData.source}
                  onChange={handleChange}
                >
                  <option>Referral</option>
                  <option>Search</option>
                  <option>Social Media</option>
                  <option>Event / Conference</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={PremiumStyles.checkboxGroup} style={{ marginBottom: '3rem' }}>
                <input 
                  type="checkbox" 
                  id="consent" 
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className={PremiumStyles.checkbox} 
                />
                <label htmlFor="consent" className={PremiumStyles.checkboxLabel}>
                  I consent to be contacted by Metaratus regarding this inquiry.
                </label>
              </div>

              <button 
                type="submit" 
                className={PremiumStyles.submitButton}
                disabled={isSubmitting}
                style={{ width: '100%' }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
