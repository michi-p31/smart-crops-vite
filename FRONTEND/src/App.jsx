import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './screens/Main.jsx';
import Categorias from "./screens/Categorias.jsx";  
import Cultivos from "./components/cultivos.jsx";
import Informacion_plant from "./components/Informacion.jsx";
import Student from "./screens/Classroom._student.jsx";
import Teacher from "./screens/Classroom_teacher.jsx";
import Report from "./screens/Report_student.jsx";
import StudentDeliveries from "./components/Deliveries_student";
import Upload_delivery from './screens/Upload_delivery.jsx';
import {Login} from './screens/Login.jsx'
import {Monitoring} from './screens/Monitoring.jsx'
import {About_us} from './screens/About_us.jsx'
import {Deliverables_Home} from './screens/Deliverables_Home.jsx'
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
        <Route path='/ClassRoom_Student/Report' element={<Report/>}/>
        <Route path='/ClassRoom_Student/Deliveries' element={<StudentDeliveries/>}/>
        <Route path='/ClassRoom_Student/Deliveries/Upload_deliveries' element={<Upload_delivery/>}/>
        <Route path='/ClassRoom_Teacher' element={<Teacher/>}/>
        <Route path='/ClassRoom/Monitoring' element={<Monitoring/>}/>
        <Route path='/About_us' element={<About_us/>}/>
        <Route path='/ClassRoom/Entregas' element={<Deliverables_Home/>}/>
        <Route path='/Prueba' element={<Deliverables/>}/>
      </Routes>
    </Router>
  );
};

export default App;
