import React from 'react'
import Styles from '../styles/Administrator_Teachers.module.css'

export const Administrator_teachers = () => {
    return (
        <>
            <h1 className={Styles.Titulo}>MAESTROS</h1>

            <div className={Styles.Teacher_space}>
                <div className={Styles.Teacher_info}>
                    <p>Codigo del maestro: ###</p>
                    <p>Nombre del maestro: ###</p>
                </div>
                <button className={Styles.Button_edit}>Editar</button>
            </div>

            <div className={Styles.Teacher_space}>
                <div className={Styles.Teacher_info}>
                    <p>Codigo del maestro: ###</p>
                    <p>Nombre del maestro: ###</p>
                </div>
                <button className={Styles.Button_edit}>Editar</button>
            </div>
        </>
    )
}
