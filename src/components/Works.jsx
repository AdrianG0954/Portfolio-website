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
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="dark:bg-tertiary bg-navBarLight p-5 rounded-2xl
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
          <p className="mt-2 dark:text-secondary text-black text-[14px]">
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
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={styles.sectionSubText} //textVariant animates P tags.
        >
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* during my course work i have actively persued these projects
      be short and to the point and avoid telling them i am currently in uni and im a software dev bc i already stated that
      tell them that this is not necessary and that I did this soley to learn and grow. */}

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 dark:text-secondary text-black text-[17px]
        max-w-3xl leading-[30px]"
        >
          During my academic journey, I've taken on various projects to learn
          and improve. These projects were not required but were chosen by me to
          grow as a software developer. They represent my commitment to getting
          better and gaining practical experience in the field.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
