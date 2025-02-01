/* 
  File Name: about.jsx
  Student Name: Peter Nguyen
  Student ID: 301495510
  Date: 2024-01-31
  Description: This file contains JavaScript functionality for the website.
*/

import React from 'react'
import styles from './about.module.css'
import { getImageURL } from '../../util'

export function About () {
return (
    <section className={styles.container} id="about">
            <h2 className={styles.title}>
                    About Me
            </h2>
            <div className={styles.content}>
                    <img src={getImageURL("Abtme-image.png")} alt='About Me' className={styles.amPic}/>
                    <h3 className={styles.name}>Nguyen Trung Nguyen <br />
                    <div className={styles.otherName}>(...pssst. You can call me Peter)</div>
                    <br />
                    </h3> 
                    <p> <span className={styles.curPos}>Freelancer </span><br />I'm a retired Chemical Technician,
                    now on the pursuit of Software Development and Technology.</p>
                <div className={styles.contact}>Curious about my experience? Click👉 
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button>📃</button>
                    </a>
                </div>
            </div>
    </section>
)
}

export default About