import { motion } from "framer-motion";

// assets
import right1 from "../assets/cloud-right1.svg";
import right2 from "../assets/cloud-right2.svg";

const CloudsRight = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      exit={{ x: "-100vw" }}
      className="fixed top-[20%] left-0 right-0"
    >
      {" "}
      <motion.div
        animate={{ x: "80px" }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <img src={right1} alt="cloud" className="fixed right-32 top-8" />
      </motion.div>
      <motion.div
        animate={{ x: "-150px" }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <img src={right2} alt="cloud" className="fixed right-28 top-24" />
      </motion.div>
    </motion.div>
  );
};
export default CloudsRight;
