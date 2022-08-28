import { createContext, useReducer } from "react";

export const SwipeContext = createContext();

export const SwipeContextProvider = ({ children }) => {
  const activeReducer = (state, action) => {
    switch (action.type) {
      case "ACTIVE":
        return { ...state, isActive: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(activeReducer, {
    isActive: true,
  });

  const dispatchActive = (data) => {
    dispatch({ type: "ACTIVE", payload: data });
  };
  return (
    <SwipeContext.Provider value={{ ...state, dispatchActive }}>
      {children}
    </SwipeContext.Provider>
  );
};
