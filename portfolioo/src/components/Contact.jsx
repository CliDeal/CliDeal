"use client"

import { useState } from "react"
import "./Contact.css"
import { motion } from "framer-motion"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Failed to send message. Please try again later.")
      }
    } catch (err) {
      console.error("Error:", err)
      alert("An error occurred while sending the message.")
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Enter Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:clidealitsolutions@gmail.com"
              className="info-box"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
                alt="Gmail"
              />
              <span>clidealitsolutions@gmail.com</span>
            </a>
            <a
              href="https://www.instagram.com/cli.deal"
              className="info-box"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
              />
              <span>@cli.deal</span>
            </a>
            <a href="tel:+919123456789" className="info-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="Phone"
              />
              <span>+91 91234 56789</span>
            </a>

            <div className="contact-decorations">
              <div className="contact-circle contact-circle-1 floating"></div>
              <div className="contact-circle contact-circle-2 floating delay-1"></div>
              <div className="contact-circle contact-circle-3 floating delay-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
