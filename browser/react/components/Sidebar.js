import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink.js';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="/juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <NavLink to="/albums">ALBUMS</NavLink><br />
          <NavLink to="/artists">ARTISTS</NavLink>
        </h4>
      </section>
    </sidebar>
  );
};

export default Sidebar;
