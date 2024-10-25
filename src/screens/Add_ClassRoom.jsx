import Styles from "../styles/Add_ClassRoom.module.css";
import NavBar from "../components/NavBar_Administrator";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

export const Add_ClassRoom = () => {
  const [name, setName] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [institutions, setInstitutions] = useState([]);
  const location = useLocation();
  const token = localStorage.getItem("token");


  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/Login") {
      window.location.href = "/Login";
    }
  }, [token, location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const institutionResponse = await axios.get("https://backend-smartcrops.onrender.com/api/v1/getInstitutions");
        setInstitutions(institutionResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://backend-smartcrops.onrender.com/api/v1/register_Class", {
        Id_Institution: selectedInstitution,
        Name_Class: name
      });

      if (response.data.ok) {
        Swal.fire({
          icon: "success",
          title: "Clase registrada",
          text: "La clase ha sido registrada exitosamente.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.data.message || "Hubo un problema al registrar la clase.",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Esta clase ya se encuentra registrada.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al registrar la clase.",
        });
      }
      console.error("There was an error registering the class:", error);
    }
  };

  return (
    <>
      <div className={Styles.Container}>
        <NavBar />
        <h1>¡AGREGAR CLASE!</h1>
        <form className={Styles.Add_ClassRoom} onSubmit={handleSubmit}>
          <div className={Styles.Information}>
            <p>Nombre de la institución:</p>
            <select
              value={selectedInstitution}
              onChange={(e) => setSelectedInstitution(e.target.value)}
            >
              <option value="" disabled>Seleccione una institución</option>
              {institutions.map((Int) => (
                <option key={Int.Id_Institution} value={Int.Id_Institution}>
                  {Int.Name_institution}
                </option>
              ))}
            </select>
          </div>
          <div className={Styles.Information}>
            <p>Nombre de la clase:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button className={Styles.Add_Button} type="submit">
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};
