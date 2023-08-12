import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  const themeData = localStorage.getItem("theme");
  const [theme, setTheme] = useState(() => {
    return themeData ? JSON.parse(themeData) : "light";
  });

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="nextTask Logo" className="logo" />
        <span>NextTask</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "light activeTheme" : "light"}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={theme === "medium" ? "medium activeTheme" : "medium"}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "dark activeTheme" : "dark"}
        ></span>
        <span
          onClick={() => setTheme("grad1")}
          className={theme === "grad1" ? "grad1 activeTheme" : "grad1"}
        ></span>
        <span
          onClick={() => setTheme("grad2")}
          className={theme === "grad2" ? "grad2 activeTheme" : "grad2"}
        ></span>
        <span
          onClick={() => setTheme("grad3")}
          className={theme === "grad3" ? "grad3 activeTheme" : "grad3"}
        ></span>
        <span
          onClick={() => setTheme("grad4")}
          className={theme === "grad4" ? "grad4 activeTheme" : "grad4"}
        ></span>
        <span
          onClick={() => setTheme("grad5")}
          className={theme === "grad5" ? "grad5 activeTheme" : "grad5"}
        ></span>
        <span
          onClick={() => setTheme("grad6")}
          className={theme === "grad6" ? "grad6 activeTheme" : "grad6"}
        ></span>
      </div>
    </header>
  );
};

export default Header;
