import NavBar from '../components/NavBar_Administrator'
import styles from '../styles/Administrator_matera.module.css';

const Administrator_matera = () => {
  return (
    <>
      <NavBar/>
      <h1 className={styles.Titulo}>MATERAS</h1>
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
