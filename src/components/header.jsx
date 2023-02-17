import hamburger from "./img/Vector.png";
import Navbar from "./navbar";
import { useState } from "react";
import './cssFile/header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function openNav() {
    setIsOpen(!isOpen);
  }

  window.onload = () => {
    if (window.innerWidth > 699) {
      setIsOpen(true);
    }
  };

  return (
    <header>
      <section className="hamburger-container">
        <img
          src={hamburger}
          alt="hamburger"
          onClick={openNav}
          className="cursor hamburger"
        />


        <h2><a href="">ARTSY.</a></h2>
      </section>
        {isOpen ? <Navbar setIsOpen={setIsOpen} openNav={openNav} /> : ""}
    </header>
  );
}