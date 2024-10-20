import NavBar from '../components/menu';
import Styles from '../styles/Deliverables.module.css';
import insignia_1 from '../assets/images/insignia_1.png';
import insignia_2 from '../assets/images/insignia_2.png';
import insignia_3 from '../assets/images/insignia_3.png';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Student_Info = ({ Student_Name, deliveryFileName }) => {
    const handleDownload = () => {
        //url del backen para obtener el documento
        const fileUrl = `http://localhost:5000/uploads/${deliveryFileName}`;
        window.open(fileUrl, '_blank');  // abrir el pdf en una nueva pestaña 
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

// definir y recibir los datos 
Student_Info.propTypes = {
    Student_Name: PropTypes.string.isRequired,
    deliveryFileName: PropTypes.string.isRequired,  // nombre del archivo subido 
};
export const Student_deliver = () => {
    const [deliveryFileName, setDeliveryFileName] = useState('');  // para almacenar el nombre del pdf desde el backend 

    useEffect(() => {
        // para obtener detalles del estudiante que envio el pdf
        axios.get('http://localhost:5000/api/v1/Show_Deliveries/41')  // ejemplo del id de estudiante 
            .then(response => {
                setDeliveryFileName(response.data[0].file_name); 
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
