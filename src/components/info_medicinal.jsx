import { useParams, Link } from "react-router-dom";
import { infoMedicinal } from "./arr_info_medicinal.js";
import styles from "../styles/info_medicinal.module.css";
import Navbar from '../components/menu';

const MedicinalDetail = () => {
  const { nombreMedicinal } = useParams();
  const medicinal = infoMedicinal.find((a) => a.nombre_url === nombreMedicinal);

  if (!medicinal) {
    return <h1>Planta medicinal no encontrada</h1>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.container_medicinal}>
        <h1 className={styles.titulo_mediicnal}>{medicinal.nombre}</h1>
        
        <div className={styles.planta_item}>
          <img src={medicinal.imagen_a} alt={medicinal.planta_a} className={styles.planta_img} />
          <p className={styles.plantas_medicinal}>
            <Link to={medicinal.url_planta_a}>{medicinal.planta_a}</Link>
          </p>
        </div>
        
        <div className={styles.planta_item}>
          <img src={medicinal.imagen_b} alt={medicinal.planta_b} className={styles.planta_img} />
          <p className={styles.plantas_medicinal}> 
            <Link to={medicinal.url_planta_b}>{medicinal.planta_b}</Link>
          </p>
        </div>
        
        <div className={styles.planta_item}>
          <img src={medicinal.imagen_c} alt={medicinal.planta_c} className={styles.planta_img} />
          <p className={styles.plantas_medicinal}> 
            <Link to={medicinal.url_planta_c}>{medicinal.planta_c}</Link>
          </p>
        </div>

        <div className={styles.planta_item}>
          <img src={medicinal.imagen_d} alt={medicinal.planta_d} className={styles.planta_img} />
          <p className={styles.plantas_medicinal}>  
            <Link to={medicinal.url_planta_d}>{medicinal.planta_d}</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default MedicinalDetail;
