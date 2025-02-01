/* 
  File Name: projects.jsx
  Student Name: Peter Nguyen
  Student ID: 301495510
  Date: 2024-01-31
  Description: This file contains JavaScript functionality for the website.
*/

import React from 'react';
import styles from './projects.module.css';
import { getImageURL } from '../../util';

export function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h5 className={styles.title}>Projects</h5>
      <div className={styles.content}>
        <ul className={styles.pjList}>
          <li className={styles.pjItem}>
            <div className={styles.pjItemTxt}>
              <img src={getImageURL("gemtex.png")} alt="project1" className={styles.projectImage} />
              <div>
                <h4>Quality Control Establishment</h4>
                <p>During my time in Gemtex, I've established quality control checkpoints by setting up SOPs, creating quality check routines,
                  and guiding the working floor towards collaboration.
                </p>
              </div>
            </div>
          </li>
          <li className={styles.pjItem}>
          </li>
          <li className={styles.pjItem}>
            <div className={styles.pjItemTxt}>
              <img src={getImageURL("Snow.jpg")} alt="project3" className={styles.projectImage} />
              <div>
                <h4>Snow</h4>
                <p>Ever since I retired from Chemistry and take the Software Dev path head on, I've been taking a side project called Snow.
                  This project is a dedication to shelter and raise this lovely Turkish Van so that she can have a loving home.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;