
import { Link } from 'react-router-dom';
import plant from "../assets/images/planta.png";
import form from "../assets/images/formulario.png";
import comment from "../assets/images/comentario.png";
import report from '../assets/images/reports_icon.png'
import styles from "../styles/Classroom_teacher.module.css";
import Navbar from '../components/NavBar_Teacher'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'; 


const Teacher = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const ID_CLASE = localStorage.getItem("Id_Class"); 

  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);
  return (
    <div className={styles.pageContainer}>
      <Navbar/>
      <section className={styles.topCategorias}>
        <h1 className={styles.title}>Aula Virtual</h1>
        <div className={styles.containerCategoria}>
          <div className={styles.cardCategorie}>
            <Link to="/Monitoring_Teacher">
              <img src={plant} alt="Estado De La Huerta" />
              <h1>Estado De La Huerta</h1>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
          <a href={`/ClassRoom_Teacher/${ID_CLASE}/Week`}>
              <img src={form} alt="Entegas Icon" />
              <h1>Entregas</h1>
          </a>
          </div>
          <div className={styles.cardCategorie}>
          <a href={`/ClassRoom_Teacher/Reports`}>
              <img src={report} alt="Reports Icon" />
              <h1>Reportes</h1>
          </a>
          </div>
          <div className={styles.cardCategorie}>
            <a href={`/ClassRoom_Teacher/${ID_CLASE}/Students`}>
              <img src={comment} alt="Estudiantes icon" />
              <h1>Estudiates</h1>
            </a>
          </div>
        </div> 
      </section>
    </div>
  );
}

export default Teacher;
