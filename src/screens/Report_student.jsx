import React, { useState } from "react";
import styles from "../styles/Report_student.module.css";
import Navbar from "../components/NavBar_Student";
import axios from "axios";
import Swal from 'sweetalert2'

const FormularioPlanta = () => {
  // Obtener el ID del usuario del localStorage
  const ID_USER = localStorage.getItem("Id_User");
  const ID_CLASS = localStorage.getItem("Id_Class");

  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombreEstudiante: "",
    nombreMatera: "",
    fechaMonitoreo: "",
    tipoHuerta: "",
    temperaturaHuerta: "",
    goteo: "",
    nivelHumedad: "",
    nivelLuz: "",
    frecuenciaRiego: "",
    notasCrecimiento: "",
    problemasCrecimiento: "",
    notasFertilizacion: "",
    semana: "",
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar la recarga de la página
    try {
      const response = await axios.post("https://backend-smartcrops.onrender.com/api/v1/Upload_Delivery", {
        student_id: ID_USER,
        week_no: formData.semana,  // Cambié de 'week_no' a 'semana' para que coincida
        Name_user: formData.nombreEstudiante, // Usar el nombre del estudiante aquí
        Id_Class: ID_CLASS,  // Aquí se incluye el ID del estudiante del localStorage
        Nombre_Matera: formData.nombreMatera,
        Fecha_reporte: formData.fechaMonitoreo,
        Tipo_Huerta: formData.tipoHuerta,
        Temperatura: formData.temperaturaHuerta,
        Goteo: formData.goteo,
        Nivel_humedad: formData.nivelHumedad,
        Nivel_Luz: formData.nivelLuz,
        Frecuencia_riego: formData.frecuenciaRiego,
        Observaciones: formData.notasCrecimiento,
        Problemas: formData.problemasCrecimiento,
        Fertilizacion: formData.notasFertilizacion,
      });
      Swal.fire({
        icon: "success",
        title: "Reporte enviado",
        text: "El reporte se ha enviado correctamente.",
      });// Mostrar mensaje de éxito
    } catch (error) {
      console.error("Error al enviar el reporte:", error);
      Swal.fire({
        icon: "error",
        title: "Error enviando el reporte",
        text: "Algo a ocurrido.",
      });
    }
  };

  return (
    <div className={styles.containerForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Nombre del estudiante:
          <input
            type="text"
            name="nombreEstudiante"
            className={styles.input}
            required
            value={formData.nombreEstudiante}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Nombre de la matera:
          <input
            type="text"
            name="nombreMatera"
            className={styles.input}
            required
            value={formData.nombreMatera}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Fecha del Monitoreo:
          <input
            type="date"
            name="fechaMonitoreo"
            className={styles.input}
            required
            value={formData.fechaMonitoreo}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Tipo de Huerta:
          <input
            type="text"
            name="tipoHuerta"
            className={styles.input}
            required
            value={formData.tipoHuerta}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Temperatura de la huerta:
          <input
            type="text"
            name="temperaturaHuerta"
            className={styles.input}
            required
            value={formData.temperaturaHuerta}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Goteo:
          <input
            type="text"
            name="goteo"
            className={styles.input}
            required
            value={formData.goteo}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Nivel de humedad en la huerta:
          <input
            type="text"
            name="nivelHumedad"
            className={styles.input}
            required
            value={formData.nivelHumedad}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Nivel de luz:
          <input
            type="text"
            name="nivelLuz"
            className={styles.input}
            required
            value={formData.nivelLuz}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Frecuencia de riego:
          <input
            type="text"
            name="frecuenciaRiego"
            className={styles.input}
            required
            value={formData.frecuenciaRiego}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Observaciones de crecimiento:
          <input
            type="text"
            name="notasCrecimiento"
            className={styles.input}
            required
            value={formData.notasCrecimiento}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Problemas de crecimiento:
          <input
            type="text"
            name="problemasCrecimiento"
            className={styles.input}
            required
            value={formData.problemasCrecimiento}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Notas de fertilización:
          <input
            type="text"
            name="notasFertilizacion"
            className={styles.input}
            required
            value={formData.notasFertilizacion}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Semana:
          <select
            name="semana"
            value={formData.semana}
            onChange={handleChange}
            className={styles.input}
            required
          >
            <option value="">Selecciona una semana</option>
            <option value="1">Semana 1</option>
            <option value="2">Semana 2</option>
            <option value="3">Semana 3</option>
            <option value="4">Semana 4</option>
          </select>
        </label>
        <button type="submit" className={styles.enviar}>Enviar</button>
      </form>
    </div>
  );
};

const Monitoreo = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.contentToCapture}>
        <h2 className={styles.h2}>Reporte De Matera</h2>
        <FormularioPlanta />
      </div>
    </div>
  );
};

export default Monitoreo;
