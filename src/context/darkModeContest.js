import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";
import { INITIAL_STATE } from "./darkModeReducer";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};