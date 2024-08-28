import React from 'react'
import NavBar from '../components/menu'
import Styles from '../styles/Deliverables.module.css'
import insignia_1 from '../assets/images/insignia_1.png'
import insignia_2 from '../assets/images/insignia_2.png'
import insignia_3 from '../assets/images/insignia_3.png'

const Student_Info = ({ Student_Name }) => {
    return (
        <div className={Styles.Student_information_deliver}>
            <div className={Styles.Student_Name}>
                <h4>Estudiante:</h4><p>{Student_Name}</p>
            </div>
            <div>
                <button>Descargar entrega</button>
            </div>
        </div>
    )
}

export const Student_deliver = () => {
    return (
        <div className={Styles.Deliver}>
            <NavBar />
            <h1 className={Styles.Tittle_Week}>Entregas semana #</h1>
            <Student_Info Student_Name='Andres' />
            <h4>Comentarios:</h4>
            <textarea type="text" />
            <h4>Insignias:</h4>
            <div className={Styles.Insignias_section}>
                <img src={insignia_1} alt="Insignia 1" />
                <img src={insignia_2} alt="Insignia 2" />
                <img src={insignia_3} alt="Insignia 3" />
            </div>
        </div>
    )
}

