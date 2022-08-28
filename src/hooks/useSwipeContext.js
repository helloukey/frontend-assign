import { useContext } from "react";
import { SwipeContext } from "../context/SwipeContext";

export const useSwipeContext = () => {
  const Context = useContext(SwipeContext);

  if (Context === undefined) {
    throw Error(
      "useSwipeContext must be used inside the SwipeContext Provider."
    );
  }

  return Context;
};
