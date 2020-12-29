import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://lh3.googleusercontent.com/proxy/DyBe3T4GeC-OCDWSx1KHlcmYLmXRdRH5CC3RcxHZ_K6DAqXPYVuW9SF52PFoFLykDSZmAkn5UqE9FnjsvFh7oKvGXETqJQixKwMTWmMSN4Q2GzSj8wg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
        alt="Smily Face"
      />
    </div>
  );
}

export default Nav;
