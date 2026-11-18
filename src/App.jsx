import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";

const PAGES = ["About", "Resume", "Portfolio", "Contact"];

export default function App() {
  const [activePage, setActivePage] = useState("About");

  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <Navbar pages={PAGES} activePage={activePage} onNavigate={handleNavigate} />

        <About isActive={activePage === "About"} />
        <Resume isActive={activePage === "Resume"} />
        <Portfolio isActive={activePage === "Portfolio"} />
        <Contact isActive={activePage === "Contact"} />
      </div>
    </main>
  );
}
