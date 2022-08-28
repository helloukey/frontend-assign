import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useSwipeContext } from "../hooks/useSwipeContext";

// assets
import avatar from "../assets/faces/current-user.png";

// styles
import "react-day-picker/dist/style.css";
import "./Date.css";

export default function App() {
  const { isActive } = useSwipeContext();
  const [selectedDay, setSelectedDay] = useState(new Date());
  return (
    <>
      <DayPicker
        numberOfMonths={2}
        mode="single"
        selected={selectedDay}
        onSelect={setSelectedDay}
        pagedNavigation
        className={
          isActive
            ? "text-white animate-fade-in-down"
            : "text-white animate-fade-in-down"
        }
      />
      <div className="absolute top-5 pt-0.5 right-5">
        <img src={avatar} alt="avatar" />
      </div>
    </>
  );
}
