import { motion } from "framer-motion";

// assets
import man from "../assets/man.svg";

const Man = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ x: "-100vw" }}
      className="fixed top-72 right-5"
    >
      <img src={man} alt="man" />
    </motion.div>
  );
};
export default Man;
