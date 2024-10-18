import { Link } from "react-router-dom";
import medicinal from "../assets/images/medicinal.png";
import styles from "../styles/Medicinal.module.css";
import Navbar from '../components/menu';

const Medicinales = () => {
  return (
    <>
     <Navbar /> 
    <div>
      <section className={styles.topCategorias}>
        <h1>Usos Medicinales</h1>
        <div className={styles.containerCategoria}>
          <div className={styles.cardCategoria} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${medicinal})`}}>
            <h1>Acidez</h1>
            <Link to={`/Medicinal/acidez`}>Ver más</Link>
          </div>
          <div className={styles.cardCategoria} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${medicinal})`}}>
            <h1>Aclarar la piel</h1>
            <Link to={`/Medicinal/aclarar_piel`}>Ver más</Link>
          </div>
          <div className={styles.cardCategoria} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${medicinal})`}}>
            <h1>Acné</h1>
            <Link to={`/Medicinal/acne`}>Ver más</Link>
          </div>
          <div className={styles.cardCategoria} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${medicinal})`}}>
            <h1>Alergia</h1>
            <Link to={`/Medicinal/alergia`}>Ver más</Link>
          </div>
          <div className={styles.cardCategoria} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${medicinal})`}}>
            <h1>Alopecia</h1>
            <Link to={`/Medicinal/alopecia`}>Ver más</Link>
          </div>
          <div className={styles.cardCategoria} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${medicinal})`}}>
            <h1>Amebiasis</h1>
            <Link to={`/Medicinal/amebiasis`}>Ver más</Link>
          </div>
          <div className={styles.cardCategoria} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${medicinal})`}}>
            <h1>Antiinflamatorio</h1>
            <Link to={`/Medicinal/antiinflamatorio`}>Ver más</Link>
          </div>
          <div className={styles.cardCategoria} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${medicinal})`}}>
            <h1>Arterias coronarias tapadas</h1>
            <Link to={`/Medicinal/arterias_tapadas`}>Ver más</Link>
          </div>
          <div className={styles.cardCategoria} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${medicinal})`}}>
            <h1>Asma</h1>
            <Link to={`/Medicinal/asma`}>Ver más</Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Medicinales;
