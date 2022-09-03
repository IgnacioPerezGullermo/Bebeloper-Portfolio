import React, { useState } from 'react';
import styles from '../../index.scss';

export const NavBar = ({
  Site,
  setSite,
  Language,
  setLanguage,
  sourceLang,
}) => {
  const handleClick = (e) => {
    setSite(e.target.value);
  };
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="nav-bar">
      <button
        value="Home"
        onClick={(e) => handleClick(e)}
        className={`links ${Site === 'Home' ? 'active' : ''}`}
      >
        {sourceLang.NavBar.home}
      </button>
      <button
        value="Projects"
        onClick={(e) => handleClick(e)}
        className={`links ${Site === 'Projects' ? 'active' : ''}`}
      >
        {sourceLang.NavBar.projects}
      </button>
      <button
        value="Contacts"
        onClick={(e) => handleClick(e)}
        className={`links ${Site === 'Contacts' ? 'active' : ''}`}
      >
        {sourceLang.NavBar.contact}
      </button>
      <a href="https://github.com/IgnacioPerezGullermo" className="logo-git">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png"
            alt="github"
            className="github"
          />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/bebeloper/"
        className="logo-linkedin"
      >
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/Linkedin-png-linkedin-icon-1600.png"
            alt="linkedin"
            className="github"
          />
        </div>
      </a>
      <select className="selectLang" onChange={handleChange}>
        <option className="option" value="español">
          Español
        </option>
        <option className="option" value="english">
          English
        </option>
      </select>
    </div>
  );
};
