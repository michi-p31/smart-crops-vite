
import { Link } from 'react-router-dom';
import plant from "../assets/images/planta.png";
import form from "../assets/images/formulario.png";
import comment from "../assets/images/comentario.png";
import styles from "../styles/Classroom_teacher.module.css";
import Navbar from '../components/menu'

const ID_CLASE = localStorage.getItem("Id_Class");
console.log("Id_Class obtenido de localStorage:", ID_CLASE); 


const Teacher = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar/>
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
            <Link to="/ClassRoom/Entregas">
              <img src={form} alt="Entegas Icon" />
              <h1>Entregas</h1>
            </Link>
          </div>
          <div className={styles.cardCategorie}>
            <Link to={`/ClassRoom_Teacher/${ID_CLASE}/Students`}>
              <img src={comment} alt="Estudiantes icon" />
              <h1>Estudiates</h1>
            </Link>
          </div>
        </div> 
      </section>
    </div>
  );
}

export default Teacher;
