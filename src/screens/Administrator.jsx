import { Link } from 'react-router-dom';
import plant from "../assets/images/planta.png";
import institucion from "../assets/images/colegio.png";
import docente from "../assets/images/maestro.png";
import aula from "../assets/images/aula.png";
import estudiante from "../assets/images/estudiante.png";
import styles from "../styles/Administrator.module.css";
import NavBar_Administrator from '../components/NavBar_Administrator';

const Student = () => {
  return ( 
    <div className={styles.pageContainer}>
      <section className={styles.topCategorias}>
        <div className={styles.header}>
          <NavBar_Administrator/>
        <h1 className={styles.title}>Administrador</h1>
        </div>
        <div className={styles.containerCategoria}>
          <div className={styles.cardCategorie}>
            <Link to="/Administrator/Add_institucion">
              <img src={institucion} alt="Agregar Institucion" />
              <h1>Agregar Institucion</h1>
            </Link>
            <Link to="/Administrator/Institutions">
              <button className={styles.ver}>Ver Instituciones</button>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/Administrator/Add_teacher">
              <img src={docente} alt="Agregar Docente" />
              <h1>Agregar Docente</h1>
            </Link>
            <Link to ="/Administrator/Teachers"> <button className={styles.ver}>Ver Docentes</button></Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/Administrador/Add_ClassRoom">
              <img src={aula} alt="Agregar Clase" />
              <h1>Agregar Clase</h1>
            </Link>
            <Link to ="/Administrator/Class"><button className={styles.ver}>Ver Clases</button></Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/Administrador/Add_Student">
              <img src={estudiante} alt="Agregar Clase" />
              <h1>Agregar Estudiante</h1>
            </Link>
            <Link to ="/Administrator/Student"> <button className={styles.ver}>Ver Estudiantes</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

//<div className={styles.cardCategorie}>
//<Link to="/Administrator/Add_matera">
//<img src={plant} alt="Agregar Matera" />
//<h1>Agregar Matera</h1>
//</Link>
//<Link to ="/Administrator/Matera"><button className={styles.ver}>Ver Materas</button></Link>
//</div>

export default Student;
