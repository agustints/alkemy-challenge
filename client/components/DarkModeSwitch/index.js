import { DarkModeSwitchContainer } from "./styles";
import { useContext } from "react";
import { ThemeModeContext } from "../../UseDarkMode";
import { FaMoon, FaSun } from "react-icons/fa";
export default function DarkModeSwitch() {
  const useDarkModeSwitch = () => {
    let { toggleMode, isDarkMode } = useContext(ThemeModeContext);
    return { handleToggle: toggleMode, isDarkMode };
  };
  let { isDarkMode, handleToggle } = useDarkModeSwitch();

  return (
    <DarkModeSwitchContainer>
      <input
        type="checkbox"
        className="checkbox"
        id="chk"
        checked={isDarkMode || ""}
        onChange={handleToggle}
      />
      <label className="label" htmlFor="chk">
        <FaMoon className="fas fa-moon" />
        <FaSun className="fas fa-sun" />
        <div className="ball"></div>
      </label>
    </DarkModeSwitchContainer>
  );
}
