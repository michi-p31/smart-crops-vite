import React from 'react'
//Images
import plant from "../assets/images/planta.png";
import form from "../assets/images/formulario.png";
import comment from "../assets/images/comentario.png";
import Home from '../assets/images/teacher_icon.png'
//Imports of icons
import Styles from '../styles/NavBar_Administrator.module.css'
import { useState, useEffect, useRef } from 'react';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GiExitDoor } from "react-icons/gi";

const ID_CLASE = localStorage.getItem("Id_Class");


const handleLogout = () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("role");
    localStorage.removeItem("Id_Class");
    localStorage.removeItem("Id_User");
    localStorage.removeItem("Name_User")
    window.location.href = "/login";  
};
  

const NavBar_Administrator = () => {
    //  visibilidad del menú
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false); // parra cerrar el menu al momento de hacer click fuera de el
        }
      };
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);//limpiar evento al dar click

    return (
        <>
            <header className={Styles.header}>
                <div className={Styles.container_menu}>
                    <div className={Styles.logo}>
                        <IoMdMenu size={30}
                            className={Styles.iconSize}
                            onClick={toggleMenu}  //  clic para abrir/cerrar el menú
                        />
                        <Link to='/ClassRoom_Teacher'><img src={Home} alt="Home Symbol" className={Styles.Home_Image}/></Link>

                    </div>
                    {isMenuOpen && (
                        <div className={Styles.menu} ref={menuRef} >
                            <nav id="nav">
                                <ul>
                                    <li><img src={plant} alt='Monitoring'></img><Link to="/Monitoring_Teacher">Monitoreo</Link></li>
                                    <li><img src={comment} alt='classroom'></img><a href={`/ClassRoom_Teacher/${ID_CLASE}/Students`}>Estudiantes</a></li>
                                </ul>
                            </nav>
                        </div>
                    )}
                    <div className={Styles.login}>
                        <GiExitDoor size={20} className={Styles.iconLogin} />
                        <Link onClick={handleLogout}>Log out</Link>
                    </div>
                </div>
            </header>
        </>
    )
}


export default NavBar_Administrator;