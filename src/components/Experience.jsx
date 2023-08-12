import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useMemo } from "react";
import useColor from "./hook2";

const ExperienceCard = ({ experience }) => {
  const [colorMode] = useColor();

  return (
    <VerticalTimelineElement
      key={colorMode}
      className="custom-class dark:text-white text-black"
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            //ICONS
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        {/* this is the title of the job. */}
        <h3 className="dark:text-white text-gray-100 text-[24px] font-bold text-center">
          {experience.title}
        </h3>
        {/* Company Name */}
        <p
          className="dark:text-secondary text-gray-100 text-[16px] text-bold dark:text-white text-black text-center
        font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience.point-${index}`}
            className="dark:text-white-100 text-gray-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={styles.sectionSubText} //textVariant animates P tags.
        >
          What I have accomplished
        </p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "");
