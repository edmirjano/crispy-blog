import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const header = () => {
    
  return (
    <header>
        <h1 className="main-navigation__title">
          <Link to="/">Crispy Blog</Link>
        </h1>
        <nav className="main-navigation__header-nav">
            <li>
            <NavLink to="/">Posts</NavLink>
            </li>
            <li>
            <NavLink to="/add-post">Add Post</NavLink>
            </li>
        </nav>
      </header>
  )
};
