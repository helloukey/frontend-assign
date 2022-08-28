import { motion } from "framer-motion";

// assets
import left1 from "../assets/cloud-left1.svg";
import left2 from "../assets/cloud-left2.svg";

const CloudsLeft = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: "0" }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      exit={{ x: "-100vw" }}
      className="fixed top-[20%] left-0 right-0"
    >
      {" "}
      <motion.div
        animate={{ x: "70px" }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <img src={left1} alt="cloud" className="fixed left-8" />
      </motion.div>
      <motion.div
        animate={{ x: "-20px", y: "-10px" }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <img src={left2} alt="cloud" className="fixed left-36 top-16" />
      </motion.div>
    </motion.div>
  );
};
export default CloudsLeft;
