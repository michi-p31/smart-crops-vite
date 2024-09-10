import Styles from '../styles/Add_teacher.module.css';
import NavBar from '../components/NavBar_Administrator'

const Add_institucion = () => {
  return (
    <>
    <div className={Styles.Container}>
        <NavBar/>
        <h1>¡AGREGAR MAESTRO!</h1>
        <form className={Styles.Add_Teacher} action="">
            <div className={Styles.Information}>
                <p>Codigo de la institucion:</p>
                <select name="" id=""></select>
            </div>
            <div className={Styles.Information}>
                <p>Codigo del docente:</p>
                <input type="text" name='' />
            </div>
            <div className={Styles.Information}>
                <p>Correo:</p>
                <input type="text" name=''/>
            </div>
            <div className={Styles.Information}>
                <p>Contraseña:</p>
                <input type="text" name='' />
            </div>
            <button className={Styles.Add_Button}>Agregar</button>
        </form>
    </div>
    </>
  );
};

export default Add_institucion;
