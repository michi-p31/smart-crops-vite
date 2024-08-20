
import styles from '../styles/Add_matera.module.css';
import Navbar from '../components/menu';

export const Add_planter = () => {
  return (
    <>
      <Navbar /> 
      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label>Codigo de la institucion :</label>
          <select className={styles.selectInput}></select>
        </div>
        <div className={styles.formGroup}> 
          <label>Codigo de la clase :</label>
          <select className={styles.selectInput}></select>
        </div>
        <div className={styles.formGroup}>
          <label>Id de la materia :</label>
          <select className={styles.selectInput}></select>
        </div>
        <button className={styles.addButton}>Agregar</button>
      </div>
    </>
  );
};

