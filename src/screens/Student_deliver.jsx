import NavBar from '../components/NavBar_Student';
import Styles from '../styles/Deliverables.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'; 
import studnet from '../assets/images/students.png';
import matera from '../assets/images/piso_termico.png';
import fecha_m from '../assets/images/cosechar.png';
import tipo_h from '../assets/images/cientifico.png';
import tem from '../assets/images/tem.png';
import goteo from '../assets/images/estado.png';
import humedad from '../assets/images/hum.png';
import luz from '../assets/images/solar.png';
import riego from '../assets/images/riego.png';
import crecimiento from '../assets/images/estudiante.png';
import problemas from '../assets/images/germina.png';
import fertilizar from '../assets/images/abono.png';
const token = localStorage.getItem("token");
const Student_Info = ({ Student_Name }) => {
    return (
        <div className={Styles.Student_information_deliver}>
            <h4>Estudiante:</h4><p>{Student_Name}</p>
        </div>
    );
};

// Definir y recibir los datos
Student_Info.propTypes = {
    Student_Name: PropTypes.string.isRequired,
};

export const Student_deliver = () => {
    const location = useLocation();
    const { week_no, student_id } = useParams();  

    useEffect(() => {
        if (!token && location.pathname !== "/login") {
            window.location.href = "/login";
        }
    }, [location]);

    useEffect(() => {
        const fetchDelivery = async () => {
            
        };

        fetchDelivery();
    }, [week_no, student_id]);

    return (
        <div className={Styles.Deliver}>
            <NavBar />

            <h1 className={Styles.Tittle_Week}>Entregas semana #{week_no}</h1>
            <div className={Styles.containerForm}>
        <form className={Styles.form}>
            <label className={Styles.label}>
              <img src={studnet} className={Styles.img_entregas}/> <h2 className={Styles.subtitulo}> Nombre del estudiante:</h2>
                <div className={Styles.parrafo}>
                  <p>Pepito</p>
                </div>
            </label>
            <label className={Styles.label}>
            <img src={matera} className={Styles.img_entregas}/> <h2>Nombre de la matera:</h2>
                <div className={Styles.parrafo}>
                   <p>naturales</p> 
                </div>
            </label>
            <label className={Styles.label}>
            <img src={fecha_m} className={Styles.img_entregas}/> <h2>Fecha del Monitoreo:</h2>
                <div className={Styles.parrafo}>
                    <p>22</p>
                </div>
            </label>
            <label className={Styles.label}>
            <img src={tipo_h} className={Styles.img_entregas}/><h2>Tipo de Huerta:</h2> 
                <div className={Styles.parrafo}>
                    <p>Frutales</p>
                </div>
            </label>
            <label className={Styles.label}>
            <img src={tem} className={Styles.img_entregas}/> <h2>Temperatura de la huerta:</h2>
                <div className={Styles.parrafo}>
                    <p>36°</p>
                </div>
            </label>
            <label className={Styles.label}>
            <img src={goteo} className={Styles.img_entregas}/>  <h2>Goteo:</h2> 
                <div className={Styles.parrafo}>
                   <p>2l</p>
                </div>
            </label>
            <label className={Styles.label}>
            <img src={humedad} className={Styles.img_entregas}/> <h2>Nivel de humedad en la huerta:</h2>
                <div className={Styles.parrafo}>
                  <p>2l</p>
                </div>
            </label>
            <label className={Styles.label}>
            <img src={luz} className={Styles.img_entregas}/> <h2> Nivel de luz:</h2>
                <div className={Styles.parrafo}>
                    <p>2l</p>
                </div>
            </label>
            <label className={Styles.label}>
            <img src={riego} className={Styles.img_entregas}/>  <h2>Frecuencia de riego:</h2>
                <div className={Styles.parrafo}>
                    <p>2ml</p>
                </div>
            </label>
            <label className={Styles.label}>
            <img src={crecimiento} className={Styles.img_entregas}/> <h2>Observaciones de crecimiento:</h2> 
                <div className={Styles.parrafo}>
                    <p>2 ml</p>
                </div>
            </label>
            <label className={Styles.label}>
            <img src={problemas} className={Styles.img_entregas}/><h2>Problemas de crecimiento:</h2> 
                <div className={Styles.parrafo}>
                   <p>pocos</p>
                </div>
            </label>
            <label className={Styles.label}>
            <img src={fertilizar} className={Styles.img_entregas}/><h2>Notas de fertilización:</h2>
                <div className={Styles.parrafo}>
                    <p>ninguna</p>
                </div>
            </label>
            <h2>Comentarios:</h2>
            <textarea type="text" />
            </form>
            <button className={Styles.btn_comentario}>Enviar comentario </button>
            </div>
        </div>
    );
};
