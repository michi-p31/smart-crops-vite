import Styles from "../styles/Add_Student.module.css";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar_Administrator";
import Swal from "sweetalert2";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const Add_Student = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [institutions, setInstitutions] = useState([]);
  const [selectedInstitution, setSelectedInstitution] = useState('');
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Si no hay token y el usuario no está en la página de login, redirigirlo
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await axios.get('https://backend-smartcrops.onrender.com/api/v1/getInstitutions');
        setInstitutions(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInstitutions();
  }, []);

  useEffect(() => {
    const fetchFilteredClasses = async () => {
      if (selectedInstitution) {
        try {
          const classResponse = await axios.get(
            `https://backend-smartcrops.onrender.com/api/v1/getClassesByInstitution/${selectedInstitution}`
          );
          setFilteredClasses(classResponse.data);
          setSelectedClass(''); // Limpiar clase seleccionada
        } catch (error) {
          console.log(error);
        }
      } else {
        setFilteredClasses([]); // Limpiar si no hay institución seleccionada
        setSelectedClass(''); // Limpiar clase seleccionada
      }
    };
  
    fetchFilteredClasses();
  }, [selectedInstitution]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://backend-smartcrops.onrender.com/api/v1/register_Student', {
        UserName: name,
        Email: email,
        Password: password,
        Id_Class: selectedClass,
        Id_Institution: selectedInstitution
      });

      if (response.data.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Estudiante registrado',
          text: 'El estudiante ha sido registrado exitosamente.'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.message || 'Hubo un problema al registrar el estudiante.'
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Este correo ya se encuentra registrado.'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al registrar el estudiante.'
        });
      }
      console.error('There was an error registering the student:', error);
    }
  };

  return (
    <>
      <NavBar />
      <h1 className={Styles.titulo}>¡AGREGAR ESTUDIANTE!</h1>
      <div className={Styles.formContainer}>
        <form className={Styles.formGroup} onSubmit={handleSubmit}>
          <div className={Styles.Space_data}>
            <label className={Styles.contenido}>Nombre:</label>
            <input
              type="text"
              className={Styles.textInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={Styles.Space_data}>
            <label className={Styles.contenido}>Correo electrónico:</label>
            <input
              type="email"
              className={Styles.textInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={Styles.Space_data}>
            <label className={Styles.contenido}>Contraseña:</label>
            <input
              type="text"
              className={Styles.textInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={Styles.Space_data}>
            <label className={Styles.contenido}>Nombre de la institución:</label>
            <select
              className={Styles.Data}
              value={selectedInstitution}
              onChange={(e) => setSelectedInstitution(e.target.value)}
            >
              <option value="" disabled>Seleccione una institución</option>
              {institutions.map((Int) => (
                <option key={Int.Id_Institution} value={Int.Id_Institution}>{Int.Name_institution}</option>
              ))}
            </select>
          </div>
          <div className={Styles.Space_data}>
            <label className={Styles.contenido}>Nombre de la clase:</label>
            <select
              className={Styles.Data}
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              disabled={!filteredClasses.length} // Desactivar si no hay clases
            >
              <option value="" disabled>Seleccione una clase</option>
              {filteredClasses.map((cls) => (
                <option key={cls.Id_Class} value={cls.Id_Class}>{cls.Class_Name}</option>
              ))}
            </select>
          </div>
          <button className={Styles.Add_Button} type="submit">Agregar</button>
        </form>
      </div>
    </>
  );
};

export default Add_Student;
