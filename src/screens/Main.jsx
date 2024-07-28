import styles from '../styles/Main.module.css';
import logoHome from '../assets/images/imagen_home.svg';

const Main = () => {
  return (
    <div>
       <div className={styles.container_cover}>
        <div className={styles.cover}>
          <div className={styles.text}>
            <h1>Aprende y cuida junto a nosotros tu huerta</h1>
            <p>
              Junto a nosotros nuestros niños y jóvenes podrán aprender a
              trabajar en su huerta cuidando y preservándola
            </p>
          </div>
          <div className={styles.svg}>
            <img src={logoHome} alt="Imagen Home" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Main;
