import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import NavBar from '../components/NavBar_Teacher';
import Styles from '../styles/ClassRoom_Teacher_Students.module.css';
import PropTypes from 'prop-types';

//  cambio de color de pendiendo si hasSubmitted es tru o false
const Student = ({ Student_Name, hasSubmitted }) => {
  return (
    <div 
      className={Styles.Student} 
      style={{ backgroundColor: hasSubmitted ? 'green' : 'red' }} 
    >
      <p>{Student_Name}</p>
    </div>
  );
};

// propiedades que se esperan
Student.propTypes = {
  Student_Name: PropTypes.string.isRequired,
  hasSubmitted: PropTypes.bool.isRequired,
};
// mostrar estudiantes 
export const ClassRoom_Teacher_Students = () => {
  const { id_class } = useParams();  
  const [students, setStudents] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`https://backend-smartcrops.onrender.com/api/v1/classroom/${id_class}/students`);
      const data = Array.isArray(response.data) ? response.data : [];
      setStudents(data);  
      setLoading(false);  
    } catch (error) {
      setError('Error al obtener los estudiantes');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [id_class]);

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
          <Student 
            key={index} 
            Student_Name={student.Name_user} 
            hasSubmitted={Boolean(student.hasSubmitted)}  // donde se va apasar el estado de la entrega en bolean para recibir el true o false
          />
        ))
      ) : (
        <p>No hay estudiantes en esta clase</p>
      )}
    </>
  );
};
