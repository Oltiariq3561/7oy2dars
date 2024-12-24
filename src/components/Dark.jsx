import React, { useState } from "react";

function Dark() {
  const [theme, setTheme] = useState("light"); 
  const [textTheme, setTextTheme] = useState("text-light"); 

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      setTextTheme("text-dark");
    } else {
      setTheme("light");
      setTextTheme("text-light");
    }
    document.querySelector("body").setAttribute("set-theme", e.target.checked ? "dark" : "light");
  };

  return (
    <div>
      <input type="checkbox" onChange={toggleTheme} />
      <h1 className={textTheme}>Salomat</h1>
    </div>
  );
}

export default Dark;
