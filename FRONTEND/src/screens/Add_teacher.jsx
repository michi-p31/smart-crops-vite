
import styles from '../styles/Add_teacher.module.css';
import Navbar from '../components/menu';

const Add_institucion = () => {
  return (
    <>
    <Navbar /> 
    <h1 className={styles.titulo}>Agregar Docente</h1>
     <div className={styles.formContainer}>
     <div className={styles.formGroup}>
          <label className={styles.contenido}>Codigo de la institucion :</label>
          <select className={styles.selectInput}></select>
        </div>
      <div className={styles.formGroup}>
        <label className={styles.contenido}>Codigo del Docente :</label>
        <input type="text" className={styles.textInput} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.contenido}>Correo :</label>
        <input type="text" className={styles.textInput} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.contenido}>Contraseña :</label>
        <input type="text" className={styles.textInput} />
      </div>
      <button className={styles.addButton}>Agregar</button>
    </div>
    </>
  );
};

export default Add_institucion;
