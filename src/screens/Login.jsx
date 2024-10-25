import LoginStyles from "../styles/Login.module.css";
import NavBar from "../components/menu";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://backend-smartcrops.onrender.com/api/v1/Login", {
                Email: email,
                Password: password,
            });

            console.log("Response from server:", response.data); // Para depuración

            if (response.data.ok) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.rol);
                localStorage.setItem("Id_Class" , response.data.id_class)
                localStorage.setItem("Id_User", response.data.id_user)
                localStorage.setItem("Name_User", response.data.user_name)

                Swal.fire({
                    icon: "success",
                    title: "Inicio de sesión exitoso",
                    text: "¡Bienvenido!",
                }).then(() => {
                    // Redirigir según el rol del usuario
                    if (response.data.rol === "Admin") {
                        navigate("/Administrator");
                    } else if (response.data.rol === "Teacher") {
                        navigate("/ClassRoom_Teacher");
                    } else if (response.data.rol === "Student") {
                        navigate("/ClassRoom_Student");
                    } else {
                        navigate("/Login"); // Ruta por defecto
                    }
                });
            }
        } catch (error) {
            console.log("Login error:", error); // Para depuración
            Swal.fire({
                icon: "error",
                title: "Error de autenticación",
                text: "Usuario o contraseña incorrectos.",
            });
        }
    };

    return (
        <div className={LoginStyles.LoginContainer}>
            <NavBar />
            <form onSubmit={handleLogin} className={LoginStyles.form}>
                <h1>Ingresar!</h1>
                <p>Smartcrops</p>
                <input
                    className={LoginStyles.emails}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={LoginStyles.passwords}
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className={LoginStyles.buttonSend}>
                    Ingresar
                </button>
            </form>
        </div>
    );
};
