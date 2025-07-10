import { motion } from "framer-motion"
import "./Footer.css"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-left">
            <p onClick={scrollToTop} className="footer-click">
              © Copyright 2025 CliDeal
            </p>
          </div>
          <div className="footer-right">
            <p onClick={scrollToTop} className="footer-click">
              Terms & Conditions
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
