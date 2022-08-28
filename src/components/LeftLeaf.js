import { motion } from "framer-motion";

// assets
import leftLeaf from "../assets/left-leaf.svg";

const LeftLeaf = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: "0" }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      exit={{ x: "-100vw" }}
      className="absolute top-64 left-6"
    >
      <img src={leftLeaf} alt="left-leaf" />
    </motion.div>
  );
};
export default LeftLeaf;
