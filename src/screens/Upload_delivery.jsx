import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Upload_delivery.module.css';
import { FaPlus } from 'react-icons/fa';
import Navbar from '../components/menu';

const UploadDelivery = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [comments, setComments] = useState(''); // Estado para almacenar los comentarios

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Guarda el archivo seleccionado
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value); // Guarda el comentario ingresado
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile); // Añade el archivo al formData
      formData.append('student_id', 32); // Añadir el ID del estudiante
      formData.append('week_no', 12); // Añadir el número de la semana
      formData.append('comments', comments); // Añade el comentario al formData

      try {
        // Realiza la solicitud POST usando Axios
        const response = await axios.post('http://localhost:5000/api/v1/Student_Deliveries', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('El archivo PDF ha sido subido correctamente');
        console.log('Respuesta del servidor:', response.data);
      } catch (error) {
        console.error('Error al subir el archivo:', error);
        alert('Hubo un error al subir el archivo.');
      }
    } else {
      alert('Por favor, selecciona un archivo antes de enviar.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.titulo_upload}>
          <h1>Entrega semana 1</h1>
          <div className={styles.student}>
            <h2>Estudiante:</h2> <span>Salomon Ruiz Navarrete</span>
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
            value={comments} // Enlaza el valor del textarea al estado
            onChange={handleCommentsChange} // Actualiza el estado cuando cambie el valor
          />
        </div>
      </div>
    </div>
  );
};

export default UploadDelivery;
