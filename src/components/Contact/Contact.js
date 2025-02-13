import React, { useEffect, useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormData({
      ...formData,
      [category]: value,
    });
  };

  useEffect(() => {
    let timeoutId;
    if (status.message) {
      timeoutId = setTimeout(() => {
        setStatus({});
      }, 5000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [status.message]);

  const [activeField, setActiveField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setButtonText("Send");
      setFormData(formInitialDetails);
      if (data.success) {
        setStatus({ success: true, message: "Message sent successfully." });
      } else {
        setStatus({
          success: false,
          message: data.status || "Failed to send message.",
        });
      }
    } catch (err) {
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Error sending message.",
      });
    }
  };

  return (
    <div className="contact-section">
      {/* Animated background elements */}
      <div className="animated-bg">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="stars-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`star star-${i + 1}`}></div>
        ))}
      </div>

      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">
            Let's Create Something
            <span className="magic-text">
              <span className="magic-star">
                <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-17.6 24.01l-185.5 47.3l-102.1 180.7c-4.781 6.865-12.89 10.96-21.4 10.96c-8.492 0-16.62-4.098-21.4-10.96l-102.1-180.7l-185.5-47.3c-10.19-3.150-17.6-12.67-17.6-24.01c0-11.34 7.406-20.86 17.6-24.01l185.5-47.3l102.1-180.7c4.781-6.865 12.89-10.96 21.4-10.96c8.492 0 16.62 4.098 21.4 10.96l102.1 180.7l185.5 47.3c10.19 3.150 17.6 12.67 17.6 24.01z" />
                </svg>
              </span>
              <span className="magic-text-words">Magical</span>
            </span>
          </h1>
          <p className="contact-description">
            Feel free to reach out. I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="contact-form-container">
          <div className="form-decoration left"></div>
          <div className="form-decoration right"></div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div
              className={`form-group ${activeField === "name" ? "active" : ""}`}
            >
              <div className="input-icon">
                <User className="icon" />
              </div>
              <input
                type="text"
                className="form-input"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => onFormUpdate("name", e.target.value)}
                onFocus={() => setActiveField("name")}
                onBlur={() => setActiveField(null)}
              />
            </div>

            <div
              className={`form-group ${
                activeField === "email" ? "active" : ""
              }`}
            >
              <div className="input-icon">
                <Mail className="icon" />
              </div>
              <input
                type="email"
                className="form-input"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => onFormUpdate("email", e.target.value)}
                onFocus={() => setActiveField("email")}
                onBlur={() => setActiveField(null)}
              />
            </div>

            <div
              className={`form-group ${
                activeField === "message" ? "active" : ""
              }`}
            >
              <div className="input-icon">
                <MessageSquare className="icon" />
              </div>
              <textarea
                className="form-input form-textarea"
                placeholder="Share Your Vision"
                required
                value={formData.message}
                onChange={(e) => onFormUpdate("message", e.target.value)}
                onFocus={() => setActiveField("message")}
                onBlur={() => setActiveField(null)}
              />
            </div>

            <button type="submit" className="submit-button">
              <span className="button-text">{buttonText}</span>
              <span className="button-icon">
                <Send />
              </span>
            </button>
            {status && status.message && (
              <div
                className={`status-message ${status.success ? 'success' : 'error'}`}
              >
                {status.message}
              </div>
            )}
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
