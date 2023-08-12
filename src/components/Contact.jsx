import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { BunnyCanvas, EarthCanvas, EarthNightCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const date = new Date();

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_v7pajzv",
        "template_8k1045y",
        {
          from_name: form.name,
          to_name: "Adrian",
          from_email: form.email,
          to_email: "adrian.r.garcia03@gmail.com",
          message: form.message,
        },
        "ZbUO9KcdyIZJ7ADH4"
      )
      .then(
        () => {
          setLoading(false);
          alert("Your message has been sent!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Your message could not be sent.");
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex
    gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] dark:bg-black-100 bg-navBarLight p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

        {/* this is asking for your name */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span
              className="dark:text-white text-black font-medium
            mb-4"
            >
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="dark:bg-tertiary bg-[#FBFCF8] py-4 px-6 dark:placeholder:text-secondary
              placeholder:text-black
              dark:text-white text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>

          {/* this is asking for your email */}
          <label className="flex flex-col">
            <span
              className="dark:text-white text-black font-medium
            mb-4"
            >
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="dark:bg-tertiary bg-[#FBFCF8] py-4 px-6 dark:placeholder:text-secondary
              placeholder:text-black
              dark:text-white text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>

          {/* this is asking for your message */}
          <label className="flex flex-col">
            <span
              className="dark:text-white text-black font-medium
            mb-4"
            >
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="dark:bg-tertiary bg-[#FBFCF8] py-4 px-6 dark:placeholder:text-secondary
              placeholder:text-black
              dark:text-white text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="dark:bg-tertiary bg-[#FBFCF8] py-3 px-8 outline-none
            w-fit dark:text-white text-black font-bold shadow-md shadow-primary
            rounded-xl"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* for kimberly */}
        {/* make it so the bunny canvas shows every march 15th */}
        {/* since its her birthday */}
        {/* {date.getMonth() === 2 && date.getDate() === 15 ? <BunnyCanvas /> : null} */}

        {/* this shows the night canvas if it is night */}
        {/* and the day canvas if it is day */}
        {/* {date.getHours() > 18 || date.getHours() < 6 ? (
          <EarthNightCanvas />
        ) : (
          <EarthCanvas />
        )} */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
