import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { download } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const downLoadFile = (url) => {
  const link = document.createElement("a");
  const fileName = url.split("/").pop();
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_Link,
  link,
}) => {
  const file_name = link;
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className="dark:bg-darkColorSecondary bg-navBarLight p-5 rounded-2xl
      sm:w-[360px] w-full"
      >
        {/*image of project*/}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover
            rounded-2xl"
          />
          {/*github icon*/}
          <div
            // position it to the top right and give the items space between them
            className="absolute top-0 right-0 m-3 card-img_hover justify-end
            flex-col flex content-between gap-1"
          >
            <div
              // downloads exe file
              onClick={() => downLoadFile(file_name)}
              // display them top bottom
              className="black-gradient w-10 h-10
              rounded-full flex justify-center
              items-center cursor-pointer
              "
            >
              <img
                src={download}
                alt="download"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              //opens github link in new tab
              onClick={() => window.open(source_code_Link)}
              className="black-gradient w-10 h-10
              rounded-full flex justify-center
              items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          {/*names and descriptions of projects*/}
          <h3 className="dark:text-white text-gray-100 font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 dark:text-white text-black text-[14px]">
            {description}
          </p>
        </div>

        {/*tags of projects*/}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
