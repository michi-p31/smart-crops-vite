import React from 'react'
import Styles from '../styles/Add_Student.module.css'
import Navbar from '../components/menu'
export const Add_Student = () => {
    return (
        <>
            <Navbar />
            <h1 className={Styles.titulo}>¡AGREGAR ESTUDIANTE!</h1>
            <div className={Styles.formContainer}>
                <form className={Styles.formGroup}>
                    <div className={Styles.Space_data}>
                        <label className={Styles.contenido}>Codigo de la institucion:</label>
                        <select className={Styles.Data} id=""></select>
                    </div>
                    <div className={Styles.Space_data}>
                        <label className={Styles.contenido}>Codigo del docente:</label>
                        <select className={Styles.Data} id=""></select>
                    </div>
                    <div className={Styles.Space_data}>
                        <label className={Styles.contenido}>Correo electronico:</label>
                        <input type="text" className={Styles.textInput} />
                    </div>
                    <div className={Styles.Space_data}>
                        <label className={Styles.contenido}>Contraseña:</label>
                        <input type="text" className={Styles.textInput} />
                    </div>
                    <button className={Styles.Add_Button}>Agregar</button>
                </form>
            </div>
        </>
    )
}
