import { motion } from "framer-motion"
import "./Projects.css"

const projects = [
  {
    name: "Stream360",
    description:
      "Connect with anyone, anywhere with our professional-grade video conferencing solution.",
    tools: ["React", "Python", "MongoDB", "Express"],
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    source: "https://github.com/Niranjan-NN/stream360",
    host: "https://stream360-frontend.onrender.com/",
  },
  {
    name: "Weather-Dashboard",
    description:
      "A weather dashboard that allows users to view real-time, historical, and forecast weather with clean visualization and insights for decision-making.",
    tools: ["React", "GitHub", "Vercel"],
    image: "https://images.pexels.com/photos/7013070/pexels-photo-7013070.png",
    source: "https://github.com/kaviyamagudeeswaran/Weather-Dashboard",
    host: "https://vercel.com/kaviyamagudeeswarans-projects/weather-dashboard",
  },
  {
  name: "Ticketing App",
  description:
    "A Ticketing App built with React allows users to book, view, and manage event or travel tickets seamlessly. It offers a user-friendly interface with real-time updates and digital ticket generation.",
  tools: ["React Js", "Express Js", "MongoDB"],
  image: "https://images.pexels.com/photos/17514177/pexels-photo-17514177.jpeg",
  source: "https://github.com/Varsha-hub-create/Ticket-App",
  host: "", // Add your host link here if deployed
},
]

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
          <span className="underline"></span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tools">
                <strong>Tools:</strong> {project.tools.join(", ")}
              </p>
              <div className="project-links">
  <a
    className="project-btn"
    href={project.source}
    target="_blank"
    rel="noopener noreferrer"
  >
    🔗 Source Code
  </a>
  {project.host && (
    <a
      className="project-btn"
      href={project.host}
      target="_blank"
      rel="noopener noreferrer"
    >
      🌐 Live Demo
    </a>
  )}
</div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
