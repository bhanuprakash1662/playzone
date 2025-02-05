
const ContactUs = () => {
  return (
    <div>
      <style>
        {`
          /* General Styling */
          body {
            font-family: "Arial", sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f4f9;
          }

          .contact-container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            animation: fadeIn 1s ease-in-out;
          }

          .contact-heading {
            font-size: 2.2rem;
            color: #007bff;
            text-align: center;
            margin-bottom: 10px;
          }

          .contact-description {
            font-size: 1rem;
            color: #555555;
            text-align: center;
            margin-bottom: 20px;
          }

          .contact-details {
            text-align: center;
            margin-bottom: 20px;
          }

          .contact-details p {
            margin: 5px 0;
            font-size: 1rem;
            color: #333333;
          }

          .social-links {
            text-align: center;
            margin-top: 20px;
          }

          .social-links a {
            margin: 0 10px;
            color: #007bff;
            font-size: 1.5rem;
            transition: color 0.3s, transform 0.2s;
            text-decoration: none;
          }

          .social-links a:hover {
            color: #0056b3;
            transform: scale(1.2);
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .form-label {
            font-size: 0.9rem;
            font-weight: bold;
            color: #333333;
          }

          .form-input,
          .form-textarea {
            font-size: 1rem;
            padding: 10px;
            border: 1px solid #cccccc;
            border-radius: 5px;
            transition: border-color 0.3s;
          }

          .form-input:hover,
          .form-textarea:hover {
            border-color: #007bff;
          }

          .form-textarea {
            height: 100px;
            resize: none;
          }

          .contact-button {
            background: #007bff;
            color: #ffffff;
            padding: 12px 20px;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.2s;
          }

          .contact-button:hover {
            background: #0056b3;
            transform: scale(1.05);
          }

          /* Animation */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div className="contact-container">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-description">
          Have questions or need help? Feel free to reach out to us!
        </p>

        

        {/* Contact Form */}
        <form className="contact-form">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter your name"
          />
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email"
          />
          <label className="form-label">Message</label>
          <textarea
            className="form-textarea"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="contact-details">
          <p><strong>Contact Numbers:</strong> +91 6301993194, +91 7337011242 </p>
          <p><strong>Location:</strong> Near KPHB Colony, Road No: 3, Hyderabad</p>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;
