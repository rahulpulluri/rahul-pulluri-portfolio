import { CONTACT } from '../constants'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
        <div className="text-center tracking-tighter">
            {/* LinkedIn Profile */}
            <motion.p 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4">
              <a href="https://www.linkedin.com/in/rahul-pulluri-173924161/" target="_blank" rel="noopener noreferrer" className="border-b" style={{ textDecoration: 'none' }}>LinkedIn Profile</a>
            </motion.p>

            {/* Email */}
            <motion.p 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4">
              <a href="mailto:your-email@domain.com" className="border-b">{CONTACT.email}</a>
            </motion.p>
        </div>
    </div>
  )
}

export default Contact;