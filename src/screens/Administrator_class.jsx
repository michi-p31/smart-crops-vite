import NavBar from "../components/NavBar_Administrator";
import styles from "../styles/Administrator_class.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const token = localStorage.getItem("token");


const Administrator_class = () => {
  const [classes, setClasses] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classResponse = await axios.get("https://backend-smartcrops.onrender.com/api/v1/getClasses", {
          headers: {
              Authorization: `Bearer ${token}`, // Envía el token en la cabecera
          },
      });
        const institutionResponse = await axios.get("https://backend-smartcrops.onrender.com/api/v1/getInstitutions", {
          headers: {
              Authorization: `Bearer ${token}`, // Envía el token en la cabecera
          },
      });
        
        setClasses(classResponse.data);
        setInstitutions(institutionResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = async (classItem) => {
    // Abre el pop-up para editar los detalles de la clase
    const { value: formValues } = await Swal.fire({
      title: 'Editar Clase',
      html: 
        `<input id="swal-input1" class="swal2-input" style="width: 90%; max-width:80px; margin-bottom: 20px;" placeholder="Nombre de la Clase" value="${classItem.Class_Name}">` +
        `<select id="swal-input2" class="swal2-select" style="width: 90%; max-width:80px; padding: 10px;">
            ${institutions.map(inst => `<option value="${inst.Id_Institution}" ${inst.Id_Institution === classItem.Id_Institution ? 'selected' : ''}>${inst.Name_institution}</option>`).join('')}
         </select>`,
      preConfirm: () => {
        // Recoge los valores del formulario
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ];
      }
    });
  
    // Si se han recogido los valores del formulario
    if (formValues) {
      const [Class_Name, Id_Institution] = formValues;
  
      try {
        // Realiza la solicitud PUT para actualizar la clase
        const response = await axios.put(`https://backend-smartcrops.onrender.com/api/v1/updateClass/${classItem.Id_Class}`, {
          Class_Name,
          Id_Institution
        });
  
        if (response.data.ok) {
          // Si la actualización es exitosa, muestra una alerta de éxito y recarga la página
          Swal.fire({
            icon: 'success',
            title: 'Clase actualizada',
            text: 'La clase ha sido actualizada exitosamente.',
          }).then(() => {
            window.location.reload();
          });
        } else {
          // Si la actualización no es exitosa, muestra una alerta de error
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al actualizar la clase.',
          });
        }
      } catch (error) {
        // Si hay un error en la solicitud, muestra una alerta de error
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al actualizar la clase.',
        });
      }
    } else {
      // Si no se han recogido valores del formulario
      Swal.fire({
        icon: 'warning',
        title: 'Cancelado',
        text: 'No se ha realizado ningún cambio.',
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://backend-smartcrops.onrender.com/api/v1/deleteClass/${id}`);
      if (response.data.ok) {
        Swal.fire({
          icon: "success",
          title: "Clase eliminada",
          text: "La clase ha sido eliminada exitosamente.",
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "La clase no ha sido eliminada",
        text: "Hubo un problema al eliminar la clase.",
      });
    }
  };

  const getInstitutionName = (id) => {
    const institution = institutions.find(inst => inst.Id_Institution === id);
    return institution ? institution.Name_institution : 'Institución no encontrada'; 
  };

  return (
    <>
      <NavBar />
      <h1 className={styles.Titulo}>CLASES</h1>
      {classes.map((Class) => (
        <div key={Class.Id_Class} className={styles.Class_space}>
          <div className={styles.Class_info}>
            <p>Nombre de la institución: {getInstitutionName(Class.Id_Institution)}</p>
            <p>Nombre de la Clase: {Class.Class_Name}</p>
          </div>
          <div className={styles.Section_Buttons}>
            <button className={styles.Button_edit} onClick={() => handleEdit(Class)}>Editar</button>
            <button onClick={() => handleDelete(Class.Id_Class)} className={styles.Button_edit}>Eliminar</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Administrator_class;
