import { useEffect } from 'react';
import NavBar from '../components/NavBar_Teacher';
import Deliverables_Styles from '../styles/Deliverables.module.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Deliverables_Home = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const ID_CLASS = localStorage.getItem("Id_Class");  // Obtener ID_CLASS de localStorage

  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);

  return (
    <>
      <NavBar />
      <h1 className={Deliverables_Styles.Tittle}>Entregas</h1>
      {/* Pasar el ID_CLASS dinámicamente a cada link */}
      <Week Week='Semana 1' link={`/ClassRoom_Teacher/${ID_CLASS}/Week/Deliveravels`} />
      <Week Week='Semana 2' link={`/ClassRoom_Teacher/${ID_CLASS}/Week/Deliveravels`} />
      <Week Week='Semana 3' link={`/ClassRoom_Teacher/${ID_CLASS}/Week/Deliveravels`} />
      <Week Week='Semana 4' link={`/ClassRoom_Teacher/${ID_CLASS}/Week/Deliveravels`} />
    </>
  );
};

const Week = ({ Week, link }) => {
  return (
    <div className={Deliverables_Styles.Week}>
      <Link to={link}>
        <p className={Deliverables_Styles.Week_Number}>{Week}</p>
        <p className={Deliverables_Styles.Emoji}>📅</p>
      </Link>
    </div>
  );
};

Week.propTypes = {
  Week: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired, 
};
