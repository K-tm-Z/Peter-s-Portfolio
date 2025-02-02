/* 
  File Name: navbar.jsx
  Student Name: Peter Nguyen
  Student ID: 301495510
  Date: 2024-01-31
  Description: This file contains JavaScript functionality for the website.
*/

import React, {useState} from 'react';
import styles from './navbar.module.css';
import burgbtn from '../../../assets/nav/menuIcon.webp';
import closebtn from '../../../assets/nav/close.png';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <img src={
            menuOpen
            ? closebtn
            : burgbtn}
             alt="menu-button" className={styles.menuBtn}
             onClick={() => setMenuOpen(!menuOpen)}
             />
        <div className={styles.menu}>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
