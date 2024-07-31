import { SectionWrapper } from "../hoc";
import {
  technologiesLanguages,
  technologiesTools,
  backendTools,
} from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Tools & Languages</h2>
        <div className="mt-20 grid gap-10">
          <div>
            <h2 className="text-center dark:text-white text-gray-100 md:text-[25px] sm:text-[20px] xs:text-[15px] text-[30px] mb-10">
              Languages
            </h2>
            <div className="justify-center dark:text-white text-gray-100 flex flex-wrap gap-16">
              {technologiesLanguages.map((tools) => (
                <div
                  className="flex flex-col items-center mb-4"
                  key={tools.name}
                >
                  <img
                    src={tools.icon}
                    alt={tools.name}
                    className="w-16 h-16"
                  />{" "}
                  <span className="font-bold mt-2">{tools.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="dark:text-white text-gray-100 text-center md:text-[25px] sm:text-[20px] xs:text-[15px] text-[30px] mb-10 mt-10">
              Backend
            </h2>
            <div className="dark:text-white text-gray-100 flex justify-center flex-wrap gap-16">
              {backendTools.map((tools) => (
                <div
                  className="flex flex-col items-center mb-4"
                  key={tools.name}
                >
                  <img
                    src={tools.icon}
                    alt={tools.name}
                    className="w-16 h-16"
                  />{" "}
                  <span className="font-bold mt-2">{tools.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="dark:text-white text-gray-100 text-center md:text-[25px] sm:text-[20px] xs:text-[15px] text-[30px] mb-10 mt-10">
              Developer Tools
            </h2>
            <div className="dark:text-white text-gray-100 justify-center flex flex-wrap items-center gap-16">
              {technologiesTools.map((tools) => (
                <div className="flex flex-col mb-4" key={tools.name}>
                  <img
                    src={tools.icon}
                    alt={tools.name}
                    className="w-16 h-16"
                  />{" "}
                  <span className="font-bold mt-2">{tools.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default SectionWrapper(Tech, "");
