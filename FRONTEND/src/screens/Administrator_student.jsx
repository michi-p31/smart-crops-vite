
import styles from '../styles/Administrator_student.module.css';

const Administrator_student = () => {
  return (
    <>
      <h1 className={styles.Titulo}>Estudiante</h1>
      <div className={styles.Student_space}>
        <div className={styles.Student_info}>
          <p>Codigo de la estudiante: ###</p>
          <p>Nombre de la estudiante: ###</p>
        </div>
        <button className={styles.Button_edit}>Editar</button>
      </div>
    </>
  );
};

export default Administrator_student;
