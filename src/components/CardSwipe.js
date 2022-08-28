import { useState } from "react";
import { useSwipeContext } from "../hooks/useSwipeContext";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

// assets
import swipeCard from "../assets/swipe-card.svg";
import actionCard from "../assets/action-card.svg";
import closeButton from "../assets/cancel-button.svg";
import addButton from "../assets/add-button.svg";
import designScrum from "../assets/design-scrum.svg";
import q2Planning from "../assets/q2-planning.svg";
import coldplay from "../assets/coldplay.svg";
import eventText from "../assets/upcoming-event-text.svg";
import timingLine from "../assets/timing-line.svg";

const CardSwipe = () => {
  const { isActive, dispatchActive } = useSwipeContext();
  const [action, setAction] = useState(false);
  const [line, setLine] = useState(false);
  const handlers = useSwipeable({
    onSwipedUp: () => dispatchActive(true),
    onSwipedDown: () => dispatchActive(false),
  });
  return (
    <>
      <div
        {...handlers}
        className={
          isActive
            ? "absolute bottom-0 left-0 right-0 transition-all duration-700 ease-out"
            : "absolute -bottom-2/4 left-0 right-0 transition-all duration-700 ease-out"
        }
      >
        {" "}
        <div className="relative">
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: "0" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            exit={{ y: "100vh" }}
          >
            <img src={swipeCard} alt="swipe-card" className="w-full" />
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            exit={{ x: "-100vw" }}
            className="absolute top-5 left-5"
          >
            <img src={eventText} alt="event-text" />
          </motion.div>
          <motion.div
            initial={{ x: "100px" }}
            animate={{ x: "0" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            exit={{ display: "none" }}
            className="absolute top-12 left-5"
          >
            <img src={designScrum} alt="design-scrum" />
          </motion.div>
          <motion.div
            initial={{ x: "40px" }}
            animate={{ x: "0" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            exit={{ display: "none" }}
            className="absolute top-12 left-[45.5%]"
          >
            <img src={q2Planning} alt="q2-planning" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            exit={{ display: "none" }}
            className="absolute top-12 right-0"
            onAnimationComplete={() => setLine(true)}
          >
            <img src={coldplay} alt="coldplay" />
          </motion.div>
          {line && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              exit={{ display: "none" }}
            >
              <img
                src={timingLine}
                alt="timing-line"
                className="absolute top-[34.5%] w-3/4 pt-[10%] right-[21px] bg-[rgba(255,255,255,0.5)]"
              />
            </motion.div>
          )}
          <img
            src={addButton}
            alt="add-button"
            className={isActive ? "absolute bottom-2 right-4" : "hidden"}
            onClick={() => setAction(true)}
          />
        </div>
      </div>

      {/* Actions */}
      <div
        className={
          action
            ? "min-h-screen bg-[rgba(0,0,0,0.5)] fixed z-10 left-0 right-0 bottom-0 flex flex-col justify-end transition-all duration-700 ease-in-out"
            : "min-h-screen bg-[rgba(0,0,0,0.5)] fixed z-10 left-0 right-0 -bottom-full flex flex-col justify-end transition-all duration-700 ease-in-out"
        }
      >
        <div className="relative">
          <img src={actionCard} alt="action-card" className="w-full" />
          <img
            src={closeButton}
            alt="close-button"
            className="absolute left-5 top-5"
            onClick={() => setAction(false)}
          />
        </div>
      </div>
    </>
  );
};
export default CardSwipe;
