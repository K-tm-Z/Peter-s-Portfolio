/* 
  File Name: services.jsx
  Student Name: Peter Nguyen
  Student ID: 301495510
  Date: 2024-01-31
  Description: This file contains JavaScript functionality for the website.
*/

import React from 'react';
import styles from './services.module.css';
import services from './data/services.json';

export function Services() {
  return (
    <section id="services" className={styles.container}>
      <h5 className={styles.title}>Services</h5>
      <div className={styles.services}>
        {services.map((service, id) => (
          <div key={id} className={styles.serviceItem}>
            <img src={service.imageSrc} alt={service.title} className={styles.serviceIcon} />
            <p className={styles.serviceTitle}>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;