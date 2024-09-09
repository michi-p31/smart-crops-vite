import MonitoringStyles from '../styles/Monitoring.module.css'
import MonitoringImage from '../assets/images/Icon_Monitoring.png'
import NavBar from '../components/menu'
export const Monitoring = () => {
  return (
    <>
    <div className={MonitoringStyles.MonitoringContainer}>
    <NavBar/>
      <div className={MonitoringStyles.ContainerPlant}>
          <h1>¡TU PLANTA!</h1>
          <h5>Vamos a chequearla!</h5>
          <img src={MonitoringImage} alt="Image of plant" className="ImagePlant" />
          <p>🌡️Temperatura ambiente: 100°</p>
          <p>🌳💧Humedad del suelo: 70°</p>
          <p>💨💧Humedad ambiente: 30°</p>
          <p>💧Nivel de deposito de agua: 30%</p>
      </div> 
    </div>
    </>
  )
}
