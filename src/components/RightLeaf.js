import { motion } from "framer-motion";

// assets
import rightLeaf from "../assets/right-leaf.svg";

const RightLeaf = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      exit={{ x: "-100vw" }}
      className="fixed top-64 right-6"
    >
      <img src={rightLeaf} alt="left-leaf" />
    </motion.div>
  );
};
export default RightLeaf;
