    import React from 'react'
    //Images
    import plant from "../assets/images/planta.png";
    import institution from "../assets/images/colegio.png";
    import teacher from "../assets/images/maestro.png";
    import classroom from "../assets/images/aula.png";
    import students from "../assets/images/estudiante.png";
    import Home from '../assets/images/home.png'
    //Imports of icons
    import Styles from '../styles/NavBar_Administrator.module.css'
    import { useState } from 'react';
    import { IoMdMenu } from "react-icons/io";
    import { Link } from 'react-router-dom';
    import { GiExitDoor } from "react-icons/gi";

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

        // Función para alternar el estado del menú
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

        return (
            <>
                <header className={Styles.header}>
                    <div className={Styles.container_menu}>
                        <div className={Styles.logo}>
                            <IoMdMenu size={30}
                                className={Styles.iconSize}
                                onClick={toggleMenu}  //  clic para abrir/cerrar el menú
                            />
                            <Link to='/Administrator'><img src={Home} alt="Home Symbol" className={Styles.Home_Image}/></Link>

                        </div>
                        {isMenuOpen && (
                            <div className={Styles.menu}>
                                <nav id="nav">
                                    <ul>
                                        <p>AGREGAR</p>
                                        <li><img src={institution} alt='institution'></img><Link to="/Administrator/Add_institucion">Agregar institucion</Link></li>
                                        <li><img src={teacher} alt='teacher'></img><Link to="/Administrator/Add_teacher">Agregar docente</Link></li>
                                        <li><img src={classroom} alt='classroom'></img><Link to="/Administrador/Add_ClassRoom">Agregar clase</Link></li>
                                        <li><img src={students} alt='Students'></img><Link to="/Administrador/Add_Student">Agregar estudiante</Link></li>
                                        <li><img src={plant} alt="Planter" /><Link to='/Administrator/Add_matera'>Agregar matera</Link></li>
                                        <p></p>
                                        <p>ENLISTAR</p>
                                        <li><img src={institution} alt='institution' /><Link to='/Administrator/Institutions'>Ver instituciones</Link></li>
                                        <li><img src={teacher} alt='teacher' /><Link to='/Administrator/Teachers'>Ver docentes</Link></li>
                                        <li><img src={classroom} alt='classroom' /><Link to='/Administrator/Class'>Ver clases</Link></li>
                                        <li><img src={students} alt='Students' /><Link to='/Administrator/Student'>Ver estudiantes</Link></li>
                                        <li><img src={plant} alt="Planter" /><Link to='/Administrator/Matera'>Ver matera</Link></li>

                                        <li><img src={Home} alt="Home Symbol" /><Link to='/Administrator'>Home</Link></li>

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