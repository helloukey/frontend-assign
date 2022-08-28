import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// assets
import forward from "../assets/forward-arrow.svg";

const WelcomeText = () => {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ y: "100vh" }}
      className="bg-white rounded-t-3xl absolute bottom-0 h-swipe left-0 right-0 py-5 px-4 overflow-hidden"
    >
      <p className="text-[#4A4A4A] text-left font-bold text-xl mb-3">
        Hi Aman,
      </p>
      <p style={{ fontFamily: "Lato" }} className="text-left text-xs leading-5">
        Welcome to your daily event calendar. Be more engaging & personalised
        than ever before. We’ll help you in{" "}
        <span className="font-bold">
          Tracking Upcoming Events, Scheduling Meetings & Creating New Event!
        </span>
      </p>
      <div className="bg-[#FF6A3D] rounded-full p-16 absolute -right-10 -bottom-12">
        <Link to="/todos">
          <img
            src={forward}
            alt="forward"
            className="w-6 h-6 absolute bottom-16 pb-2 ml-1 left-8"
          />
        </Link>
      </div>
    </motion.div>
  );
};
export default WelcomeText;
