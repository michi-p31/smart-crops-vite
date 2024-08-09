
import { Link } from 'react-router-dom';
import plant from "../assets/images/planta.png";
import form from "../assets/images/formulario.png";
import comment from "../assets/images/comentario.png";
import styles from "../styles/Classroom_student.module.css";

const Student = () => {
  return (
    <div>
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
            <Link to="/Classroom_student/Report">
              <img src={form} alt="Formulario monitoreo" />
              <h1>Formulario monitoreo</h1>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to="">
              <img src={comment} alt="Subir Entregas" />
              <h1>Subir Entregas</h1>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Student;
