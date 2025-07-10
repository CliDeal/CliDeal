import "./Team.css"
import { motion } from "framer-motion"

function Team() {
  const teamMembers = [
    { name: 'Akash', role: 'CEO', image: 'akash.jpeg' },
    { name: 'Niranjan', role: 'CTO / Backend Developer', image: '/nija.jpg' },
    { name: 'Pradeep', role: 'HR / Mobile App Developer', image: '/pradeep.png' },
    { name: 'Hari Haran', role: 'BDM', image: 'hari.jpeg' },
    { name: 'Kaviya', role: 'Frontend Developer', image: '/kav.jpg' },
    { name: 'Varshini', role: 'Frontend Developer', image: 'varsh.jpeg' },
    { name: 'Vimal Kumar', role: 'Backend Developer', image: '/vimal.jpeg' },
    { name: 'Gowtham', role: 'UI/UX Designer', image: 'gow.jpeg' },
    { name: 'Dinesh P', role: 'Backend Developer', image: 'din.jpg' },
    { name: 'Visalachi', role: 'Backend Developer', image: 'visa.jpeg' },
    { name: 'Abitha Shree', role: 'Frontend Developer', image: 'abi.jpg' },
    { name: 'Barnika', role: 'Frontend Developer', image: 'barni.jpg' },
    { name: 'Swasthik', role: 'UI/UX Designer', image: 'swa.jpg' },
    { name: 'Balaji', role: 'Frontend Developer', image: 'bals.jpeg' },
    { name: 'Sanjay', role: 'Frontend Developer', image: 'san.jpeg' },
  ]

  return (
    <section className="team">
      <div className="container">
        <h2 className="team-title">Our Team</h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="team-image">
                <img src={member.image || "/placeholder.svg"} alt={member.name} />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
