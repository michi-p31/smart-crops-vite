import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Upload_delivery.module.css';
import Navbar from '../components/NavBar_Student';
import { useParams } from 'react-router-dom';

const UploadDelivery = () => {
  const [comments, setComments] = useState(''); // Para almacenar los comentarios
  const [userId, setUserId] = useState(null);  
  const [nameUser, setNameUser] = useState(null);
  const [idClass, setIdClass] = useState(null); // ID de la clase
  const { week } = useParams();

  useLayoutEffect(() => {
    const storedUserId = localStorage.getItem("Id_User");
    const storedNameUser = localStorage.getItem("Name_User");
    const storedClassId = localStorage.getItem("Id_Class"); // Obtener ID de clase

    if (storedUserId && storedNameUser && storedClassId) {
      setUserId(storedUserId);
      setNameUser(storedNameUser);
      setIdClass(storedClassId); // Guardar ID de clase
    } else {
      alert('Error. Redirigiendo al login...');
      window.location.href = '/login'; 
    }
  }, []);


  const handleUser = async () => {
    {
      const formData = new FormData();
      formData.append('student_id', userId); // ID del estudiante
      formData.append('week_no', week); // Número de la semana
      formData.append('comments', comments); // Comentarios del estudiante
      formData.append('name_user', nameUser); // Nombre del estudiante
      formData.append('id_class', idClass); // ID de la clase


        const response = await axios.post('https://backend-smartcrops.onrender.com/api/v1/Student_Deliveries', formData, {
        });
        console.log('Respuesta del servidor:', response.data);
      }
    }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.titulo_upload}>
          <h1>Entrega semana {week}</h1>
          <div className={styles.student}>
            <h2>Profesor:</h2> <span>{nameUser}</span>
          </div>
        </div>
        <div className={styles.buttons}>
        </div>
        <div className={styles.comments}>
          <label htmlFor="comments">Comentarios:</label>
          <div className={styles.textarea}
          value={comments} 
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UploadDelivery;
