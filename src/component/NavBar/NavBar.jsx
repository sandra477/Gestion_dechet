import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./NavBar.scss";
import { image } from "../../autre/data.js";

const NavBar = ({ refs }) => {
  const [open, setOpen] = useState(false);

  // Fonction pour scroller vers une section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // ferme le menu mobile si ouvert
    }
  };

  return (
    <div className="navbar">
      <div className="laptop">
        <img src={image.home2} className="logo"/>
        <h2 className="info"> <u>Société de collecte et 
          <br/>de récupération pour le recyclage</u></h2> 

        <div className="navigation">
          <ul className="links-container">
            <li onClick={() => scrollToSection(refs.produitsRef)}>Nos Produits</li>
            <li onClick={() => scrollToSection(refs.valeursRef)}>Nos Valeurs</li>
            <li onClick={() => scrollToSection(refs.contactRef)}>Contact</li>
            <li><a href="/Dashbord.html">Dashboard</a></li>
          </ul>

          <FiMenu className="menu-icons" onClick={() => setOpen(true)} />
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mobile ${open ? "active" : ""}`}>
        <FiX className="close-icons" onClick={() => setOpen(false)} />

        <ul>
          <li onClick={() => scrollToSection(refs.produitsRef)}>Nos Produits</li>
          <li onClick={() => scrollToSection(refs.valeursRef)}>Nos Valeurs</li>
          <li onClick={() => scrollToSection(refs.contactRef)}>Contact</li>
          <li onClick={() => alert("Dashboard n'est pas encore intégré")}>Dashboard</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;