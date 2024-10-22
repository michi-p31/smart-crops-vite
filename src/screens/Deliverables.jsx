import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar_Teacher';
import Styles from '../styles/Deliverables.module.css';
import PropTypes from 'prop-types';
import axios from 'axios';

const Function_redireccionar = () => {
    window.location.href = '/ClassRoom_Teacher/Deliveravels/Deliver_Student';
};

export const Deliverables = () => {
  const { ID_CLASE } = useParams();  // Obtener ID_CLASE de los parámetros de la URL
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [students, setStudents] = useState([]);  // Estado para almacenar estudiantes
  const [loading, setLoading] = useState(true);  // Estado de carga
  const [error, setError] = useState(null);  // Estado para manejar errores

  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }

    // Función para obtener los estudiantes
    const fetchStudents = async () => {
      if (ID_CLASE) {
        console.log(`ID de la clase: ${ID_CLASE}`);
        try {
          const response = await axios.get(`http://localhost:5000/api/v1/classroom/${ID_CLASE}/students`);
          console.log('Respuesta de la API:', response.data);
          const data = Array.isArray(response.data) ? response.data : [];  // Verificar que sea un arreglo
          setStudents(data);  // Actualizar el estado de estudiantes
          setLoading(false);  // Cambiar el estado de carga
        } catch (error) {
          console.error("Error al obtener los estudiantes:", error);
          setError('Error al obtener los estudiantes');  // Manejar el error
          setLoading(false);  // Cambiar el estado de carga
        }
      }
    };
    console.log("ID_CLASE:", ID_CLASE);  
    fetchStudents();  // Llamar a la función para obtener estudiantes
  }, [token, location, ID_CLASE]);

  return (
    <>
      <NavBar />
      <h1 className={Styles.Tittle_Week}>Entregas semana #</h1>
      
      {loading ? (
        <p>Cargando estudiantes...</p>
      ) : error ? (
        <p>{error}</p>
      ) : students.length > 0 ? (
        students.map((student, index) => (
          <Student key={index} Student_Name={student.Name_user} date='21/21/21' />
        ))
      ) : (
        <p>No hay estudiantes en esta clase</p>
      )}
    </>
  );
};

const Student = ({ Student_Name, date }) => {
  return (
    <div className={Styles.Student}>
      <div>
        <p>{Student_Name}</p>
        <p>Fecha de entrega: {date}</p>    
      </div>
      <div>
        <button className={Styles.Button_Ver} onClick={Function_redireccionar}>Ver</button>
      </div>
    </div>
  );
};

Student.propTypes = {
  Student_Name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired, 
};
