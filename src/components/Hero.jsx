import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/rav.png";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-lg text-gray-400 opacity-30 lg:mt-24 tracking-normal"
            >
              Hi, my name is
            </motion.span>
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-6xl font-thin tracking-tight lg:mt-2 lg:text-8xl"
            >
              Rahul Pulluri.
            </motion.h1>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-normal"
            >
              I'm a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500">Software Developer</span> currently pursuing a Master of Engineering in Computer Science at Virginia Tech, with an expected graduation date in December 2024. Prior to my master's program, I worked as an Associate Software Engineer at Accenture for one year and as a Software Developer Intern at iThink Logistics for six months. I have extensive hands-on experience in Full Stack Development, Data Engineering, and Cloud Computing. I am actively seeking full-time opportunities starting in January 2025.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Rahul Pulluri"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
