import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologiesLanguages, technologiesTools } from "../constants";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-20">
        {/* Tools Column */}
        <div>
          <h2 className="dark:text-white text-gray-100 font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10">
            Developer Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {technologiesTools.map((tools) => (
              <div className="w-28 h-28 mb-4" key={tools.name}>
                <BallCanvas icon={tools.icon} />
              </div>
            ))}
          </div>
        </div>

        {/* Languages Column */}
        <div>
          <h2 className="dark:text-white text-gray-100 font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10">
            Languages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {technologiesLanguages.map((technology) => (
              <div className="w-28 h-28 mb-4" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionWrapper(Tech, "");
