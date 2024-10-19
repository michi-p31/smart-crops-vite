import NavBar from "../components/NavBar_Administrator";
import styles from "../styles/Administrator_class.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Administrator_class = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/getClasses"
        );
        setClasses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <h1 className={styles.Titulo}>CLASES</h1>
      {classes.map((Class) => (
        <div key={Class.Id_Class} className={styles.Class_space}>
          <div className={styles.Class_info}>
            <p>Codigo de la Clase: {Class.Id_Class}</p>
            <p>Nombre de la Clase: {Class.Class_Name}</p>
          </div>
          <div className={styles.Section_Buttons}>
            <button className={styles.Button_edit}>Editar</button>
            <button className={styles.Button_edit}>Eliminar</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Administrator_class;
