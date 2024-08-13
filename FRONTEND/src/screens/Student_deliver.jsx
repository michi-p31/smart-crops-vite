import React from 'react'
import NavBar from '../components/menu'
import Styles from '../styles/Deliverables.module.css'

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
        </div>
    )
}

