import "./Services.css"
import { motion } from "framer-motion";

function Services() {
  const services = ["Web Development", "AI Integrated web", "Data Science", "Mobile application"]

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.h2 
          className="services-title"
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What We Offer:
        </motion.h2>

        <motion.div 
          className="services-buttons"
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.button 
              key={index} 
              className="service-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {service}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="services-visual"
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="service-circles">
            <motion.div className="service-circle" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}></motion.div>
            <motion.div className="service-circle" animate={{ y: [0, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity }}></motion.div>
            <motion.div className="service-circle" animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity }}></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
