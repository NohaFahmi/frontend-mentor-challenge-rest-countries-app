import { createContext, useState } from "react";

export const ThemeContext = createContext({
  currentTheme: "dark",
  switchCurrentTheme: (themeType: string) => {},
});

const ThemeContextProvider = (props:any) => {
  let localStorageTheme = window.localStorage.getItem("theme");
  const [currentTheme, setCurrentTheme] = useState(
    localStorageTheme ? localStorageTheme : "dark"
  );
  document.querySelector("body")?.classList.add(currentTheme);
  const switchCurrentTheme = (themeType:string): void => {
    setCurrentTheme(themeType);
    window.localStorage.setItem("theme", themeType);
    let bodyElement = document.querySelector("body");
    if(bodyElement) {
      if(bodyElement.classList.contains('dark')) {
        bodyElement.classList.remove('dark');
        bodyElement.classList.add('light');
      }else {
      bodyElement.classList.remove('light');
      bodyElement.classList.add('dark');
    }
     
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        switchCurrentTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
