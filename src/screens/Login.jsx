import React from 'react'
import LoginStyles from '../styles/Login.module.css'
import NavBar from '../components/menu'
export const Login = () => {
  return (
    <div className={LoginStyles.LoginContainer}>
      <NavBar />
      <form action="" className={LoginStyles.form}>
        <h1>Ingresar!</h1>
        <p>Smartcrops</p>
        <input
          type="User"
          placeholder="Usuario"
          id="User"
          className={LoginStyles.user}
        />
        <input
          type="password"
          id='password'
          placeholder="Contraseña"
          className={LoginStyles.password}
        />
        <button className={LoginStyles.buttonSend}>
          Ingresar
        </button>
      </form>
    </div>
  );
};
