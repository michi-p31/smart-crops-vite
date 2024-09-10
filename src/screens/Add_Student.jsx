
import Styles from '../styles/Add_Student.module.css'
import NavBar from '../components/NavBar_Administrator'

export const Add_Student = () => {
    return (
        <>
            <NavBar/>
            <h1 className={Styles.titulo}>¡AGREGAR ESTUDIANTE!</h1>
            <div className={Styles.formContainer}>
                <form className={Styles.formGroup}>
                    <div className={Styles.Space_data}>
                        <p className={Styles.contenido}>Codigo de la institucion:</p>
                        <select className={Styles.Data} id=""></select>
                    </div>
                    <div className={Styles.Space_data}>
                        <label className={Styles.contenido}>Codigo del docente:</label>
                        <select className={Styles.Data} id=""></select>
                    </div>
                    <div className={Styles.Space_data}>
                        <label className={Styles.contenido}>Codigo Estudiante: </label>
                        <input type="text" className={Styles.textInput} />
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
