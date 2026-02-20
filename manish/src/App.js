import logo from './logo.svg';
import './App.css';
import Register from './reagister/reagister';
import Login from './login/login';
import { Routes,Route } from 'react-router-dom';
import PrivateRoute from './privateroutes/privateRoutes';
import Edit_Profile from './EDIT_PROFILE/Edit_Profile';
import AddIdentity from './addidentity/add identity';
function App() {
  return (
   <>

   <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/' element={<Login/>}/>
     {/* <Route element={<PrivateRoute  />}> */}
      <Route path="/edit" element={<Edit_Profile />} />
      <Route path="/addidentity" element={<AddIdentity />} />
     {/* </Route> */}
   </Routes>
   
   
   </>
  );
}

export default App;
