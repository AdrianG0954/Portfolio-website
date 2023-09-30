import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="dark:bg-darkColor bg-lightMode p-10 rounded-3xl xs:w-[320px]
    w-full "
    >
      <p className="dark:text-white text-black font-black text-[47px]">"</p>
      <div className="mt-1">
        <p
          className="dark:text-white text-black tracking-wider
      text-[17px]"
        >
          {testimonial}
        </p>
        <div
          className="mt-7 flex justify-between
      items-center gap-1"
        >
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 dark:text-white text-black text-[12px]">
              {designation} at {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedack-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    /*this makes a square */
    <div className="mt-12 dark:bg-[#2c2c2c] bg-[#FBFCF8] rounded-[20px]">
      <div
        className={`${styles.padding} dark:bg-darkColorSecondary bg-navBarLight
    rounded-2xl min-h-[300px] `}
      >
        {/* this is the text */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap
    gap-7`}
      >
        {/* this is the card */}
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={index} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
