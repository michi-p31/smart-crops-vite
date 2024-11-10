import NavBar from '../components/NavBar_Teacher'
import Styles from '../styles/Teacher_Reports.module.css'
import axios from 'axios'
import { useState } from 'react'

const Reports_Teacher = () => {
    const Id_Class = localStorage.getItem('Id_Class');
    const [loading, setLoading] = useState(false);

    const handle_Download_Delivery = async (week_no) => {
        setLoading(true);
        try {
            const response = await axios.post("https://backend-smartcrops.onrender.com/api/v1/Report_Delivery", {
                Id_Class,
                Week_no: week_no
            }, { responseType: "blob" }); // Importante para recibir un blob

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `Delivery_report_week_${week_no}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error("Error descargando PDF:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <NavBar />
            <section className={Styles.Reports}>
                <h1>REPORTES SEMANALES</h1>
                <p>Descargue aquí los reportes por semana de los formularios enviados</p>
                <div className={Styles.content}>
                    <img src="https://media.tenor.com/cHVSSkz2qvUAAAAM/education-students.gif" alt="Gif Reports" />
                    <div className={Styles.Buttons}>
                        {[1, 2, 3, 4].map((week) => (
                            <button 
                                key={week} 
                                onClick={() => handle_Download_Delivery(week)}
                                disabled={loading}
                            >
                                {`Semana ${week}`}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reports_Teacher;
