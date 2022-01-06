import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <Link to='/login'>
          <li>Login</li>
        </Link>
        <Link to='/home'>
          <li>Home</li>
        </Link>
        <Link to='/dress'>
          <li>Indumentaria</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
