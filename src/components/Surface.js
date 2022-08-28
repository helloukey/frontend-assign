import { motion } from "framer-motion";

// assets
import surface from "../assets/surface.svg";

const Surface = () => {
  return (
    <motion.div
      initial={{ y: "100vh", x: "-100%" }}
      animate={{ y: "0", x: "0" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ y: "100vh", x: "-100%" }}
      className="px-5 absolute top-96 w-full -z-10"
    >
      <img src={surface} alt="surface" className="w-full" />
    </motion.div>
  );
};
export default Surface;
