import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Upload_delivery.module.css';
import { FaPlus } from 'react-icons/fa';
import Navbar from '../components/NavBar_Student';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const UploadDelivery = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [comments, setComments] = useState(''); //para almacenar los comentarios
  const [userId, setUserId] = useState(null);  
  const [nameUser, setNameUser] = useState(null)
  const { week } = useParams();
  console.log(week) 

  useLayoutEffect(() => {
    const storedUserId = localStorage.getItem("Id_User");
    const storedNameUser = localStorage.getItem("Name_User")
    if (storedUserId && storedNameUser) {
      setUserId(storedUserId);
      setNameUser(storedNameUser);
    } else {
      alert('Error. Redirigiendo al login...');
      window.location.href = '/login'; 
    }
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // esto guarda el archivo seleccionado
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value); // aqui se guarda  el comentario ingresado
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile); // Añade el archivo al formData
      formData.append('student_id', userId); // Añadir el ID del estudiante
      formData.append('week_no', week); // Añadir el número de la semana
      formData.append('comments', comments); // Añade el comentario al formData

      try {
        // Realiza la solicitud POST usando Axios
        const response = await axios.post('http://localhost:5000/api/v1/Student_Deliveries', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });// conectar al backend
        Swal.fire({
          icon: "success",
          title: "Archivo enviado",
          text: "El archivo se ha enviado exitosamente.",
        });     
        console.log('Respuesta del servidor:', response.data);
      } catch (error) {
        console.error('Error al subir el archivo:', error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo enviar el archivo.",
        });        
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Archivo no seleccionado",
        text: "Porfavor seleccione un archivo.",
      });      
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.titulo_upload}>
          <h1>Entrega semana 1</h1>
          <div className={styles.student}>
            <h2>Estudiante:</h2> <span>{nameUser}</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <label className={styles.addButton}>
            <FaPlus className={styles.icon} /> Seleccionar archivo
            <input type="file" onChange={handleFileChange} style={{ display: 'none' }} /> 
          </label>
          <button className={styles.submitButton} onClick={handleSubmit}>
            Enviar entrega
          </button>
        </div>
        <div className={styles.comments}>
          <label htmlFor="comments">Comentarios:</label>
          <textarea
            id="comments"
            className={styles.textarea}
            value={comments} 
            onChange={handleCommentsChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadDelivery;
