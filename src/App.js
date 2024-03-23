import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/Notifications";
//import Profile from './pages/Profile';
import Events from './pages/Events';
import Pr from './pages/Pr';
import Attendance from './pages/Attendance';
import Audi from './pages/Audi';
import {Routes,Route} from "react-router-dom";
import Settings from "./pages/Settings";
import About from "./pages/About";
import AlumniProfiles from "./pages/AlumniProfile";
import Alumnisignup from "./pages/Alumnisignup";
import Alumnisignin from "./pages/Alumnisignin";
import Upevents from "./pages/Upevents";
import FAQ from "./pages/FAQ's";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="bg-error-200">    
     
      <Routes>
        <Route element={<Login/>}path="/Login"></Route>
        <Route element={<Signup/>}path="/"></Route>
        <Route element={<Notifications/>}path="/Notifications"></Route>
        {/* <Route element={<Profile/>}path="/Profile"></Route> */}
         <Route element={<AlumniProfiles/>}path="/AlumniProfile"></Route>
        <Route element={<Events/>}path="/Events"></Route>
        <Route element={<Pr/>}path="/Pr"></Route>
        <Route element={<Attendance/>}path="/Attendance"></Route>
        <Route element={<Audi/>}path="/Audi"></Route>
        <Route element={<About/>}path="/About"></Route>
        <Route element={<Settings/>}path="/Settings"></Route>
        <Route element={<Alumnisignin/>}path="/Alumnisignin"></Route>
        <Route element={<Alumnisignup/>}path="/Alumnisignup"></Route>
        <Route element={<Dashboard/>}path="/Dashboard"></Route>
        <Route element={<Upevents/>}path="/Upevents"></Route>
        <Route element={<FAQ/>}path="/FAQ's"></Route>
        <Route element={<Profile/>}path="/Profile"></Route>
      </Routes>
    </div>
  );
}
export default App;