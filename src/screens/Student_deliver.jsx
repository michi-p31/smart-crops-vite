import NavBar from '../components/NavBar_Teacher';
import Styles from '../styles/Deliverables.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import {format} from 'date-fns'

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

Student_Info.propTypes = {
    Student_Name: PropTypes.string.isRequired,
};

export const Student_deliver = () => {
    const location = useLocation();
    const { week_no, student_id } = useParams();  
    const ID_CLASS = localStorage.getItem("Id_Class");
    const [delivery, setDelivery] = useState(null);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState("");
    const Id_user = localStorage.getItem("Id_User")

    console.log("Id_user obtenido:", Id_user); 
    useEffect(() => {
        if (!token && location.pathname !== "/login") {
            window.location.href = "/login";
        }
    }, [location]);

    useEffect(() => {
        const fetchDelivery = async () => {
            try {
                const response = await axios.get("https://backend-smartcrops.onrender.com/api/v1/Get_Delivery", {
                    params: {
                        Id_Class: ID_CLASS,
                        Week_no: week_no,
                        Student_id: student_id
                    }
                });
                if (response.data.ok) {
                    setDelivery(response.data.delivery[0]);
                } else {
                    setError(response.data.msg);
                }
            } catch (error) {
                setError("Error al cargar los datos de la entrega.");
                console.error("Error fetching delivery:", error);
            }
        };

        fetchDelivery();
    }, [week_no, student_id, ID_CLASS]);

    const handleCommentSubmit = async () => {
        //  Id_user y comment tengan valores válidos
        if (!Id_user || !comment) {
            alert("Por favor, completa el comentario antes de enviar.");
            return;
        }
    
        try {
            const response = await axios.post("https://backend-smartcrops.onrender.com/api/v1/saveComment", {
                id_student: student_id,
                week_no: week_no,
                comentario: comment,
                id_user: Id_user,
            });

            if (response.data.status === "Success") {
                alert("Comentario guardado exitosamente.");
                setComment("");
            } else {
                alert("Error al guardar el comentario: " + response.data.msg);
            }
        } catch (error) {
            console.error("Error al guardar el comentario:", error);
            alert("Hubo un error al guardar el comentario. Por favor, intenta de nuevo más tarde.");
        }
    };
    

    return (
        <div className={Styles.Deliver}>
            <NavBar />
            <h1 className={Styles.Tittle_Week}>Entregas semana #{week_no}</h1>

            {error && <p className={Styles.error}>{error}</p>}

            {delivery ? (
                <div className={Styles.containerForm}>
                    <form className={Styles.form}>
                        <label className={Styles.label}>
                            <img src={studnet} className={Styles.img_entregas}/> 
                            <h2 className={Styles.subtitulo}> Nombre del estudiante:</h2>
                            <div className={Styles.parrafo}>
                                <p>{delivery.Name_user}</p>
                            </div>
                        </label>
                        <label className={Styles.label}>
                            <img src={matera} className={Styles.img_entregas}/> 
                            <h2>Nombre de la matera:</h2>
                            <div className={Styles.parrafo}>
                                <p>{delivery.Nombre_Matera}</p>
                            </div>
                        </label>
                        <label className={Styles.label}>
                            <img src={fecha_m} className={Styles.img_entregas}/> 
                            <h2>Fecha del Monitoreo:</h2>
                            <div className={Styles.parrafo}>
                            <p>{format(new Date(delivery.Fecha_reporte), 'yyyy-MM-dd')}</p>                            </div>
                        </label>
                        <label className={Styles.label}>
                            <img src={tipo_h} className={Styles.img_entregas}/><h2>Tipo de Huerta:</h2> 
                            <div className={Styles.parrafo}>
                                <p>{delivery.Tipo_Huerta}</p>
                            </div>
                        </label>
                        <label className={Styles.label}>
                            <img src={tem} className={Styles.img_entregas}/> 
                            <h2>Temperatura de la huerta:</h2>
                            <div className={Styles.parrafo}>
                                <p>{delivery.Temperatura}</p>
                            </div>
                        </label>
                        <label className={Styles.label}>
                            <img src={goteo} className={Styles.img_entregas}/>  
                            <h2>Goteo:</h2> 
                            <div className={Styles.parrafo}>
                                <p>{delivery.Goteo}</p>
                            </div>
                        </label>
                        <label className={Styles.label}>
                            <img src={humedad} className={Styles.img_entregas}/> 
                            <h2>Nivel de humedad en la huerta:</h2>
                            <div className={Styles.parrafo}>
                                <p>{delivery.Nivel_humedad}</p>
                            </div>
                        </label>
                        <label className={Styles.label}>
                            <img src={luz} className={Styles.img_entregas}/> 
                            <h2> Nivel de luz:</h2>
                            <div className={Styles.parrafo}>
                                <p>{delivery.Nivel_luz}</p>
                            </div>
                        </label>
                        <label className={Styles.label}>
                            <img src={riego} className={Styles.img_entregas}/>  
                            <h2>Frecuencia de riego:</h2>
                            <div className={Styles.parrafo}>
                                <p>{delivery.Frecuencia_riego}</p>
                            </div>
                        </label>
                        <label className={Styles.label}>
                            <img src={crecimiento} className={Styles.img_entregas}/> 
                            <h2>Observaciones de crecimiento:</h2> 
                            <div className={Styles.parrafo}>
                                <p>{delivery.Observaciones}</p>
                            </div>
                        </label>
                        <label className={Styles.label}>
                            <img src={problemas} className={Styles.img_entregas}/>
                            <h2>Problemas de crecimiento:</h2> 
                            <div className={Styles.parrafo}>
                                <p>{delivery.Problemas}</p>
                            </div>
                        </label>
                        <label className={Styles.label}>
                            <img src={fertilizar} className={Styles.img_entregas}/>
                            <h2>Notas de fertilización:</h2>
                            <div className={Styles.parrafo}>
                                <p>{delivery.Fertilizacion}</p>
                            </div>
                        </label>
                        <h2>Comentarios:</h2>
                        <textarea 
                            type="text" 
                            value={comment}
                            onChange={(e) => setComment(e.target.value)} 
                        />
                    </form>
                    <button 
                        className={Styles.btn_comentario} 
                        onClick={handleCommentSubmit}
                    >
                        Enviar comentario
                    </button>
                </div>
            ) : (
                <p>Cargando datos de entrega...</p>
            )}
        </div>
    );
};
