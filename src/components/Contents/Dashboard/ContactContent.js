// ContactContent.js
import React from 'react';
import '../css/Contact.css'; // Import the CSS file for styling

const ContactContent = () => (
  <div className="contact-container">
    <h2>Contact Us</h2>
    <p>
      We value your feedback and inquiries. Feel free to contact us for any assistance.
    </p>

    <div className="contact-info">
      <p>Email: <a href="mailto:mackmeiyarasan@gmail.com">mackmeiyarasan@gmail.com</a></p>
    </div>

    <p>
      Our office hours are from Monday to Friday, 9:00 AM to 5:00 PM.
    </p>

    {/* Developer Contact Details */}
    <div className="developer-info">
      <p>For technical support or development inquiries, please contact:</p>
      <ul>
        <li>Developer: Meiyarasan</li>
        <li>Email: <a href="mailto:mackmeiyarasan@gmail.com">mackmeiyarasan@gmail.com</a></li>
        {/* Add more details as needed */}
      </ul>
    </div>
  </div>
);

export default ContactContent;
