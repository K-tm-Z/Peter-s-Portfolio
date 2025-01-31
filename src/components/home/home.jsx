import React from 'react'
import styles from './home.module.css'
import logo from '../../../assets/logo-w.png'

export const Home = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <span className={styles.homeName}>Peter</span></h1>
        <p className={styles.description}>
          I'm a Freelancer with 3 years of experience in the Chemical Industry.<br />
          Feel free to find out more about me through this portfolio!
        </p>
        <button className={styles.contactBtn}>
            <a href="#contact" className={styles.contactMe}>Contact Me</a>
        </button>
    </div>
    <img src={logo} alt="logo" className={styles.logo} />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>
  )
}

export default Home