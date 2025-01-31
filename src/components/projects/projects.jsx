import React from 'react'
import styles from './projects.module.css'

export function Projects () {
  return (
    <section className={styles.container} id="projects">
      <h5 className={styles.title}>Projects</h5>
           <ul className={styles.pjList}>
            <li className={styles.pjItem}>
            <div className={styles.pjItemTxt}>
                <h4>Project 1</h4>
                <p>I don't have one</p>
            </div>
            </li>
            <li className={styles.pjItem}>
            <div className={styles.pjItemTxt}>
                <h4>Project 2</h4>
                <p>Since I don't have one, I can't have two</p>
            </div>
            </li>
            <li className={styles.pjItem}>
            <div className={styles.pjItemTxt}>
                <h4>Project 3</h4>
                <p>Maybe raising a cat counts?</p>
            </div>
            </li>
            </ul>
    </section>
  )
}
