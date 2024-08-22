import { Link } from 'react-router-dom';
import plant from "../assets/images/planta.png";
import institucion from "../assets/images/colegio.png";
import docente from "../assets/images/maestro.png";
import aula from "../assets/images/aula.png";
import estudiante from "../assets/images/estudiante.png";
import styles from "../styles/Administrator.module.css";
import Navbar from '../components/menu';

const Student = () => {
  return ( 
    <div className={styles.pageContainer}>
      <Navbar />
      <section className={styles.topCategorias}>
        <h1 className={styles.title}>Administrador</h1>
        <div className={styles.containerCategoria}>
          <div className={styles.cardCategorie}>
            <Link to="/Administrator/Add_institucion">
              <img src={institucion} alt="Agregar Institucion" />
              <h1>Agregar Institucion</h1>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/Administrator/Add_teacher">
              <img src={docente} alt="Agregar Docente" />
              <h1>Agregar Docente</h1>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/Administrador/Add_ClassRoom">
              <img src={aula} alt="Agregar Clase" />
              <h1>Agregar Clase</h1>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/Administrador/Add_Student">
              <img src={estudiante} alt="Agregar Clase" />
              <h1>Agregar Estudiante</h1>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/Administrator/Add_matera">
              <img src={plant} alt="Agregar Matera" />
              <h1>Agregar Matera</h1>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Student;
