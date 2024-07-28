import styles from "../styles/Categoria.module.css"; 
import { Link } from "react-router-dom";

const Categorias = () => {
  return (
    <div>
      <section className={styles.topCategorias}>
        <div className={styles.titulo}>
        <h1>CATEGORIAS</h1>
        </div>
        <div className={styles.containerCategoria}>
          <div className={`${styles.cardCategoria} ${styles.frutales}`}>
            <h2>Frutales</h2>
            <span>
              <Link to="/categorias/frutales">Ver más</Link>
            </span>
          </div>
          <div className={`${styles.cardCategoria} ${styles.vegetales}`}>
            <h2>Vegetales</h2>
            <Link to="/categorias/vegetales">Ver más</Link>
          </div>
          <div className={`${styles.cardCategoria} ${styles.aromaticas}`}>
            <h2>Aromaticas</h2>
            <Link to="/categorias/aromaticas">Ver más</Link>
          </div>
          <div className={`${styles.cardCategoria} ${styles.flores}`}>
            <h2>Flores</h2>
            <Link to="/categorias/flores">Ver más</Link>
          </div>
          <div className={`${styles.cardCategoria} ${styles.especies}`}>
            <h2>Especies</h2>
            <Link to="/categorias/especies">Ver más</Link>
          </div>
          <div className={`${styles.cardCategoria} ${styles.suculentas}`}>
            <h2>Suculentas</h2>
            <Link to="/categorias/suculentas">Ver más</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categorias;
