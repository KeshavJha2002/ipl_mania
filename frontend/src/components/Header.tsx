// import React from "react";
// import { Link } from "react-router-dom";
// import logo from './logo.png';

export default function Header(): JSX.Element {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="https://www.iplt20.com/assets/images/ipl-logo-new-old.png" alt="logo" />
        </div>

        <div className="navigators">
          
            <li>Home</li>
            <li>Seasons</li>
            <li>Teams</li>
          
        </div>
      </div>
    </>
  );
}
