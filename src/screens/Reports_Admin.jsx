import NavBar from "../components/NavBar_Administrator";
import Styles from "../styles/ReportsAdmin.module.css";
import institucion from "../assets/images/colegio.png";
import docente from "../assets/images/maestro.png";
import aula from "../assets/images/aula.png";
import estudiante from "../assets/images/estudiante.png";

const handle_Download_Teacher = () => {
  fetch("https://backend-smartcrops.onrender.com/api/v1/Teachers_Report_Download", {
    method: "GET",
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Teachers_List.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch((error) => console.error("Error descargando PDF:", error));
};

const handle_Download_Student = () => {
    fetch("https://backend-smartcrops.onrender.com/api/v1/Student_Report_Download", {
      method: "GET",
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Students_list.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => console.error("Error descargando PDF:", error));
  };

  const handle_Download_Class = () => {
    fetch("https://backend-smartcrops.onrender.com/api/v1/Classes_Report_Download", {
      method: "GET",
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Classes_list.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => console.error("Error descargando PDF:", error));
  };

  const handle_Download_Institution = () => {
    fetch("https://backend-smartcrops.onrender.com/api/v1/Institution_Report_Download", {
      method: "GET",
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Institution_list.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => console.error("Error descargando PDF:", error));
  };


const Report_Admin = () => {
  return (
    <>
    <NavBar />
    <h1 className={Styles.Tittle}>Reportes</h1>
      <section className={Styles.Section_Report}>
        <div className={Styles.Option_Report}>
            <img src={docente} alt="Icon Teacher" />
            <button onClick={handle_Download_Teacher}>Reporte maestros</button>
        </div>
        <div className={Styles.Option_Report}>
            <img src={estudiante} alt="Icon Student" />
            <button onClick={handle_Download_Student}>Reporte estudiantes</button>
        </div>  
        <div className={Styles.Option_Report}>
            <img src={aula} alt="Icon Class" />
            <button onClick={handle_Download_Class}>Reporte clases</button>
        </div>
        <div className={Styles.Option_Report}>
            <img src={institucion} alt="Icon Institution" />
            <button onClick={handle_Download_Institution}>Reporte instituciones</button>
        </div>
      </section>
    </>
  );
};

export default Report_Admin;
