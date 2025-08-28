import React, { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa';
import { LuSun } from 'react-icons/lu';

export default function ThemeToggle() {

    const [theme, setTheme] = useState("light");

    useEffect(()=>{
        const saveTheme = localStorage.getItem("theme") || "light";
        setTheme(saveTheme);
        document.documentElement.setAttribute("data-theme", saveTheme);
    },[]);

    const toggleTheme = ()=>{
        const newTheme = theme === "light" ? "dark":"light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    }

  return (
    <button className='btn hover:cursor-pointer m-2' onClick={toggleTheme}>
        {theme === "light"? <FaMoon size={25} />: <LuSun size={25}/>}
    </button>
  )
}
