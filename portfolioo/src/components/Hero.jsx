import "./Hero.css"
import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="hero-title">
              <span className="brand-name">CliDeal</span>
              <br />
              <span className="subtitle">IT Solutions</span>
            </h1>
            <p className="hero-description">
              We Build What Clients
              <br />
              <span className="highlight">#Dream!</span>
            </p>
            <div className="info-box-wrapper">
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
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="laptop-container">
              <div className="tech-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
              </div>
              <div className="laptop">
                <div className="laptop-screen">
                  <div className="screen-content">CliDeal</div>
                </div>
                <div className="laptop-base"></div>
              </div>
              <div className="tech-elements">
                <div className="tech-line tech-line-1"></div>
                <div className="tech-line tech-line-2"></div>
                <div className="tech-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
