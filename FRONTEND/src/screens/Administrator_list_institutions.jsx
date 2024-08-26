import React from 'react'
import Styles from '../styles/Administrator_institution.module.css'
import NavBar from '../components/NavBar_Administrator'

export const Administrator_list_institutions = () => {
  return (
    <>
        <NavBar/>
        <h1 className={Styles.Titulo}>INSTITUCIONES</h1>

        <div className={Styles.Institution_space}>
            <div className={Styles.Institution_info}>
                <p>Codigo de la institucion: ###</p>
                <p>Nombre de la institucion: ###</p>
            </div>
            <button className={Styles.Button_edit}>Editar</button>
        </div>

        <div className={Styles.Institution_space}>
            <div className={Styles.Institution_info}>
                <p>Codigo de la institucion: ###</p>
                <p>Nombre de la institucion: ###</p>
            </div>
            <button className={Styles.Button_edit}>Editar</button>
        </div>
    </>
  )
}
