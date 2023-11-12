import { styles } from "../styles";
import { real_logo2 } from "../assets";
import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";

const Hero = () => {
  const [typingStatus, setTypingStatus] = useState("Initializing");

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}
      >
        <div
          className="flex flex-col
        justify-center items-center mt-5"
        >
          <div className={`w-1 sm:h-80 h-40 violet-gradient `} />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} dark:text-white text-gray-100`}
          >
            {/* Welcome, I'm{" "} */}
            <TypeAnimation
              cursor={false}
              style={{
                whiteSpace: "pre-line",
                display: "inline-block",
              }}
              sequence={[
                "Bienvenido, Soy Adrian",
                1000,
                "Welcome, I'm Adrian",
                1000,
                () => setTypingStatus("Finished"),
              ]}
              speed={40}
              deletionSpeed={40}
            />
            {/* <span className="dark:text-[#b69bd4] text-[#769FCD]">Adrian</span> */}
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 dark:text-white-100 text-gray-100`}
          >
            {typingStatus == "Finished" && (
              <TypeAnimation
                cursor={true}
                style={{
                  whiteSpace: "pre-line",
                  height: "195px",
                  display: "block",
                }}
                sequence={[
                  "I am a Computer Science student\n currently attending UConn.",
                  1500,
                  "I am a Computer Science student\n with a passion for software development.",
                  1500,
                ]}
                repeat={Infinity}
                speed={40}
                deletionSpeed={40}
              />
            )}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={real_logo2}
          alt="logo"
          style={{
            width: "750px",
            height: "750px",
            marginTop: "365px",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
