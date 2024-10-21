import MonitoringStyles from '../styles/Monitoring.module.css'
import MonitoringImage from '../assets/images/Icon_Monitoring.png'
import NavBar from '../components/NavBar_Teacher'
import { useLocation } from 'react-router-dom'

export const Monitoring = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);
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
