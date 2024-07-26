import { EDUCATIONS } from '../constants'
import { motion } from "framer-motion"

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">
        Education
      </motion.h1>
      <div className="space-y-12 mx-auto max-w-3xl">
        {EDUCATIONS.map((education, index) => (
          <div key={index} className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="lg:w-1/3 mb-4 lg:mb-0 text-center lg:text-left lg:pl-20">
              <h6 className="text-xl font-semibold text-purple-100 whitespace-nowrap">
                {education.institution}
              </h6>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="lg:w-2/3 lg:pl-32 text-center lg:text-left">
              <p className="text-lg text-neutral-400 mb-1">{education.degree}</p>
              <p className="text-sm text-neutral-400">{education.year}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
