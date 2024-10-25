import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar_Teacher';
import Styles from '../styles/Deliverables.module.css';
import PropTypes from 'prop-types';
import axios from 'axios';

const token = localStorage.getItem("token");
const ID_CLASE  = localStorage.getItem("Id_Class"); 

const Function_redireccionar = (ID_CLASE, week_no, student_id) => {
  window.location.href = `/ClassRoom_Teacher/Deliveravels/Deliver_Student/${ID_CLASE}/${week_no}/${student_id}`;
};

export const Deliverables = () => {
  const location = useLocation();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { week_no } = useParams();  
  useEffect(() => {
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
    //  obtener estudiantes y sus fechas de entrega
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`https://backend-smartcrops.onrender.com/api/v1/classroom/${ID_CLASE}/weeks/${week_no}/deliveries`);
        const data = Array.isArray(response.data) ? response.data : [];
        console.log('Respuesta de la API:', response.data);
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los estudiantes:", error);
        setError('Error al obtener los estudiantes');
        setLoading(false);
      }
    };

    fetchStudents();
  }, [token, location, ID_CLASE, week_no]);

  return (
    <>
      <NavBar />
      <h1 className={Styles.Tittle_Week}>Entregas semana #{week_no}</h1>
      
      {loading ? (
        <p>Cargando estudiantes...</p>
      ) : error ? (
        <p>{error}</p>
      ) : students.length > 0 ? (
        students.map((student, index) => (
          <Student 
            key={index} 
            Student_Name={student.Name_user} 
            date={student.Fecha_reporte ? new Date(student.Fecha_reporte).toLocaleDateString() : 'Sin fecha'}
            ID_CLASE={ID_CLASE}           
            week_no={week_no}             
            student_id={student.student_id} 
          />
        ))
      ) : (
        <p>No hay estudiantes en esta clase</p>
      )}
    </>
  );
};

// Componente de estudiante con botón para redirigir a la entrega del estudiante
const Student = ({ Student_Name, date, ID_CLASE, week_no, student_id }) => {
  console.log('Student_id en el componente Student:', student_id); // verificar el valor recibido
  return (
      <div className={Styles.Student}>
          <div>
              <p>{Student_Name}</p>
              <p>Fecha de entrega: {date}</p>    
          </div>
          <div>
              <button 
                  className={Styles.Button_Ver} 
                  onClick={() => Function_redireccionar(ID_CLASE, week_no, student_id)}>
                  Ver
              </button>
          </div>
      </div>
  );
};
 


