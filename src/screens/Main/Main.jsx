import React from 'react';

import { Menu } from '../../components/Menu/Menu';
import { Navbar } from '../../components/UI/Navbar/Navbar';
import './Main.css';

export const ScreensMain = () => (
    <section className="main">
        <Navbar text={'Marvel'}/>
        <Menu />
    </section>
);
