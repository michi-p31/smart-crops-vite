
import styles from '../styles/Add_institution.module.css';
import Navbar from '../components/menu';

const Add_institucion = () => {
  return (
    <>
    <Navbar /> 
    <h1 className={styles.titulo}>Agregar Institucion</h1>
     <div className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label className={styles.contenido}>Codigo de la institucion:</label>
        <input type="text" className={styles.textInput} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.contenido}>Nombre de la Institucion :</label>
        <input type="text" className={styles.textInput} />
      </div>
      <button className={styles.addButton}>Agregar</button>
    </div>
    </>
  );
};

export default Add_institucion;
