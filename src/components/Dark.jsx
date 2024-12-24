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
      <input type="checkbox" className="ml-[500px]" onChange={toggleTheme} />
      <div className="dark text-orange-500 text-3xl ml-[500px]">
      <h1 className={textTheme}>Dark</h1>
        
        </div>
        
        </div>
  );
}

export default Dark;
