
function Contact() {
  return (
    <div className="pageContainer">
      <div className="contactContent">
        <h1>Contact Us</h1>
        
        <p>Have questions or need assistance? We would love to hear from you!</p>

        <div className="contactInfo">
          <div className="contactItem">
            <h3>📧 Email</h3>
            <p>support@gadgetpointxx.com</p>
          </div>

          <div className="contactItem">
            <h3>📞 Phone</h3>
            <p>+977 (980) 00X-XXXX</p>
          </div>

          <div className="contactItem">
            <h3>📍 Address</h3>
            <p>123 Tech Street<br/>Itahari, Sunsari 56700<br/>Nepal</p>
          </div>

          <div className="contactItem">
            <h3>⏰ Business Hours</h3>
            <p>Sunday - Thursday: 10:00 AM - 5:00 PM<br/>Friday: 10:00 AM - 2:00 PM<br/>Saturday: Closed</p>
          </div>
        </div>

        <div className="contactForm">
          <h2>Send us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact