import styles from "../styles/Report_student.module.css";
import Navbar from '../components/menu';
import { useState } from "react"; 
import { jsPDF } from "jspdf";//libreria para poder generar el pdf
import html2canvas from "html2canvas";
import ImageUploader from "../components/UploaderImage";
import {  useEffect } from "react"; 


  const FormularioPlanta = () => {
    const [formData, setFormData] = useState({
      nombreEstudiante: '',
      fechaMonitoreo: '',
      tipoHuerta: '',
      temperaturaHuerta: '',
      goteo: '',
      nivelHumedad: '',
      notasCrecimiento: '',
      fotoPlanta: ''
    });// funcion para recoger los datos de los input 
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };// funcion para el cambio que tengan los input 
    const handleImageUpload = (image) => {
      setFormData({
        ...formData,
        fotoPlanta: image
      });
    };//funcion para poder tomar el url de la imagen subida
    const handleGeneratePDF = () => {
      console.log("Generando PDF..."); // verifica que la función se llama
    
      const content = document.querySelector(`.${styles.contentToCapture}`);
      console.log(content); 
      html2canvas(content, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a2'
        });//configure el tamaño y horientacion del pdf 
     
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
     
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("reporte.pdf");// nombre de la descarga 
      });}
      // en esta funcion se hace el uso de la libreria html2canvas para poder tener el diseño del formulario en imagen junto con el tamaño que sera utilizado para el pdf
      //esto se guarda en variables para poder utilizar la libreria jspdf

  useEffect(() => {
    if (formData.nombreEstudiante && formData.fechaMonitoreo && formData.tipoHuerta && formData.fotoPlanta) {
      handleGeneratePDF();
    }
  }, [formData]); // aqui se llama la funcion para genera el pdf para que cuando reciba los cambios de los input, genere el pdf automaticamente 

          return (
    <div className={styles.containerForm}>
      <form className={styles.form}>
        <label className={styles.label}>
          Nombre del estudiante:
          <input
          type="text"
          name="nombreEstudiante"
          className={styles.input}
          value={formData.nombreEstudiante}
          onChange={handleInputChange}
          required
           />
        </label>
        <label className={styles.label}>
          Fecha del Monitoreo:
          <input
          type="date"
          name="fechaMonitoreo"
          className={styles.input}
          value={formData.fechaMonitoreo}
          onChange={handleInputChange}
          required
        />
        </label>
        <label className={styles.label}>
          Tipo de Huerta:
          <input
          type="text"
          name="tipoHuerta"
          className={styles.input}
          value={formData.tipoHuerta}
          onChange={handleInputChange}
          required
        />
        </label>
        <label className={styles.label}>
          Temperatura de la huerta:
          <input
          type="text"
          name="temperaturaHuerta"
          className={styles.input}
          value={formData.temperaturaHuerta}
          onChange={handleInputChange}
          required
        />
        </label>
        <label className={styles.label}>
          Goteo:
          <input
          type="text"
          name="goteo"
          className={styles.input}
          value={formData.goteo}
          onChange={handleInputChange}
          required
        />
        </label>
        <label className={styles.label}>
          Nivel de humedad en la huerta:
          <input
          type="text"
          name="nivelHumedad"
          className={styles.input}
          value={formData.nivelHumedad}
          onChange={handleInputChange}
          required
        />
        </label>
        <label className={styles.label}>
          Notas de crecimiento:
          <input
          type="text"
          name="notasCrecimiento"
          className={styles.input}
          value={formData.notasCrecimiento}
          onChange={handleInputChange}
          required
        />
        </label>
        <label className={styles.text_subir}>
            Subir foto de la planta
            <ImageUploader onImageUpload={handleImageUpload} />
        </label>
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
