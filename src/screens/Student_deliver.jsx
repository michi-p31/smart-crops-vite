import NavBar from '../components/NavBar_Student';
import Styles from '../styles/Deliverables.module.css';
import insignia_1 from '../assets/images/insignia_1.png';
import insignia_2 from '../assets/images/insignia_2.png';
import insignia_3 from '../assets/images/insignia_3.png';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom'; 

const token = localStorage.getItem("token");
const ID_CLASE  = localStorage.getItem("Id_Class"); 

const Student_Info = ({ Student_Name, deliveryFileName }) => {
    const handleDownload = () => {
        // Codifica el nombre del archivo para asegurar que los espacios y otros caracteres sean válidos en la URL
        const fileUrl = `https://backend-smartcrops.onrender.com/uploads/${encodeURIComponent(deliveryFileName)}`;
    
        // Crear un enlace temporal para descargar el archivo
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = deliveryFileName; // Asignar el nombre del archivo para la descarga
        document.body.appendChild(link);
        link.click(); // Simular clic para iniciar la descarga
        document.body.removeChild(link); // Limpiar el enlace temporal
    };
    
    
    

    return (
        <div className={Styles.Student_information_deliver}>
            <div className={Styles.Student_Name}>
                <h4>Estudiante:</h4><p>{Student_Name}</p>
            </div>
            <div>
                <button onClick={handleDownload}>Descargar entrega</button>
            </div>
        </div>
    );
};

// Definir y recibir los datos
Student_Info.propTypes = {
    Student_Name: PropTypes.string.isRequired,
    deliveryFileName: PropTypes.string.isRequired,
};

export const Student_deliver = () => {
    const location = useLocation();
    const [deliveryFileName, setDeliveryFileName] = useState('');
    const [studentName, setStudentName] = useState('');
    const { week_no, student_id } = useParams();  

    useEffect(() => {
        if (!token && location.pathname !== "/login") {
            window.location.href = "/login";
        }
    }, [location]);

    useEffect(() => {
        // Obtener entregas del estudiante
        const fetchDelivery = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/Show_Deliveries/${ID_CLASE}/${week_no}/${student_id}`);
                const deliveries = response.data;

                // Filtrar la entrega para encontrar la correcta
                const deliveryData = deliveries.find(delivery =>
                    delivery.student_id === parseInt(student_id) && delivery.week_no === parseInt(week_no)
                );

                if (deliveryData) {
                    setDeliveryFileName(deliveryData.file_name);
                    setStudentName(deliveryData.Name_user || '');  // asegurar que lae propiedad exista
                } else {
                    setStudentName(''); // se restable si no hay datos 
                }
            } catch (error) {
                console.error('Error al obtener los datos de la entrega:', error);
            }
        };

        fetchDelivery();
    }, [week_no, student_id]);

    return (
        <div className={Styles.Deliver}>
            <NavBar />
            <h1 className={Styles.Tittle_Week}>Entregas semana #{week_no}</h1>
            {studentName ? (
                <Student_Info Student_Name={studentName} deliveryFileName={deliveryFileName} />
            ) : (
                <p>No se encontraron entregas para este estudiante en esta semana.</p> 
            )}
            <h4>Comentarios:</h4>
            <textarea type="text" />
            <h4>Insignias:</h4>
            <div className={Styles.Insignias_section}>
                <img src={insignia_1} alt="Insignia 1" />
                <img src={insignia_2} alt="Insignia 2" />
                <img src={insignia_3} alt="Insignia 3" />
            </div>
        </div>
    );
};
