import { useContext } from "react";
import light from "../darklight-image/light.svg";
import dark from "../darklight-image/dark.svg";
import { ThemeContext } from "../App";

const DarkLightContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === "light" ? "light" : "dark"}>
      <div>
        <h1>KunlanisY. HomePage</h1>
        <p>Dark Mode WorkShop</p>
      </div>

      <img src={theme === "light" ? light : dark} alt="logo" />
    </main>
  );
};

export default DarkLightContent;
