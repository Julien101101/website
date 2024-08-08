import React from 'react';
import './Privacy.css';

function Privacy() {
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Privacy Policy for Google Search Notes</h1>
        <p>Last updated: August 8th, 2024</p>
      </header>

      <section className="privacy-policy">
        <h2>Introduction:</h2>
        <p>Google Search Notes ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Chrome extension. Please read this privacy policy carefully.</p>
        
        <h2>Data We Collect:</h2>
        <h3>Search Queries:</h3>
        <p>We collect the search queries entered by you when you add notes using our extension.</p>
        
        <h3>Notes:</h3>
        <p>We store the notes you create related to your search queries.</p>
        
        <h2>How We Use Your Data:</h2>
        <h3>Storage:</h3>
        <p>The search queries and notes are stored locally on your device. This data is not transmitted to our servers or any third parties.</p>
        
        <h2>Third-Party Services:</h2>
        <p>Our extension does not use any third-party services to collect or store your data.</p>
        
        <h2>Data Security:</h2>
        <p>We use reasonable measures to protect your data stored locally on your device from unauthorized access.</p>
        
        <h2>Your Rights:</h2>
        <p>You can delete your notes and search queries at any time by removing the extension or clearing the data through Chrome's extension settings.</p>
        
        <h2>Changes to This Privacy Policy:</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date of this Privacy Policy.</p>
        
        <h2>Contact Us:</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at [your email address].</p>
      </section>
    </div>
  );
}

export default Privacy;
