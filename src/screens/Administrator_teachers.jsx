import React from 'react'
import Styles from '../styles/Administrator_Teachers.module.css'
import NavBar from '../components/NavBar_Administrator'

export const Administrator_teachers = () => {
    return (
        <>
            <NavBar/>
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
