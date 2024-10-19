import React, { useState, useEffect } from 'react';
import Styles from '../styles/Administrator_institution.module.css';
import NavBar from '../components/NavBar_Administrator';
import axios from 'axios';

export const Administrator_list_institutions = () => {
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/getInstitutions');
        setInstitutions(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <h1 className={Styles.Titulo}>INSTITUCIONES</h1>
      {institutions.map((institution) => (
        <div key={institution.Id_Institution} className={Styles.Institution_space}>
          <div className={Styles.Institution_info}>
            <p>Codigo de la institucion: {institution.Id_Institution}</p>
            <p>Nombre de la institucion: {institution.Name_institution}</p>
          </div>
          <button className={Styles.Button_edit}>Editar</button>
        </div>
      ))}
    </>
  );
};
