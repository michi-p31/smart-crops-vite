import Styles from "../styles/Add_institution.module.css";
import NavBar from "../components/NavBar_Administrator";
import Swal from "sweetalert2";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Add_institucion = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const token = localStorage.getItem("token");


  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/Login") {
      window.location.href = "/Login";
    }
  }, [token, location]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-smartcrops.onrender.com/api/v1/register_Institutions",
        {
          Name_Institution: name,
          Email: email,
        }
      );

      if (response.data.ok) {
        Swal.fire({
          icon: "success",
          title: "Institucion registrada",
          text: "La institucion ha sido registrado exitosamente.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text:
            response.data.message ||
            "Hubo un problema al registrar la institutcion.",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Esta institucion ya se encuentra registrada.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al registrar la institucion.",
        });
      }
      console.error("There was an error registering the institution:", error);
    }
  };

  return (
    <>
      <div className={Styles.Container}>
        <NavBar />
        <h1>¡AGREGAR INSTITUCION!</h1>
        <form className={Styles.Add_ClassRoom} onSubmit={handleSubmit}>
          <div className={Styles.Information}>
            <p>Nombre de la institucion: </p>
            <input
              type="text"
              name="codigoInstitucion"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={Styles.Information}>
            <p>Email de la institutcion: </p>
            <input
              type="email"
              name="nombreInstitucion"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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

export default Add_institucion;
