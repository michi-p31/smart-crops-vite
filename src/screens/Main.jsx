import styles from '../styles/Main.module.css';
import logoHome from '../assets/images/imagen_home.svg';
import NavBar from '../components/menu'
const Main = () => {

  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  if(token){
    if (role === "Admin") {
      window.location.href ="/Administrator";
  } else if (role === "Teacher") {
    window.location.href = "/ClassRoom_Teacher";
  } else if (role === "Student") {
    window.location.href = "/ClassRoom_Student";
  } 
  }
  return (
    <div>
      <NavBar/>
       <div className={styles.container_cover}>
        <div className={styles.cover}>
          <div className={styles.text}>
            <h1>Aprende y cuida junto a nosotros tu huerta</h1>
            <p className={styles.parrafo}>
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
