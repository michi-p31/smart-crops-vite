import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu.jsx';
import Main from './screens/Main.jsx';
import Categorias from "./screens/Categorias.jsx";  
import Cultivos from "./components/cultivos.jsx";
import Informacion_plant from "./components/Informacion.jsx";

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/:categoria" element={<Cultivos />} />
        <Route path="/categorias/:categoria/:nombreFruta" element={<Informacion_plant />} />
      </Routes>
    </Router>
  );
};

export default App;
