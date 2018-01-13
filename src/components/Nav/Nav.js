//=============================================================
import React from 'react';
import './Nav.css';

const Nav = ({subtitle, score, topScore}) => (

  <div className="nav-header">
    <ul>
      <li>
        <h1>Clicky Game</h1>
      </li>
      <li>{subtitle}</li>
      <li>
        Score: {score} | Top Score: {topScore}
      </li>
    </ul>
  </div>
);

export default Nav;
