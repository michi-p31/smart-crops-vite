import { Link } from 'react-router-dom'; 
import plant from "../assets/images/planta.png";
import form from "../assets/images/formulario.png";
import comment from "../assets/images/comentario.png";
import styles from "../styles/Classroom_student.module.css";
import Navbar from '../components/NavBar_Student';
import { useLocation } from 'react-router-dom';
import  { useEffect } from 'react';
const Student = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <section className={styles.topCategorias}>
        <h1 className={styles.title}>Aula Virtual</h1>
        <div className={styles.containerCategoria}>
          <div className={styles.cardCategorie}>
            <Link to="/ClassRoom/Monitoring">
              <img src={plant} alt="Estado De La Huerta" />
              <h1>Estado De La Huerta</h1>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/ClassRoom_Student/Report">
              <img src={form} alt="Formulario monitoreo" /> 
              <h1>Formulario monitoreo</h1>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="/ClassRoom_Student/Deliveries">
              <img src={comment} alt="Subir Entregas" />
              <h1>Ver comentarios</h1>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Student;
