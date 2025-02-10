import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { cv } from "../assets";

const Contact = () => {
  const handleDownloadCV = () => {
    // Replace 'path-to-your-cv.pdf' with the actual path to your CV file
    const cvPath = cv;
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Lionel_Deng_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <div className="mt-12 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-white font-medium">Email me at:</p>
            <a
              href="mailto:lioneldeng.dev@gmail.com"
              className="text-secondary hover:text-white transition-colors duration-300 text-xl"
            >
              lioneldeng.dev@gmail.com
            </a>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleDownloadCV}
              className="bg-tertiary py-3 px-80 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-opacity-80 transition-opacity duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
