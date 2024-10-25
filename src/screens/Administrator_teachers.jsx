import React from "react";
import Styles from "../styles/Administrator_Teachers.module.css";
import NavBar from "../components/NavBar_Administrator";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Administrator_teachers = () => {
  const [teachers, setTeachers] = useState([]);
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
          "https://backend-smartcrops.onrender.com/api/v1/getTeachers", {
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
        setTeachers(response.data);
        setClasses(responseClasses.data);
        setInstitutions(responseInstitutions.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = async (teacher) => {
    const { value: formValues } = await Swal.fire({
      title: "Editar Maestro",
      html: `
        <input id="swal-input1" class="swal2-input" value="${
          teacher.Name_user || ""
        }" placeholder="Nombre del maestro">
        <input id="swal-input2" class="swal2-input" value="${
          teacher.Email || ""
        }" placeholder="Email del maestro">
        <input id="swal-input3" class="swal2-input" value="${
          teacher.Password || ""}" placeholder="Nueva contraseña (dejar en blanco si no desea cambiar)"> 
      `+
      `<select id="swal-input4" class="swal2-select" style="width: 90%; max-width:80px; padding: 10px;">
            ${institutions.map(inst => `<option value="${inst.Id_Institution}" ${inst.Id_Institution === teacher.Id_Institution ? 'selected' : ''}>${inst.Name_institution}</option>`).join('')}
         </select>`+
      `<select id="swal-input5" class="swal2-select" style="width: 90%; max-width:80px; padding: 10px;">
            ${classes.map(clas => `<option value="${clas.Id_Class}" ${clas.Id_Class === teacher.Id_Class ? 'selected' : ''}>${clas.Class_Name}</option>`).join('')}
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
          `http://localhost:5000/api/v1/updateTeacher/${teacher.Id_user}`,
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
            title: "Maestro actualizado",
            text: "El maestro ha sido actualizado exitosamente.",
          }).then(() => {
            window.location.reload(); // Recarga la página para ver los cambios
          });
        }
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al actualizar el maestro.",
        });
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/deleteTeacher/${id}`
      );
      if (response.data.ok) {
        Swal.fire({
          icon: "success",
          title: "Maestro eliminado",
          text: "El maestro ha sido eliminada exitosamente.",
        }).then(() => {
          window.location.reload(); //Es para recargar la pagina luego de eliminar la clase
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "El maestro no ha sido eliminada",
        text: "El maestro no ha sido eliminada exitosamente.",
      });
    }
  };

  return (
    <>
      <NavBar />
      <h1 className={Styles.Titulo}>MAESTROS</h1>
      {teachers.map((teacher) => (
        <div className={Styles.Teacher_space} key={teacher.Id_user}>
          <div className={Styles.Teacher_info}>
            <p>Nombre del maestro: {teacher.Name_user}</p>
            <p>Email del maestro: {teacher.Email}</p>
          </div>
          <div className={Styles.Section_Buttons}>
            <button
              onClick={() => handleEdit(teacher)}
              className={Styles.Button_edit}
            >
              Editar
            </button>
            <button
              onClick={() => handleDelete(teacher.Id_user)}
              className={Styles.Button_edit}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
