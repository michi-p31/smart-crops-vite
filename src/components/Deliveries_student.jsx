import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/StudentDeliveries.module.css';
import { FaPlus } from "react-icons/fa";
import Navbar from '../components/menu';

const StudentDeliveries = () => {
  const [weeks, setWeeks] = useState(["Semana 1", "Semana 2", "Semana 3", "Semana 4"]);

  //  agregar una nueva semana
  const addNewWeek = () => {
    const newWeek = `Semana ${weeks.length + 1}`;
    setWeeks([...weeks, newWeek]);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.titleDeliveries}>Subir entrega</h2>
        {weeks.map((week, index) => (
          <div key={index} className={styles.cardWeek}>
            <span className={styles.weekText}>{week}</span>
            <Link to={`/ClassRoom_Student/Deliveries/Upload_deliveries/${index + 1}`} className={styles.link}>
              <button className={styles.buttonUpload}>
                Ingresar <span className={styles.plus}><FaPlus /></span>
              </button>
            </Link>
          </div>
        ))}
        <button onClick={addNewWeek} className={styles.buttonAddWeek}>
          Agregar nueva semana
        </button>
      </div>
    </div>
  );
};

export default StudentDeliveries;
