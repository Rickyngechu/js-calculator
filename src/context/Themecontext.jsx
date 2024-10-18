/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const Themecontext = createContext();

function ThemModeProvider({ children }) {
  const [theme, setTheme] = useState("darkblue-mode");

  function switchTheme(themeVal) {
    setTheme(themeVal);
  }

  useEffect(
    function () {
      if (theme === "darkblue-mode") {
        document.documentElement.classList.remove("bright-mode");
        document.documentElement.classList.remove("light-mode");

        document.documentElement.classList.add("darkblue-mode");
      } else if (theme === "light-mode") {
        document.documentElement.classList.remove("bright-mode");
        document.documentElement.classList.remove("darkblue-mode");

        document.documentElement.classList.add("light-mode");
      } else if (theme === "bright-mode") {
        document.documentElement.classList.remove("darkblue-mode");
        document.documentElement.classList.remove("light-mode");

        document.documentElement.classList.add("bright-mode");
      } else {
        console.log("No such theme");
      }
    },
    [theme]
  );

  return (
    <Themecontext.Provider value={{ theme, switchTheme }}>
      {children}
    </Themecontext.Provider>
  );
}

function useSwitchTheme() {
  const context = useContext(Themecontext);

  return context;
}

export { ThemModeProvider, useSwitchTheme };
