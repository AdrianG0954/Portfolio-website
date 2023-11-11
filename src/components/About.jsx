import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Tech from "../components/Tech";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="dark:bg-darkColorSecondary bg-navBarLight rounded-[20px] py-5 px-12 min-h-[280px]
        flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="dark:text-white text-gray-100 text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 dark:text-white text-black text-[17px]
      max-w-3xl leading-[30px]"
      >
        As an honors undergrad in computer science at UConn, I'm deeply
        passionate about software. Here, I present my projects and skills,
        showcasing my journey. My experience spans across various programming
        languages, enhancing my adaptability and innovative thinking. Driven by
        a thirst for learning and a knack for inventive solutions, I approach
        challenges with a unique perspective.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
