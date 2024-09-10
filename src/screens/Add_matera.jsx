import NavBar from '../components/NavBar_Administrator'
import styles from '../styles/Add_matera.module.css';

export const Add_planter = () => {
  return (
    <>
      <NavBar/>
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
          <p className={styles.contenido}>Codigo de la Matera :</p>
          <input type="text" name='' />
        </div>
        <button className={styles.addButton}>Agregar</button>
      </div>
    </>
  );
};

