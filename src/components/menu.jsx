import { useState } from 'react';
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
                <li><img src={cultivo}></img><a href="/categorias">Cultivos</a></li>
                <li><img src={aula}></img><a href="#">Aula virtual</a></li>
                <li><img src={abonos}></img><a href="#">Abonos Orgánicos</a></li>
                <li><img src={medicinal}></img><a href="#">Usos Medicinales</a></li>
              </ul>
            </nav>
          </div>
        )}
        <div className={stylesMenu.login}>
          <VscAccount size={20} color="black"/> 
          <a href="#">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Menu;
