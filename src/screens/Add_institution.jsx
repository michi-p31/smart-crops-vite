import Styles from '../styles/Add_institution.module.css';
import NavBar from '../components/NavBar_Administrator'

const Add_institucion = () => {
  return (
       <>
        <div className={Styles.Container}>
            <NavBar/>
            <h1>¡AGREGAR INSTITUCION!</h1>
            <form className={Styles.Add_ClassRoom} action="">
                <div className={Styles.Information}>
                    <p>Codigo de la institucion</p>
                    <input type="text" name="codigoInstitucion"  />
                </div>
                <div className={Styles.Information}>
                    <p>Nombre de la Institucion</p>
                    <input type="text" name="nombreInstitucion" />
                </div>
                <button className={Styles.Add_Button}>Agregar</button>
            </form>
        </div>
        </>
  );
};

export default Add_institucion;
