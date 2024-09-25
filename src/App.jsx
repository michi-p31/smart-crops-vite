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
import Administrator from "./screens/Administrator.jsx";
import Add_institucion from "./screens/Add_institution.jsx";
import Add_teacher from "./screens/Add_teacher.jsx";
import Abonos from "./screens/Fertilizers.jsx";
import Medicinal from "./screens/Medicinal.jsx";
import Administrator_class from './screens/Administrator_class.jsx';
import Administrator_student from './screens/Administrator_student.jsx';
import Administrator_matera from './screens/Administrator_matera.jsx';
import AbonoDetail from "./components/info_fertilizers.jsx";
import MedicinalDetail from "./components/info_medicinal.jsx";
import {Add_ClassRoom} from './screens/Add_ClassRoom.jsx'
import {Add_planter} from './screens/Add_matera.jsx';
import {Login} from './screens/Login.jsx'
import {Monitoring} from './screens/Monitoring.jsx'
import {About_us} from './screens/About_us.jsx'
import {Deliverables_Home} from './screens/Deliverables_Home.jsx'
import {Deliverables} from './screens/Deliverables.jsx'
import {Student_deliver} from './screens/Student_deliver.jsx'
import {ClassRoom_Teacher_Students} from './screens/ClassRoom_Teacher_Students.jsx'
import {Add_Student} from './screens/Add_Student.jsx'
import {Administrator_list_institutions} from './screens/Administrator_list_institutions.jsx'
import {Administrator_teachers} from './screens/Administrator_teachers.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path='/Abonos' element={<Abonos/>}/>
        <Route path="/Abonos/:nombreAbono" element={<AbonoDetail />} />
        <Route path="/Medicinal/:nombreMedicinal" element={<MedicinalDetail />} />
        <Route path='/Medicinal' element={<Medicinal/>}/>
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
        <Route path='/ClassRoom_Teacher/Deliveravels/Week' element={<Deliverables/>}/>
        <Route path='/ClassRoom_Teacher/Deliveravels/Deliver_Student' element={<Student_deliver/>}/> 
        <Route path='/ClassRoom_Teacher/Students' element={<ClassRoom_Teacher_Students/>}/>
        <Route path='/Administrator' element={<Administrator/>}/>
        <Route path='/Administrator/Add_matera' element={<Add_planter/>}/>
        <Route path='/Administrator/Add_institucion' element={<Add_institucion/>}/>
        <Route path='/Administrator/Add_teacher' element={<Add_teacher/>}/>
        <Route path='/Administrador/Add_ClassRoom' element={<Add_ClassRoom/>}/>
        <Route path='/Administrador/Add_Student' element={<Add_Student/>}/>
        <Route path='/Administrator/Institutions' element={<Administrator_list_institutions/>}/>
        <Route path='/Administrator/Teachers' element={<Administrator_teachers/>}/>
        <Route path='/Administrator/Class' element={<Administrator_class/>}/>
        <Route path='/Administrator/Student' element={<Administrator_student/>}/>
        <Route path='/Administrator/Matera' element={<Administrator_matera/>}/>
      </Routes>
    </Router>
  );
};
                        //Arreglar las rutas
export default App;
