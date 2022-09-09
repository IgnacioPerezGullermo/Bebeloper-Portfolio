import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import languages from '../../languages/languages.json';
import { Contact } from '../Contact/Contact';
import { Home } from '../Home/Home';
import { NavBar } from '../NavBar/NavBar';
import { Project } from '../Project/Project';

export const Main = () => {
  const [Site, setSite] = useState('Home');
  const [Language, setLanguage] = useState('español');
  let sourceLang = languages;
  if (Language === 'español') {
    sourceLang = languages.español;
  } else if (Language === 'english') {
    sourceLang = languages.english;
  }

  const handleClick = (e) => {
    setSite('Home');
  };
  if (Site === 'Home') {
    return (
      <div>
        <button onClick={(e) => handleClick(e)} className="main-logo-container">
          <img src={Logo} alt="logo-img" />
        </button>
        <NavBar
          sourceLang={sourceLang}
          Language={Language}
          setLanguage={setLanguage}
          Site={Site}
          setSite={setSite}
        ></NavBar>
        <Home sourceLang={sourceLang}></Home>
      </div>
    );
  }
  if (Site === 'Projects') {
    return (
      <div>
        <button
          value="Home"
          onClick={(e) => handleClick(e)}
          className="main-logo-container"
        >
          <img src={Logo} alt="logo-img" />
        </button>
        <NavBar
          sourceLang={sourceLang}
          Language={Language}
          setLanguage={setLanguage}
          Site={Site}
          setSite={setSite}
        ></NavBar>
        <Project sourceLang={sourceLang}></Project>
      </div>
    );
  }
  if (Site === 'Contacts') {
    return (
      <div>
        <button
          value="Home"
          onClick={(e) => handleClick(e)}
          className="main-logo-container"
        >
          <img src={Logo} alt="logo-img" />
        </button>
        <NavBar
          sourceLang={sourceLang}
          Language={Language}
          setLanguage={setLanguage}
          Site={Site}
          setSite={setSite}
        ></NavBar>
        <Contact sourceLang={sourceLang}></Contact>
      </div>
    );
  }
};
