
import styles from '../styles/Administrator_class.module.css';

const Administrator_class = () => {
  return (
    <>
      <h1 className={styles.Titulo}>Clases</h1>
      <div className={styles.Class_space}>
        <div className={styles.Class_info}>
          <p>Codigo de la Clase: ###</p>
          <p>Nombre de la Clase: ###</p>
        </div>
        <button className={styles.Button_edit}>Editar</button>
      </div>
    </>
  );
};

export default Administrator_class;
