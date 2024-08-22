import Styles from '../styles/Add_institution.module.css';

const Add_institucion = () => {
  return (
       <>
        <div className={Styles.Container}>
            <h1>¡AGREGAR INSTITUCION!</h1>
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
  );
};

export default Add_institucion;
