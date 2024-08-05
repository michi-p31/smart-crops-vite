import React from 'react'
import MonitoringStyles from '../styles/Monitoring.module.css'
import MonitoringImage from '../assets/images/Monitoring_Icon.jpeg'
export const Monitoring = () => {
  return (
    <>
    <div className={MonitoringStyles.MonitoringContainer}>
      <div className={MonitoringStyles.ContainerPlant}>
          <h1>🌱¡TU PLANTA! 🌱</h1>
          <p>Vamos a chequearla!</p>
          <img src={MonitoringImage} alt="Image of plant" className="ImagePlant" />
          <h3>🌡️Temperatura ambiente: 100°</h3>
          <h3>🌳💧Humedad del suelo: 70°</h3>
          <h3>💨💧Humedad ambiente: 30°</h3>
          <h3>💧Nivel de deposito de agua: 30%</h3>
      </div>
    </div>
    </>
  )
}
