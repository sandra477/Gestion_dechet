import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./scROLL.scss";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Montrer le bouton quand on descend un peu
  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // animation douce
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div className={`scroll-to-top ${visible ? "active" : ""}`} onClick={scrollToTop}>
      <FiArrowUp size={25} />
    </div>
  );
};

export default ScrollToTop;