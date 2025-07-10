import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        {/* Block 1 */}
        <motion.div
          className="about-section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-content">
            <h2>About</h2>
            <p>Welcome to CliDeal - Where Innovation Meets Intelligence.</p>
            <p>
We are a dynamic freelance company specializing in web development, data science, and artificial intelligence. At Clideal, we don’t just deliver digital solutions — we craft intelligent experiences that empower businesses to grow, adapt, and lead in the digital era. 
            </p>
          </div>
          <div className="about-character">
            <div className="character-1">
              <img src="/avatar.jpeg" alt="Character" />
            </div>
          </div>
        </motion.div>

        {/* Block 2 (Reverse) */}
        <motion.div
          className="about-section reverse"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="about-character">
            <div className="character-2">
              <img src="/avatar2.jpeg" alt="Character" />
            </div>
          </div>
          <div className="about-content">
            <p>
              Our team is driven by a passion for creativity, technology, and results. Whether you're a startup with a fresh idea or an enterprise looking to elevate your digital presence, we are ready to transform your vision into a smart, scalable, and data-driven solution.
            </p>
          </div>
        </motion.div>

        {/* Block 3 (Innovation Graphics) */}
        <motion.div
          className="innovation-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="innovation-graphics">
            <div className="innovation-circles">
              <div className="inno-circle inno-circle-1 floating-circle glow delay-0"></div>
              <div className="inno-circle inno-circle-2 floating-circle glow delay-1"></div>
              <div className="inno-circle inno-circle-3 floating-circle glow delay-2"></div>
            </div>
            <div className="innovation-lines"></div>
          </div>
          <div className="innovation-content">
            <p>
              With a unique blend of design thinking, technical expertise, and AI-powered insights, we ensure every project is not just functional — but futuristic. We prioritize collaboration, agility, and innovation in everything we do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
