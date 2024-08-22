
import styles from '../styles/Add_matera.module.css';

export const Add_planter = () => {
  return (
    <>
      <h1 className={styles.titulo}>¡AGREGAR MATERA!</h1>
      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <p className={styles.contenido}>Codigo de la institucion :</p>
          <select className={styles.selectInput}></select>
        </div>
        <div className={styles.formGroup}> 
          <p className={styles.contenido}>Codigo de la clase :</p>
          <select className={styles.selectInput}></select>
        </div>
        <div className={styles.formGroup}>
          <p className={styles.contenido}>Id de la materia :</p>
          <select className={styles.selectInput}></select>
        </div>
        <button className={styles.addButton}>Agregar</button>
      </div>
    </>
  );
};

