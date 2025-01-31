import React from 'react'
import styles from './contact.module.css'
import { getImageURL } from '../../util'

export function Contact () {
  return (
    <section className={styles.container} id="contact">
      <dev className={styles.content}> 
      <h1 className={styles.title}>Contact Me</h1>
      <dev className={styles.linkedin}>
      <a href="https://www.linkedin.com/in/peter-nguyen-800b24172/">
          <img src={getImageURL("./contact/Linkedin.png")} alt="Linkedin_Logo" className={styles.linkedinLogo} />
      </a>
      </dev>
      <div className={styles.details}>
        <h2>Email</h2> 
        <span>peternguyen.officiel@gmail.com</span>
        <h2>Based in</h2>
        <span>Toronto, <br />
              Ontario</span>
      </div>
      </dev>
    </section>
  )
}

export default Contact