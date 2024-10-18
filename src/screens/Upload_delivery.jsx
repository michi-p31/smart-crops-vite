import styles from '../styles/Upload_delivery.module.css';
import { FaPlus } from 'react-icons/fa';
import Navbar from '../components/menu';
import { useParams } from 'react-router-dom'; 

const Upload_delivery = () => {
  const { week } = useParams(); // tomar el parámetro de la URL
  
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.titulo_upload}>
          <h1>Entrega semana {week}</h1> 
          <div className={styles.student}>
            <h2>Estudiante:</h2> <span>Salomon Ruiz Navarrete</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.addButton}>
            <FaPlus className={styles.icon} /> Añadir entrega
          </button>
          <button className={styles.submitButton}>Enviar</button>
        </div>
        <div className={styles.comments}>
          <label htmlFor="comments">Comentarios:</label>
          <textarea id="comments" className={styles.textarea}></textarea>
        </div>
      </div>
    </div>
  );
};

export default Upload_delivery;
