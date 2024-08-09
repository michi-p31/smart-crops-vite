import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './screens/Main.jsx';
import Categorias from "./screens/Categorias.jsx";  
import Cultivos from "./components/cultivos.jsx";
import Informacion_plant from "./components/Informacion.jsx";
import Student from "./screens/Classroom._student.jsx";
import {Login} from './screens/Login.jsx'
import {Monitoring} from './screens/Monitoring.jsx'
import {About_us} from './screens/About_us.jsx'
import {Deliverables} from './screens/Deliverables.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/:categoria" element={<Cultivos />} />
        <Route path="/categorias/:categoria/:nombreFruta" element={<Informacion_plant />} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/ClassRoom_Student' element={<Student/>}/>
        <Route path='/ClassRoom/Matera' element={<Monitoring/>}/>
        <Route path='/About_us' element={<About_us/>}/>
        <Route path='/ClassRoom/Entregas' element={<Deliverables/>}/>
      </Routes>
    </Router>
  );
};

export default App;
