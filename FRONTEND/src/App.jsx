import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './screens/Main.jsx';
import Categorias from "./screens/Categorias.jsx";  
import Cultivos from "./components/cultivos.jsx";
import Informacion_plant from "./components/Informacion.jsx";
import Student from "./screens/Classroom._student.jsx";
import Teacher from "./screens/Classroom_teacher.jsx";
import Report from "./screens/Report_student.jsx";
import {Login} from './screens/Login.jsx'
import {Monitoring} from './screens/Monitoring.jsx'
import {About_us} from './screens/About_us.jsx'

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
        <Route path='/ClassRoom_Student/Report' element={<Report/>}/>
        <Route path='/ClassRoom_Teacher' element={<Teacher/>}/>
        <Route path='/ClassRoom/Monitoring' element={<Monitoring/>}/>
        <Route path='/About_us' element={<About_us/>}/>
      </Routes>
    </Router>
  );
};

export default App;
