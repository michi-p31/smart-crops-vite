import React, { useState, useEffect } from 'react';
import Styles from '../styles/Administrator_institution.module.css';
import NavBar from '../components/NavBar_Administrator';
import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem("token");
console.log("Token obtenido de localStorage:", token); 

export const Administrator_list_institutions = () => {
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/getInstitutions', {
          headers: {
              Authorization: `Bearer ${token}`, // Envía el token en la cabecera
          },
      });
        setInstitutions(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = async (InstitutionItem) => {
    const { value: formValues } = await Swal.fire({
      title: 'Editar Institución',
      html: `
        <input id="swal-input1" class="swal2-input" style="width: 90%; max-width:300px; margin-bottom: 20px;" placeholder="Nombre de la institución" value="${InstitutionItem.Name_institution || ''}">
        <input id="swal-input2" class="swal2-input" style="width: 90%; max-width:300px; margin-bottom: 20px;" placeholder="Email de la institución" value="${InstitutionItem.Email || ''}">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ];
      }
    });

    if (formValues) {
      const [Name_institution, Email] = formValues;

      try {
        const response = await axios.put(`http://localhost:5000/api/v1/updateInstitution/${InstitutionItem.Id_Institution}`, {
          Name_institution,
          Email
        });

        if (response.data.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Institución actualizada',
            text: 'La institución ha sido actualizada exitosamente.',
          }).then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al actualizar la institución.',
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al actualizar la institución.',
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Cancelado',
        text: 'No se ha realizado ningún cambio.',
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/v1/deleteInstitution/${id}`);
      if (response.data.ok) {
        Swal.fire({
          icon: "success",
          title: "Institución eliminada",
          text: "La institución ha sido eliminada exitosamente.",
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "La institución no ha sido eliminada",
        text: "Hubo un problema al eliminar la institución.",
      });
    }
  };

  return (
    <>
      <NavBar />
      <h1 className={Styles.Titulo}>INSTITUCIONES</h1>
      {institutions.map((institution) => (
        <div key={institution.Id_Institution} className={Styles.Institution_space}>
          <div className={Styles.Institution_info}>
            <p>Nombre de la institución: {institution.Name_institution}</p>
            <p>Email: {institution.Email}</p>
          </div>
          <div className={Styles.Section_Button}>
            <button onClick={() => handleEdit(institution)} className={Styles.Button_edit}>Editar</button>
            <button onClick={() => handleDelete(institution.Id_Institution)} className={Styles.Button_edit}>Eliminar</button>
          </div>
        </div>
      ))}
    </>
  );
};
