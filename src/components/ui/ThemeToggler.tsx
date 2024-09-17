import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

function ThemeToggler() {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem('darkTheme') === 'true' || false

  );

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkTheme]);

  function toggleTheme() {
    setDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      localStorage.setItem('darkTheme', String(newTheme));
      return newTheme;
    });
  }

  return (

    <div className="fixed right-0 top-0 z-50 p-[4vmin]">      
      <button onClick={toggleTheme} className="rounded-full bg-black p-3 text-white *:size-[max(3vmin,1rem)] dark:bg-white dark:text-black" aria-label="Toggles dark mode">
      <IoIosSunny className="hidden dark:block" />
      <FaMoon className="dark:hidden" />
    </button>
    </div>

  );
}

export default ThemeToggler;