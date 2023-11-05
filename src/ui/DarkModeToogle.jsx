import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../hooks/useDarkMode";

import Button from "./Button";

function DarkModeToogle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </Button>
  );
}

export default DarkModeToogle;
