import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import NavBar from '../components/NavBar_Teacher';
import Styles from '../styles/ClassRoom_Teacher_Students.module.css';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';


const Student = ({ Student_Name }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);
  return (
    <div className={Styles.Student}>
      <p>{Student_Name}</p>
    </div>
  );
};

// definir y recibir los datos esperados 
Student.propTypes = {
  Student_Name: PropTypes.string.isRequired,
};

// para mostrarlos datos por clase
export const ClassRoom_Teacher_Students = () => {
  const [students, setStudents] = useState([]);  // estado de los estudiantes
  const [loading, setLoading] = useState(true);  // para cuadno se demora la respuesta un loading
  const [error, setError] = useState(null);  // para los errores

  // para obtener los estudiantes por clase 
  const fetchStudents = async () => {
    const ID_CLASE = localStorage.getItem("Id_Class");
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/classroom/${ID_CLASE}/students`);
      const data = Array.isArray(response.data) ? response.data : [];  // datos por medio de un arreglo 
      setStudents(data);  // se actualia el estado de los estudiantes 
      setLoading(false);  // para no mostrar inidcador de carga 
    } catch (error) {
      setError('Error al obtener los estudiantes');  // mostrar error de carga
      setLoading(false);  // para no mostrar inidcador de carga 
    }
  };

  // para obtener los estudiantes cuando se carga el componente
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <NavBar />
      <h1 className={Styles.Tittle}>Estudiantes</h1>
      
      {loading ? (
        <p>Cargando estudiantes...</p>
      ) : error ? (
        <p>{error}</p>
      ) : students.length > 0 ? (
        students.map((student, index) => (
          <Student key={index} Student_Name={student.Name_user} />
        ))
      ) : (
        <p>No hay estudiantes en esta clase</p>
      )}
    </>
  );
};
