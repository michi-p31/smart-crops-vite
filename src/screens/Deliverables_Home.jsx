import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar_Teacher';
import Deliverables_Styles from '../styles/Deliverables.module.css';
import PropTypes from 'prop-types';


const ID_CLASE = localStorage.getItem("Id_Class"); 
export const Deliverables_Home = () => {
    const [weeks, setWeeks] = useState([]);
    console.log('ID Clase:', ID_CLASE); 

    useEffect(() => {
        const fetchWeeks = async () => {
            if (!ID_CLASE) {
                console.error('ID de clase no está definido');
                return;
            }
            try {
              const response = await axios.get(`https://backend-smartcrops.onrender.com/api/v1/Student_Deliveries/${ID_CLASE}/Weeks`);
              setWeeks(response.data);  
            } catch (error) {
                console.error('Error al obtener las semanas de entregas:', error);
            }
        };

        fetchWeeks();
    }, []);

    return (
        <>
            <NavBar />
            <h1 className={Deliverables_Styles.Tittle}>Entregas</h1>
            {weeks.map((week) => (
                <Week key={week.week_no} Week={`Semana ${week.week_no}`} link={`/ClassRoom_Teacher/${ID_CLASE}/Week/${week.week_no}/Deliverables`} />
            ))}
        </>
    );
};

const Week = ({ Week, link }) => {
    return (
        <div className={Deliverables_Styles.Week}>
            <a href={link}>
                <p className={Deliverables_Styles.Week_Number}>{Week}</p>
                <p className={Deliverables_Styles.Emoji}>📅</p>
            </a>
        </div>
    );
};

Week.propTypes = {
    Week: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
