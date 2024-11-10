import MonitoringStyles from "../styles/Monitoring.module.css";
import MonitoringImage from "../assets/images/Icon_Monitoring.png";
import NavBarTeacher from "../components/NavBar_Teacher";
import NavBarStudent from "../components/NavBar_Student";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import axios from 'axios';

const Monitoring_Teacher = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const ROL = localStorage.getItem("role");
  const [selectedPlant, setSelectedPlant] = useState("");
  const [plantData, setPlantData] = useState(null);

  // Redirigir si no hay token
  useEffect(() => {
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);

  // Función para obtener datos de la planta
  const fetchPlantData = async () => {
    if (selectedPlant) {
      try {
        const response = await axios.post('https://backend-smartcrops.onrender.com/api/v1/monitoring', { Nombre: selectedPlant });
        setPlantData(response.data[0]);
      } catch (error) {
        console.error('Error al obtener los datos de la planta:', error);
      }
    }
  };

  // Polling para actualizar los datos periódicamente
  useEffect(() => {
    let intervalId;

    if (selectedPlant) {
      fetchPlantData(); // Llama la función una vez al seleccionar la planta
      intervalId = setInterval(fetchPlantData, 7000); // Actualiza cada 7 segundos

      // Limpia el intervalo cuando el componente se desmonta o cambia la planta
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [selectedPlant]);

  // Alerta de SweetAlert cuando Luz_Am es baja
  // Alerta de SweetAlert cuando Luz_Am es baja
  useEffect(() => {
    if (plantData) {
      const { Tem_Am, Hum_Ti, Hum_Am, Nivel } = plantData;
      const temperature = Number(Tem_Am); // Convierte Tem_Am a número
      let alertTriggered = false;
  
      if (temperature < 15) {
        Swal.fire({
          icon: "warning",
          title: "Temperatura ambiente baja",
          text: "La temperatura está muy baja y puede dañar la planta.",
        });
        alertTriggered = true;
      } else if (temperature > 30) {
        Swal.fire({
          icon: "warning",
          title: "Temperatura ambiente alta",
          text: "La temperatura está muy alta y puede dañar la planta.",
        });
        alertTriggered = true;
      }
  
      if (Hum_Ti < 20) {
        Swal.fire({
          icon: "warning",
          title: "Humedad del suelo baja",
          text: "La planta necesita más agua en el suelo.",
        });
        alertTriggered = true;
      } else if (Hum_Ti > 80) {
        Swal.fire({
          icon: "warning",
          title: "Humedad del suelo alta",
          text: "El suelo está demasiado húmedo y puede causar daño a la planta.",
        });
        alertTriggered = true;
      }
  
      if (Hum_Am < 40) {
        Swal.fire({
          icon: "warning",
          title: "Humedad del ambiente baja",
          text: "El ambiente está muy seco y puede afectar la planta.",
        });
        alertTriggered = true;
      } else if (Hum_Am > 80) {
        Swal.fire({
          icon: "warning",
          title: "Humedad del ambiente alta",
          text: "El ambiente está muy húmedo y puede afectar la planta.",
        });
        alertTriggered = true;
      }
  
      if (Nivel < 20) {
        Swal.fire({
          icon: "warning",
          title: "Nivel del depósito bajo",
          text: "El nivel de agua en el depósito está muy bajo.",
        });
        alertTriggered = true;
      }
  
      // Solo muestra el mensaje de éxito si ninguna alerta fue activada
      if (!alertTriggered) {
        Swal.fire({
          icon: "success",
          title: "Todo en orden",
          text: "La planta está en un entorno ideal.",
        });
      }
    }
  }, [plantData]);
  
// Se ejecuta cuando plantData cambia

  // Maneja el cambio de planta en el select
  const handleSelectChange = (event) => {
    setSelectedPlant(event.target.value);
    setPlantData(null); // Limpia los datos al cambiar de planta
  };

  // Renderiza la barra de navegación según el rol
  const NavBar = ROL === "Teacher" ? <NavBarTeacher /> : <NavBarStudent />;

  return (
    <div className={MonitoringStyles.MonitoringContainer}>
      {NavBar}
      <div className={MonitoringStyles.ContainerPlant}>
        <h1>¡TU PLANTA!</h1>
        <div className={MonitoringStyles.Section_Manage}>
          <select onChange={handleSelectChange} value={selectedPlant}>
            <option value="" disabled>Selecciona una planta</option>
            <option value="Modulo_1">Modulo 1</option>
            <option value="Modulo_2">Modulo 2</option>
            <option value="Modulo_3">Modulo 3</option>
          </select>
        </div>
        <img src={MonitoringImage} alt="Image of plant" className="ImagePlant" />
        {plantData ? (
          <div>
            <p>🌡️Temperatura ambiente: {plantData.Tem_Am}</p>
            <p>🌳💧Humedad del suelo: {plantData.Hum_Ti}</p>
            <p>💨💧Humedad ambiente: {plantData.Hum_Am}</p>
            <p>Luz ambiente: {plantData.Luz_Am}</p>
            <p>💧Nivel de depósito de agua: {plantData.Nivel}</p>
            <p>📅Fecha del monitoreo: {format(new Date(plantData.reading_time), 'yyyy-MM-dd')}</p>
          </div>
        ) : (
          <p>Selecciona una planta y comenzará el monitoreo para ver los datos.</p>
        )}
      </div>
    </div>
  );
};

export default Monitoring_Teacher;
