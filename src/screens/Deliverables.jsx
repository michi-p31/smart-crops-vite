import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar_Teacher'
import Styles from '../styles/Deliverables.module.css'
import { useLocation } from 'react-router-dom'

const Function_redireccionar = ()=>{
    window.location.href = '/ClassRoom_Teacher/Deliveravels/Deliver_Student'
}

export const Deliverables = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Si no hay token y el usuario no está ya en la página de login, redirigirlo
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token, location]);
  return (
    <>
        <NavBar />
        <h1 className={Styles.Tittle_Week}>Entregas semana #</h1>
        <Student Student_Name='Andres' date='21/21/21'/>
        <Student Student_Name='Pepe' date='21/21/21'/>
        <Student Student_Name='Jaun' date='21/21/21'/>
        <Student Student_Name='Camilo' date='21/21/21'/>
        <Student Student_Name='Maria' date='21/21/21'/>
    </>
  )
}

const Student = ({Student_Name, date}) =>{
    return(
        <div className={Styles.Student}>
         <div>
                <p>{Student_Name}</p>
                <p>Fecha de entrega: {date}</p>    
         </div>
         <div>
            <button className={Styles.Button_Ver} onClick={Function_redireccionar}>ver</button>
         </div>
        </div>
    )
}
