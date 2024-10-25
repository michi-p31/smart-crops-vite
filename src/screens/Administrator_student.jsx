import NavBar from "../components/NavBar_Administrator";
import styles from "../styles/Administrator_student.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Administrator_student = () => {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const location = useLocation();
  const token = localStorage.getItem("token");


  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-smartcrops.onrender.com/api/v1/getStudents", {
            headers: {
                Authorization: `Bearer ${token}`, // Envía el token en la cabecera
            },
        });
        const responseClasses = await axios.get(
          "https://backend-smartcrops.onrender.com/api/v1/getClasses", {
            headers: {
                Authorization: `Bearer ${token}`, // Envía el token en la cabecera
            },
        });
        const responseInstitutions = await axios.get(
          "https://backend-smartcrops.onrender.com/api/v1/getInstitutions", {
            headers: {
                Authorization: `Bearer ${token}`, // Envía el token en la cabecera
            },
        });
        setStudents(response.data);
        setClasses(responseClasses.data);
        setInstitutions(responseInstitutions.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = async (student) => {
    const { value: formValues } = await Swal.fire({
      title: "Editar Estudiante",
      html: `
        <input id="swal-input1" class="swal2-input" value="${
          student.Name_user || ""
        }" placeholder="Nombre del estudiante">
        <input id="swal-input2" class="swal2-input" value="${
          student.Email || ""
        }" placeholder="Email del estudiante">
        <input id="swal-input3" class="swal2-input" value="${
          student.Password || ""}" placeholder="Nueva contraseña "> 
      `+
      `<select id="swal-input4" class="swal2-select" style="width: 90%; max-width:80px; padding: 10px;">
            ${institutions.map(inst => `<option value="${inst.Id_Institution}" ${inst.Id_Institution === student.Id_Institution ? 'selected' : ''}>${inst.Name_institution}</option>`).join('')}
         </select>`+
      `<select id="swal-input5" class="swal2-select" style="width: 90%; max-width:80px; padding: 10px;">
            ${classes.map(clas => `<option value="${clas.Id_Class}" ${clas.Id_Class === student.Id_Class ? 'selected' : ''}>${clas.Class_Name}</option>`).join('')}
         </select>`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value, // Nueva contraseña (opcional)
          document.getElementById("swal-input4").value,
          document.getElementById("swal-input5").value
        ];
      },
    });

    if (formValues) {
      const [UserName, Email, Password, Id_Institution, Id_Class] = formValues;

      try {
        const response = await axios.put(
          `http://localhost:5000/api/v1/updateStudent/${student.Id_user}`,
          {
            UserName,
            Email,
            Password, // Nueva contraseña (si la hay)
            Id_Institution,
            Id_Class
          }
        );

        if (response.data.ok) {
          Swal.fire({
            icon: "success",
            title: "Estudiante actualizado",
            text: "El estudiante ha sido actualizado exitosamente.",
          }).then(() => {
            window.location.reload(); // Recarga la página para ver los cambios
          });
        }
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al actualizar el estudiante.",
        });
      }
    }
  };

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
            <button onClick={()=>handleEdit(student)} className={styles.Button_edit}>Editar</button>
            <button onClick={()=>handleDelete(student.Id_user)} className={styles.Button_edit}>Eliminar</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Administrator_student;
