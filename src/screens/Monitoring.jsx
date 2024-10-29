import MonitoringStyles from "../styles/Monitoring.module.css";
import MonitoringImage from "../assets/images/Icon_Monitoring.png";
import NavBarTeacher from "../components/NavBar_Teacher";
import NavBarStudent from "../components/NavBar_Student";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export const Monitoring = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const ROL = localStorage.getItem("role");
  const [selectedPlant, setSelectedPlant] = useState(""); // Estado para almacenar la planta seleccionada
  const [plantData, setPlantData] = useState(null); // Estado para almacenar los datos de la planta

  // Si no hay token y el usuario no está ya en la página de login, redirigirlo
  useEffect(() => {
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);

  // Función para obtener los datos de la planta
  const fetchPlantData = async () => {
    if (selectedPlant) {
      try {
        const response = await axios.post('https://backend-smartcrops.onrender.com/api/v1/monitoring', { Nombre: selectedPlant });
        setPlantData(response.data[0]); // Almacena los datos de la planta
      } catch (error) {
        console.error('Error al obtener los datos de la planta:', error);
      }
    }
  };

  // Configura el polling para obtener datos periódicamente
  useEffect(() => {
    let intervalId;

    if (selectedPlant) {
      fetchPlantData(); // Llama una vez al cargar la planta
      intervalId = setInterval(fetchPlantData, 7000); // Establece el intervalo

      // Limpia el intervalo cuando se desmonta el componente o se cambia la planta
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [selectedPlant]); // Solo se ejecuta cuando cambia la planta seleccionada

  // Maneja el cambio en el select
  const handleSelectChange = (event) => {
    setSelectedPlant(event.target.value); // Actualiza el estado con la planta seleccionada
    setPlantData(null); // Limpia los datos al cambiar la planta
  };

  // Renderiza la barra de navegación según el rol
  const NavBar = ROL === "Teacher" ? <NavBarTeacher /> : <NavBarStudent />;

  return (
    <div className={MonitoringStyles.MonitoringContainer}>
      {NavBar}
      <div className={MonitoringStyles.ContainerPlant}>
        <div className={MonitoringStyles.Section_Manage}>
          <select onChange={handleSelectChange} value={selectedPlant}>
            <option value="" disabled>Selecciona una planta</option>
            <option value="Modulo_1">Modulo 1</option>
            <option value="Modulo_2">Modulo 2</option>
            <option value="Modulo_3">Modulo 3</option>
          </select>
        </div>
        <h1>¡TU PLANTA!</h1>
        <h5>Vamos a chequearla!</h5>
        <img
          src={MonitoringImage}
          alt="Image of plant"
          className="ImagePlant"
        />
        {plantData ? (
          <div>
            <p>🌡️Temperatura ambiente: {plantData.Tem_Am}</p>
            <p>🌳💧Humedad del suelo: {plantData.Hum_Ti}</p>
            <p>💨💧Humedad ambiente: {plantData.Hum_Am}</p>
            <p>Luz ambiente: {plantData.Luz_Am}</p>
            <p>💧Nivel de deposito de agua: {plantData.Nivel}</p>
          </div>
        ) : (
          <p>Selecciona una planta y comenzará el monitoreo para ver los datos.</p>
        )}
      </div>
    </div>
  );
};