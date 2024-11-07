import Styles from "../styles/Busqueda.module.css";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar_Administrator";
import Swal from "sweetalert2";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const Buscar = () => {
  const [institutions, setInstitutions] = useState([]);
  const [selectedInstitution, setSelectedInstitution] = useState('');
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [result, setResult] = useState(null);
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
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
          setSelectedClass('');
        } catch (error) {
          console.log(error);
        }
      } else {
        setFilteredClasses([]);
        setSelectedClass('');
      }
    };

    fetchFilteredClasses();
  }, [selectedInstitution]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response;
      if (selectedInstitution && !selectedClass) {
        // en el caso que solo se seleccione la institucion
        response = await axios.get(
          `http://localhost:5000/api/v1/search/${selectedInstitution}`
        );
        setResult(response.data); // guardar el estado de la respuesta 
      } else if (selectedInstitution && selectedClass) {
        // en el caso que si este selecciona la clase
        response = await axios.get(
          `http://localhost:5000/api/v1/search/${selectedInstitution}/${selectedClass}`
        );
        setResult(response.data); 
      }

      Swal.fire({
        icon: 'success',
        title: 'Búsqueda realizada',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al realizar la búsqueda.',
      });
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <NavBar />
      <h1 className={Styles.titulo}>Search!</h1>
      <div className={Styles.formContainer}>
        <form className={Styles.formGroup} onSubmit={handleSubmit}>
          <div className={Styles.Space_data}>
            <label className={Styles.contenido}>Nombre de la institución:</label>
            <select
              className={Styles.Data}
              value={selectedInstitution}
              onChange={(e) => setSelectedInstitution(e.target.value)}
              required
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
              disabled={!filteredClasses.length} // Desactivar si no hay clases disponibles
            >
              <option value="" disabled>Seleccione una clase</option>
              {filteredClasses.map((cls) => (
                <option key={cls.Id_Class} value={cls.Id_Class}>{cls.Class_Name}</option>
              ))}
            </select>
          </div>
          <button className={Styles.Add_Button} type="submit">Buscar</button>
        </form>
      </div>
      {result && (
        <div className={Styles.resultContainer}>
          <h2>Resultados de la Búsqueda</h2>
          <h3>Profesores:</h3>
          <ul>
            {result.teachers.length ? (
              result.teachers.map((teacher) => (
                <li key={teacher.Id_user}>{teacher.Name_user}</li>
              ))
            ) : (
              <li>No hay profesores en esta clase.</li>
            )}
          </ul>

          <h3>Estudiantes:</h3>
          <ul>
            {result.students.length ? (
              result.students.map((student) => (
                <li key={student.Id_user}>{student.Name_user}</li>
              ))
            ) : (
              <li>No hay estudiantes en esta clase.</li>
            )}
          </ul>

          {result.classes && (
            <>
              <h3>Clases:</h3>
              <ul>
                {result.classes.length ? (
                  result.classes.map((cls) => (
                    <li key={cls.Id_Class}>{cls.Class_Name}</li>
                  ))
                ) : (
                  <li>No hay clases en esta institución.</li>
                )}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Buscar;
