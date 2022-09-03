import React from 'react';
import styles from '../../index.scss';
import TLF from '../../assets/TLF.png';
import Dogs from '../../assets/Dogs.png';
import Tooltip from '@mui/material/Tooltip';

export const Project = () => {
  return (
    <div className="project-container">
      <div className="project dogs">
        <div className="arrow-techs-dogs"></div>
        <a href="https://pi-dogs-henry-flame.vercel.app">
          <img src={Dogs} alt="tlf foto" />
        </a>
        <div className="info-container">
          <a href="https://pi-dogs-henry-flame.vercel.app">
            <p className="info">Dogs App</p>
            <p className="info-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              delectus explicabo, necessitatibus, consequuntur distinctio non.
            </p>
          </a>
        </div>
      </div>
      <div className="techs-wrap-dogs">
        <div className="logo-container node-logo-container">
          <Tooltip title="Node JS" placement="top">
            <img
              className="node-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/7/70/Font_Awesome_5_brands_node-js.svg"
              alt="node-logo"
            />
          </Tooltip>
        </div>
        <div className="logo-container react-logo-container">
          <Tooltip title="React JS" placement="top">
            <img
              className="react-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="node-logo"
            />
          </Tooltip>
        </div>
        <div className="logo-container postgres-logo-container">
          <Tooltip title="PostgreSQL" placement="top">
            <img
              className="postgres-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
              alt="node-logo"
            />
          </Tooltip>
        </div>
      </div>
      <div className="techs-wrap-tlf">
        <div className="html-logo-container">
          <Tooltip title="HTML 5" placement="top">
            <img
              className="html-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="node-logo"
            />
          </Tooltip>
        </div>
        <div className="sass-logo-container">
          <Tooltip title="Sass" placement="top">
            <img
              className="sass-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
              alt="node-logo"
            />
          </Tooltip>
        </div>
        <div className=" js-logo-container">
          <Tooltip title="JavaScript" placement="top">
            <img
              className="js-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              alt="js-logo"
            />
          </Tooltip>
        </div>
      </div>
      <div className="project tlf">
        <div className="arrow-techs-tlf"></div>

        <a href="https://todos-los-fuegos-band.netlify.app">
          <img src={TLF} alt="tlf foto" />
        </a>
        <div className="info-container">
          <a href="https://todos-los-fuegos-band.netlify.app">
            <p className="info">Rock Band Page</p>
            <p className="info-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              delectus explicabo, necessitatibus, consequuntur distinctio non.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
