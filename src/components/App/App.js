import "./App.css";
import Navbar from "../navbar";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function onClick() {
    setDarkMode(!darkMode);
    console.log("dark mode enabled");
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar onClick={onClick} />
      </header>
    </div>
  );
}

export default App;
