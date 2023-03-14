import { useState, createContext } from "react";
import DarkLightTitle from "./components/DarkLightTitle";
import DarkLightContent from "./components/DarkLightContent";


export const ThemeContext = createContext();
// คำสั่งที่ทำให้ทุกๆ component ที่อยู่ภายใต้ Tag  <ThemeContext.Provider></ThemeContext.Provider>
// สามารถเข้ามาสั่งงานสเตทที่หน้า App ได้ โดยต้องมีการเชื่อมโยงตัวแปรที่ต้องการส่งไปยังคอมโพเน้นอื่น ผ่าน event value

const App = () => {

  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <DarkLightTitle />
        <DarkLightContent />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
