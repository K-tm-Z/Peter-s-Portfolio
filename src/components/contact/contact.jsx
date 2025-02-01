/* 
  File Name: contact.jsx
  Student Name: Peter Nguyen
  Student ID: 301495510
  Date: 2024-01-31
  Description: This file contains JavaScript functionality for the website.
*/

import React from 'react'
import styles from './contact.module.css'

export function Contact () {
  return (
    <section className={styles.container} id="contact">
      <dev className={styles.content}> 
      <h1 className={styles.title}>Contact Me</h1>
      <dev className={styles.contacts}>
      <a href="https://www.linkedin.com/in/peter-nguyen-800b24172/">
          <img src="../../../assets/contact/Linkedin.png" alt="Linkedin_Logo" className={styles.logo} />
      </a>
      <a href="https://www.facebook.com/pete.parker.nguyen/">
          <img src="../../../assets/contact/FB.png" alt="Facebook_Logo" className={styles.logo} />
      </a>
      <a href="https://www.instagram.com/__ktmz__/">
          <img src="../../../assets/contact/insta.png" alt="Insta_Logo" className={styles.logo} />
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