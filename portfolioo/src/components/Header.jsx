"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./Header.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About Us" },
    { href: "#services", text: "Services" },
    { href: "#contact", text: "Contact" },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <motion.span
            className="logo-text"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CliDeal
          </motion.span>
        </div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          {navLinks.map((link, index) => (
            <motion.a
              key={link.text}
              href={link.href}
              className="nav-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.text}
            </motion.a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  className="mobile-nav-link"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
