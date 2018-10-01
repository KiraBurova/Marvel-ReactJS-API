import React from 'react';

import { Link } from 'react-router-dom';

import {SearchInput} from '../UI/SearchInput/SearchInput';

import './Menu.css';

export const Menu = () => (
    <nav className="menu white">
        <ul className="menu__list">
            <li className="menu__item">
                <Link to="/characters" className="menu__link">Characters</Link>
            </li>
            <li className="menu__item">
                <Link to="/comics" className="menu__link">Comics</Link>
            </li>
            <li className="menu__item">
                <Link to="/creators" className="menu__link">Creators</Link>
            </li>
            <li className="menu__item">
                <Link to="/events" className="menu__link">Events</Link>
            </li>
            <li className="menu__item">
                <Link to="/series" className="menu__link">Series</Link>
            </li>
            <li className="menu__item">
                <Link to="/stories" className="menu__link">Stories</Link>
            </li>
        </ul>
    </nav>
  );
  