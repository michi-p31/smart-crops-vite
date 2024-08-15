import styles from "../styles/Report_student.module.css";
import { RiDownload2Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import Navbar from '../components/menu';

const FormularioPlanta = () => {
  return (
    <div className={styles.containerForm}>
      <form className={styles.form}>
        <label className={styles.label}>
          Nombre del estudiante:
          <input
          type="text"
          name="nombreEstudiante"
          className={styles.input}
          required
           />
        </label>
        <label className={styles.label}>
          Fecha del Monitoreo:
          <input
          type="date"
          name="fechaMonitoreo"
          className={styles.input}
          required
        />
        </label>
        <label className={styles.label}>
          Tipo de Huerta:
          <input
          type="text"
          name="tipoHuerta"
          className={styles.input}
          required
        />
        </label>
        <label className={styles.label}>
          Temperatura de la huerta:
          <input
          type="text"
          name="temperaturaHuerta"
          className={styles.input}
          required
        />
        </label>
        <label className={styles.label}>
          Goteo:
          <input
          type="text"
          name="goteo"
          className={styles.input}
          required
        />
        </label>
        <label className={styles.label}>
          Nivel de humedad en la huerta:
          <input
          type="text"
          name="nivelHumedad"
          className={styles.input}
          required
        />
        </label>
        <label className={styles.label}>
          Notas de crecimiento:
          <input
          type="text"
          name="notasCrecimiento"
          className={styles.input}
          required
        />
        </label>
        <label className={styles.text_subir}>
            Subir foto de la planta
            <button className={styles.subir} type="submit" disabled><FaPlus />
        </button>
        </label>
        <label className={styles.download}>
        <RiDownload2Fill />
        Generar Reporte 
        </label>
      </form>
    </div>
  );
};

const Monitoreo = () => {
  return (
    <div>
      <Navbar />
      <h2 className={styles.h2}>Reporte De Matera</h2>
      <FormularioPlanta />
    </div>
  );
};

export default Monitoreo;
