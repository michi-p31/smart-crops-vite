import React from "react";
import Styles from "../styles/Administrator_Teachers.module.css";
import NavBar from "../components/NavBar_Administrator";
import axios from "axios";
import { useEffect, useState } from "react";

export const Administrator_teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/getTeachers");
        setTeachers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <h1 className={Styles.Titulo}>MAESTROS</h1>
      {teachers.map((teacher) => (
        <div className={Styles.Teacher_space} key={teacher.Id_user}>
          <div className={Styles.Teacher_info}>
            <p>Nombre del maestro: {teacher.Name_user}</p>
            <p>Email del maestro: {teacher.Email}</p>
          </div>
          <div className={Styles.Section_Buttons}>
          <button className={Styles.Button_edit}>Editar</button>
          <button className={Styles.Button_edit}>Eliminar</button>
          </div>
        </div>
      ))}
    </>
  );
};
