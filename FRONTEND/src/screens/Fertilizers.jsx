import { Link } from "react-router-dom";
import Navbar from '../components/menu';
import frutas from "../assets/images/frutas.png";
import compost from "../assets/images/compost.png";
import papa from "../assets/images/papa.png";
import huevo from "../assets/images/huevo.png";
import banano from "../assets/images/banano.png";
import lenteja from "../assets/images/lenteja.png";
import madera from "../assets/images/madera.png";
import harina from "../assets/images/harina.png";
import lombriz from "../assets/images/lombriz.png";
import hierbas from "../assets/images/hierbas.png";
import ortiga from "../assets/images/ortiga.png";
import cafe from "../assets/images/cafe.png";
import purin from "../assets/images/purin.png";
import estiercol from "../assets/images/estiercol.png";

import styles from "../styles/Fertilizers.module.css";

const Abonos = () => {
  return (
    <>
    <Navbar /> 
    <div>
      <section className={styles.topCategorias}>
        <h1>Abonos</h1>
        <div className={styles.containerCategoria}>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${frutas})` }}>
            <h1>Abono de Frutas</h1>
            <Link to="">Ver más</Link>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${compost})` }}>
            <h1>Compost</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${papa})` }}>
            <h1>Cáscara de Papa</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${huevo})` }}>
            <h1>Cáscara de Huevo</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banano})` }}>
            <h1>Cáscara de Plátano</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${lenteja})` }}>
            <h1>Enraizante de Lenteja</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${madera})` }}>
            <h1>Fertilizante de cenizas de madera</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${harina})` }}>
            <h1>Fertilizante de Harinas de roca</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${lombriz})` }}>
            <h1>Hummus de Lombriz</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${purin})` }}>
            <h1>Purin de Hierbas</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ortiga})` }}>
            <h1>Purin de Ortiga</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hierbas})` }}>
            <h1>Recortes de Hierbas</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cafe})` }}>
            <h1>Restos de Café</h1>
            <span>Ver más</span>
          </div>
          <div className={styles.cardCategoria} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${estiercol})` }}>
            <h1>Té de Estiércol</h1>
            <span>Ver más</span>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Abonos;
