import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

import "./NavBar.scss";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [resumeURL, setResumeURL] = useState("");
  useEffect(() => {
    getResumeURL();
  }, []);

  const getResumeURL = async () => {
    const response = await fetch(
      process.env.PUBLIC_URL + "/JoabSmithResume.pdf",
      {
        headers: {
          "Content-Type": "application/pdf",
        },
        mode: "no-cors",
      }
    );
    let blob = await response.blob();
    let URL = window.URL.createObjectURL(blob);

    setResumeURL(URL);
  };
  return (
    <nav className="app__flex nav__info">
      <span className="nav__name">Joab Smith</span>
      <ul className="app__flex nav__list">
        {["About", "Skills", "Projects", "Contact"].map((item, index) => (
          <li key={"nav__list-" + index}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li>
          <a href={resumeURL} download="JoabSmithResume.pdf">
            Resume
          </a>
        </li>
      </ul>
      <div className="nav__menu">
        <FiMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <FiX onClick={() => setToggle(false)} />
            <ul>
              {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                <li key={"nav__menu-" + index}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href={resumeURL} download="JoabSmithResume.pdf">
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
