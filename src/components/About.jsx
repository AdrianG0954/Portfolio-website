import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

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
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <motion.div variants={textVariant()}>
        <h3 className="dark:text-white font-bold text-gray-100 md:text-[35px] sm:text-[30px] xs:text-[20px] text-[25px] mt-14">
          Hello, I'm Adrian!
        </h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 dark:text-white text-black md:text-[20px] sm:text-[20px] xs:text-[20px] text-[18px] max-w-6xl leading-[45px]"
      >
        Rising junior working towards a Bachelor's in Computer Science, and
        passionate about not only tech, but using it to change and improve our
        way of life.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-center mt-12 dark:text-white text-black md:text-[20px] font-bold sm:text-[20px] xs:text-[20px] text-[18px] max-w-6xl leading-[45px]"
      >
        "Luck is what happens when preparation meets opportunity" - Seneca.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
