import React from 'react';
import styles from '../../index.scss';
import Tooltip from '@mui/material/Tooltip';
import dummy from '../../assets/medummy.png';
import node from '../../assets/nodelogo.png';

export const Home = ({ sourceLang }) => {
  return (
    <div className="home-container">
      <div className="text-container">
        <p className="title">{sourceLang.Home.title}</p>
        <p className="subtitle">{sourceLang.Home.subtitle}</p>
        <p className="description">{sourceLang.Home.description}</p>
      </div>
      <div className="img-container">
        <img className="owner-photo" src={dummy} alt="aca va mi foto"></img>
        <div className="background-image"></div>
      </div>
      <div className="stack-bar">
        <div className="logo-container js-logo-container">
          <Tooltip title="JavaScript">
            <img
              className="js-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              alt="js-logo"
            />
          </Tooltip>
        </div>
        <div className="logo-container node-logo-container">
          <Tooltip title="Node JS">
            <img className="node-logo" src={node} alt="node-logo" />
          </Tooltip>
        </div>
        <div className="logo-container react-logo-container">
          <Tooltip title="React JS">
            <img
              className="react-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="node-logo"
            />
          </Tooltip>
        </div>
        <div className="logo-container postgres-logo-container">
          <Tooltip title="PostgreSQL">
            <img
              className="postgres-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
              alt="node-logo"
            />
          </Tooltip>
        </div>
        <div className="logo-container html-logo-container">
          <Tooltip title="HTML 5">
            <img
              className="html-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="node-logo"
            />
          </Tooltip>
        </div>
        <div className="logo-container sass-logo-container">
          <Tooltip title="Sass">
            <img
              className="sass-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
              alt="node-logo"
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
