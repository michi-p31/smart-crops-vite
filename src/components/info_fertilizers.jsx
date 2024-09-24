import { useParams } from "react-router-dom";
import { infoAbonos } from "./arr_info_fertilizers.js";
import styles from "../styles/info_fertilizers.module.css";
import Navbar from '../components/menu';
const AbonoDetail = () => {
  const { nombreAbono } = useParams();
  const abono = infoAbonos.find((a) => a.nombre_url === nombreAbono);

  if (!abono) {
    return <h1>Abono no encontrado</h1>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.container_abonos}>
        <div className={styles.img_descripcion_container}>
          <img
            src={abono.imagen}
            alt={abono.nombre}
            className={styles.imgAbono}
          />
          <div className={styles.descripcion_container}>
            <h1 className={styles.titulo_abono}>{abono.nombre}</h1>
            <p className={styles.descripcion_abono}>{abono.descripcion}</p>
          </div>
        </div>
  
        <div className={styles.abono_info}>
          <h2 className={styles.subtitulo_abono}>Materiales</h2>
          <p className={styles.parrafo_abono}>{abono.materiales}</p>
          <h2 className={styles.subtitulo_abono}>Preparación</h2>
          <p className={styles.parrafo_abono}>{abono.preparacion}</p>
          <h2 className={styles.subtitulo_abono}>Usos del abono</h2>
          <p className={styles.parrafo_abono}>{abono.usos}</p>
        </div>
      </div>
    </>
  );  
};

export default AbonoDetail;
