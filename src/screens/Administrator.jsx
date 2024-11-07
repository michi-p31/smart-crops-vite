import { Link } from 'react-router-dom';
import plant from "../assets/images/planta.png";
import institucion from "../assets/images/colegio.png";
import docente from "../assets/images/maestro.png";
import aula from "../assets/images/aula.png";
import estudiante from "../assets/images/estudiante.png";
import busqueda from "../assets/images/busqueda.png";
import styles from "../styles/Administrator.module.css";
import NavBar_Administrator from '../components/NavBar_Administrator';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Student = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);

  const handleDownload = () => {
    fetch('http://localhost:5000/api/v1/Teachers_Report_Download', {
      method: 'GET',
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Teachers_List.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => console.error('Error descargando PDF:', error));
  };

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
            <Link to ="/Administrator/Teachers">
              <button className={styles.ver}>Ver Docentes</button>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/Administrador/Add_ClassRoom">
              <img src={aula} alt="Agregar Clase" />
              <h1>Agregar Clase</h1>
            </Link>
            <Link to ="/Administrator/Class">
              <button className={styles.ver}>Ver Clases</button>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/Administrador/Add_Student">
              <img src={estudiante} alt="Agregar Estudiante" />
              <h1>Agregar Estudiante</h1>
            </Link>
            <Link to ="/Administrator/Student">
              <button className={styles.ver}>Ver Estudiantes</button>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/Administrator/Busqueda">
              <img src={busqueda} alt="Busqu" />
              <h1> Buscar</h1>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.Section_Reports}>
        <h1 className={styles.title2}>Generacion de reportes</h1>
        <button onClick={handleDownload}>Descargar reporte de maestros</button>

      </section>
    </div>
  );
};

export default Student;
