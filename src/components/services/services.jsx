import React from 'react'
import styles from './services.module.css'
import services from "./data/services.json"

import { getImageURL } from '../../util'

export function Services () {
  return (
  <section id="services" className={styles.container}>
    <h5 className={styles.title}>Services</h5>
    <div className={styles.services}>
        {services.map((service, id) => {
        return (
        <div key={id}>
          <div><img src={getImageURL(service.imageSrc)} alt={service.title} />
          </div>
          <p>{service.title}</p>
      </div>
      )
    })}
    </div>
  </section>
  )
}
