import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPython, SiDjango, SiFlask, SiMysql, SiAmazonaws, SiApachespark, SiDocker, SiKubernetes, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTensorflow, SiJenkins, SiNumpy } from "react-icons/si";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiJava, DiGo } from "react-icons/di";
// import { TbBrandPandas } from "react-icons/tb"; // pandas icon
import { motion } from "framer-motion";

const iconVarients =(duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Skills</motion.h1>
        
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVarients(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className="text-7xl text-red-600"/>
            </motion.div>

            <motion.div 
            variants={iconVarients(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl text-yellow-400"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl text-yellow-300"/>
            </motion.div>

            <motion.div 
            variants={iconVarients(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className="text-7xl text-blue-600"/>
            </motion.div>

            <motion.div 
            variants={iconVarients(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiGo className="text-7xl text-blue-400"/>
            </motion.div>

            <motion.div 
            variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>

            <motion.div 
            variants={iconVarients(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            
            
            <motion.div 
            variants={iconVarients(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDjango className="text-7xl text-green-700"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFlask className="text-7xl text-gray-500"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-blue-500"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(6.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAmazonaws className="text-7xl text-orange-500"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiApachespark className="text-7xl text-orange-400"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDocker className="text-7xl text-blue-400"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(6.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKubernetes className="text-7xl text-blue-500"/>
            </motion.div>

            <motion.div 
            variants={iconVarients(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJenkins className="text-7xl text-red-500"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(6.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiHtml5 className="text-7xl text-orange-600"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCss3 className="text-7xl text-blue-600"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTensorflow className="text-7xl text-orange-500"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNumpy className="text-7xl text-blue-500"/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-7xl text-orange-500"/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies;
