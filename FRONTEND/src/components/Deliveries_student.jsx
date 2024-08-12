import { Link } from 'react-router-dom';
import styles from '../styles/StudentDeliveries.module.css';
import { FaPlus } from "react-icons/fa";

const weeks = ["Semana 1", "Semana 2", "Semana 3", "Semana 4"];

const StudentDeliveries = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titleDeliveries}>Subir entrega Estudiante</h2>
      {weeks.map((week, index) => (
        <div key={index} className={styles.cardWeek}>
          <span className={styles.weekText}>{week}</span>
          <Link to="/ClassRoom_Student/Deliveries/Upload_deliveries" className={styles.link}>
            <button className={styles.buttonUpload}>
              Ingresar <span className={styles.plus}><FaPlus /></span>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default StudentDeliveries;
