import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Upload_delivery.module.css';
import Navbar from '../components/NavBar_Student';
import { useParams } from 'react-router-dom';

const UploadDelivery = () => {
  const [comments, setComments] = useState(null); // Cambiado a null para manejar mejor la condición
  const [error, setError] = useState(''); // Para manejar errores
  const Id_user = localStorage.getItem("Id_User");
  const nameUser = localStorage.getItem("Name_User");
  const ID_CLASS = localStorage.getItem("Id_Class");
  const { week } = useParams();

  useLayoutEffect(() => {
    if (!Id_user || !nameUser || !ID_CLASS) {
      alert('Error. Redirigiendo al login...');
      window.location.href = '/login';
      return;
    }

    // Función para obtener el comentario del estudiante
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/getComment', {
          params: {
            id_student: Id_user,
            week_no: week,
          },
        });
        if (response.data.status === 'Success') {
          setComments(response.data.result); // Asignamos solo el resultado
          setError(''); // Limpiamos el error
        } else {
          setComments(null); // No hay comentarios, asignamos null
          setError(response.data.msg); // Mostramos el mensaje de error
        }
      } catch (error) {
        console.error("Error al obtener comentarios:", error);
        setError("Error al obtener comentarios del servidor."); // Mensaje de error general
      }
    };

    fetchComments();
  }, [Id_user, nameUser, ID_CLASS, week]);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.titulo_upload}>
          <h1>Entrega semana {week}</h1>
          <div className={styles.student}>
            <h2>Estudiante:</h2> <span>{nameUser}</span>
          </div>
        </div>
        <div className={styles.comments}>
          <label htmlFor="comments">Comentarios:</label>
          <div className={styles.textarea}>
            {error && <p className={styles.error}>{error}</p>} {/* Mensaje de error */}
            <p>{comments ? comments.Comentario : "No hay comentarios para esta semana."}</p> {/* Mostrar comentario específico */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDelivery;
