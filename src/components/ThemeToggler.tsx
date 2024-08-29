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

    <div className="fixed top-0 right-0 p-[4vmin] z-50">      
      <button onClick={toggleTheme} className="bg-black dark:bg-white text-white dark:text-black rounded-full p-3 w- *:w-[max(3vmin,1rem)] *:h-[max(3vmin,1rem)]" aria-label="Toggles dark mode">
      <IoIosSunny className="hidden dark:block" />
      <FaMoon className="dark:hidden" />
    </button>
    </div>

  );
}

export default ThemeToggler;