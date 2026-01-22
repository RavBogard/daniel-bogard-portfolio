import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import ContactFooter from "./components/ContactFooter";

import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <main>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <SocialProof />
      <Portfolio isDarkMode={isDarkMode} />
      <About />
      <ContactFooter />
    </main>
  );
}

export default App;
