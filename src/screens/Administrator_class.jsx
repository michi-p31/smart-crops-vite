import NavBar from "../components/NavBar_Administrator";
import styles from "../styles/Administrator_class.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


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

  const handleDelete = async(id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/v1/deleteClass/${id}`)
      if(response.data.ok){
        Swal.fire({
          icon: "success",
          title: "Clase eliminada",
          text: "La clase ha sido eliminada exitosamente.",
        });
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "La clase no ha sido eliminada",
        text: "La clase no ha sido eliminada exitosamente.",
      });
    }
  }
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
            <button onClick={()=>handleDelete(Class.Id_Class)} className={styles.Button_edit}>Eliminar</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Administrator_class;
