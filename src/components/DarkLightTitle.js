import {useState, useContext} from "react";
import "./DarkLight.css";
import Switch from "react-switch";
import { ThemeContext } from "../App";

const DarkLightTitle = () => {
const {theme, setTheme} = useContext(ThemeContext)
const toggleSwitch = (checked) => {
  setTheme(
    theme === "light" ? "dark" : "light"
  )
}
  return (
    <header className={theme === "light" ? "light" : "dark"}>
      <span>Mode[{theme}]</span>
      <Switch
      onChange={toggleSwitch}
      checked={theme==="dark"}
      // จะให้สวิซถูกเช็คก็ต่อเมื่อค่าที่อยู่ในตัวแปร theme ==="dark"
      uncheckedIcon={false}
      checkedIcon={false}
      onColor={"#ffa500"}
      offColor={"#11a2f0"}
      />
    </header>
  )
};

export default DarkLightTitle;
