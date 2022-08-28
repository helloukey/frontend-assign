import React, { useState } from "react";
import { DayPicker, Row, RowProps } from "react-day-picker";
import { differenceInCalendarDays } from "date-fns";
import { useSwipeContext } from "../hooks/useSwipeContext";

// styles
import "./Date.css";

// assets
import avatar from "../assets/faces/current-user.png";

function isPastDate(date: Date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props: RowProps) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}

export default function App() {
  const { isActive } = useSwipeContext();
  const [selectedDay, setSelectedDay] = useState(new Date());
  return (
    <>
      <DayPicker
        fromDate={new Date()}
        components={{ Row: OnlyFutureRow }}
        hidden={isPastDate}
        showOutsideDays
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
