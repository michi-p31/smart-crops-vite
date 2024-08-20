import React from 'react'
import Styles from '../styles/Add_ClassRoom.module.css'
import Navbar from '../components/menu'
export const Add_ClassRoom = () => {
  return (
        <>
        <div className={Styles.Container}>
            <Navbar/>
            <h1>AGREGAR CLASE!</h1>
            <form className={Styles.Add_ClassRoom} action="">
                <div className={Styles.Information}>
                    <p>Codigo de la institucion</p>
                    <select name="" id=""></select>
                </div>
                <div className={Styles.Information}>
                    <p>Codigo del docente</p>
                    <select name="" id=""></select>
                </div>
                <div className={Styles.Information}>
                    <p>Codigo de la clase</p>
                    <select name="" id=""></select>
                </div>
                <button className={Styles.Add_Button}>Agregar</button>
            </form>
        </div>
        </>
    )
}
