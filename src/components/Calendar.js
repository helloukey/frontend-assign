import { motion } from "framer-motion";

// asset
import calendar from "../assets/calendar.svg";

const Calendar = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: "0" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ x: "-100vw" }}
      className="absolute top-72 left-24"
    >
      <img src={calendar} alt="calendar" />
    </motion.div>
  );
};
export default Calendar;
