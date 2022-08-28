import { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import { motion } from "framer-motion";

const DateChange = () => {
  const [isAnimateNumber, setIsAnimateNumber] = useState(false);
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: "0" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ x: "-100vw" }}
      className="fixed flex flex-nowrap items-center gap-2 mt-12"
      onAnimationComplete={() => setIsAnimateNumber(true)}
    >
      <p className="text-[#6A777C] font-normal text-4xl ml-5">Calendar</p>
      {isAnimateNumber ? (
        <AnimatedNumbers
          fontStyle={{ fontSize: "36px", color: "#FFFFFF", fontWeight: "700" }}
          animateToNumber={2022}
        />
      ) : (
        <p style={{ fontSize: "36px", color: "#FFFFFF", fontWeight: "700" }}>
          2017
        </p>
      )}
    </motion.div>
  );
};
export default DateChange;
