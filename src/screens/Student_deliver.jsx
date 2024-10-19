import NavBar from '../components/menu';
import Styles from '../styles/Deliverables.module.css';
import insignia_1 from '../assets/images/insignia_1.png';
import insignia_2 from '../assets/images/insignia_2.png';
import insignia_3 from '../assets/images/insignia_3.png';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Student_Info = ({ Student_Name, deliveryFileName }) => {
    // Construimos la URL completa del archivo PDF
    const handleDownload = () => {
        const fileUrl = `http://localhost:5000/uploads/${deliveryFileName}`;
        window.open(fileUrl, '_blank');  // Abre el archivo en una nueva pestaña o lo descarga
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

Student_Info.propTypes = {
    Student_Name: PropTypes.string.isRequired,
    deliveryFileName: PropTypes.string.isRequired,  // Este prop contiene el nombre del archivo
};

export const Student_deliver = () => {
    const [deliveryFileName, setDeliveryFileName] = useState('');

    useEffect(() => {
        // Llamada a la API para obtener el nombre del archivo para el estudiante
        axios.get('http://localhost:5000/api/v1/Student_Deliveries/41')
            .then(response => {
                setDeliveryFileName(response.data.file_name);
            })
            .catch(error => {
                console.error('Error al obtener los datos de la entrega:', error);
            });
    }, []);

    return (
        <div className={Styles.Deliver}>
            <NavBar />
            <h1 className={Styles.Tittle_Week}>Entregas semana #</h1>
            <Student_Info Student_Name='Andres' deliveryFileName={deliveryFileName} />
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
