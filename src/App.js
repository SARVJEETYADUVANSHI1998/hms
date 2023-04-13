import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { AdminDashboard } from './components/Admin/AdminDashboard';
import { AdminNotice } from './components/Admin/AdminNotice';
import { Bookroom } from './components/bookRoom/Bookroom';
import {Complained }from './components/Complained';
import HostelComplaints from './components/Hostel/HostelComplaints';
import HostelDashboard from './components/Hostel/HostelDashboard';
import { Login } from './components/Login';
import { StudentDashboard } from './components/StudentDashboard';
import { StudentNavbar } from './components/StudentNavbar';
import StudentProfile from './components/StudentProfile';
import { StudentSidebar } from './components/StudentSidebar';
import { AdminDatabase } from './components/Admin/AdminDatabase';
import { HostelDatabase } from './components/Hostel/HostelDatabase';
import { AdminHostel } from './components/Admin/AdminHostel';
import { HostelNotice } from './components/Hostel/HostelNotice';

function App() {
  return (
   <Router>
   
   
     <Routes>
         <Route exact path='/' element={<Login/>}/>
         <Route exact path='/student' element={<StudentDashboard/>}/>
         <Route path='/complained' element={<Complained/>}/>
         <Route path='/bookroom' element={<Bookroom/>}/>
         <Route path='/admin' element={<AdminDashboard/>}/>
         <Route exact path='/Hostel' element={<HostelDashboard/>}/>
         <Route exact path='/hostel/database' element={<HostelDatabase/>}/>
         <Route exact path='/hostel/notice' element={<HostelNotice/>}/>
         <Route exact path='/hostel/complaints' element={<HostelComplaints/>}/>
         <Route exact path='/student/Profile' element={<StudentProfile/>}/>
         <Route path='/admin/notice' element={<AdminNotice/>}/>
         <Route path='/admin/hostel' element={<AdminHostel/>}/>
         <Route path='/admin/database' element={<AdminDatabase/>}/>
     </Routes>
    
   </Router>
  );
}

export default App;
