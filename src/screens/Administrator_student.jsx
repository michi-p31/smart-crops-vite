import NavBar from "../components/NavBar_Administrator";
import styles from "../styles/Administrator_student.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const Administrator_student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/getStudents"
        );
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async(id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/v1/deleteStudent/${id}`)
      if(response.data.ok){
        Swal.fire({
          icon: "success",
          title: "Estudiante eliminado",
          text: "El estudiante ha sido eliminada exitosamente.",
        }).then(()=>{
          window.location.reload();  //Es para recargar la pagina luego de eliminar la clase
        });
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "El estudiante no ha sido eliminada",
        text: "El estudiante no ha sido eliminada exitosamente.",
      });
    }
  }

  return (
    <>
      <NavBar />
      <h1 className={styles.Titulo}>ESTUDIANTES</h1>
      {students.map((student) => (
        <div key={student.Id_user} className={styles.Student_space}>
          <div className={styles.Student_info}>
            <p>Nombre del estudiante: {student.Name_user}</p>
            <p>Email del estudiante: {student.Email}</p>
          </div>
          <div className={styles.Section_Buttons}>
            <button className={styles.Button_edit}>Editar</button>
            <button onClick={()=>handleDelete(student.Id_user)} className={styles.Button_edit}>Eliminar</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Administrator_student;
