import './App.css';
import { Switch, Route, Routes } from "react-router-dom";
import ResponsiveDrawer from "./Components/Sidebar.js"
import Waiting from './Views/Waiting';
import Endcall from "./Views/Endcall"
import Sidebar from "./Components/Sidebar.js"
function App() {
  return (
    <>
        <Routes>
        <Route path='/' element={<Sidebar/>} />
        <Route path='/Waiting' element={<Waiting/>} />
        <Route path='/Endcall' element={<Endcall/>} />
        </Routes>
    </>
  );
}

export default App;
