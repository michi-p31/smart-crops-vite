
import styles from '../styles/Administrator_matera.module.css';

const Administrator_matera = () => {
  return (
    <>
      <h1 className={styles.Titulo}>Matera</h1>
      <div className={styles.Matera_space}>
        <div className={styles.Matera_info}>
          <p>Codigo de la Matera: ###</p>
          <p>Nombre de la Matera: ###</p>
        </div>
        <button className={styles.Button_edit}>Editar</button>
      </div>
    </>
  );
};

export default Administrator_matera;
