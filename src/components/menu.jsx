import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import stylesMenu from '../styles/Menu.module.css';
import logo from "../assets/images/logo_planta.png";
import medicinal from "../assets/images/medicinal.png";
import cultivo from "../assets/images/cultivo.png";
import aula from "../assets/images/aula.png";
import abonos from "../assets/images/abono.png"
const Menu = () => {
  //  visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={stylesMenu.header}>
      <div className={stylesMenu.container_menu}>
        <div className={stylesMenu.logo}>
          <IoMdMenu size={30} 
            className={stylesMenu.iconSize} 
            onClick={toggleMenu}  //  clic para abrir/cerrar el menú
          />
          <img src={logo} alt="Logo Planta" />
        </div>
        {/* Mostrar el menú solo si está abierto */}
        {isMenuOpen && (
          <div className={stylesMenu.menu}>
            <nav id="nav">
              <ul>
                <li><img src={cultivo}></img><Link to="/categorias">Cultivos</Link></li>
                <li><img src={aula}></img><Link to="#">Aula virtual</Link></li>
                <li><img src={abonos}></img><Link to="#">Abonos Orgánicos</Link></li>
                <li><img src={medicinal}></img><Link to="#">Usos Medicinales</Link></li>
              </ul>
            </nav>
          </div>
        )}
        <div className={stylesMenu.login}>
          <VscAccount size={20} className={stylesMenu.iconLogin}/> 
          <Link to="Login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Menu;
