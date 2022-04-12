import './css/App.css';
import { Route, Routes } from "react-router-dom";
import Waiting from './Views/Waiting';
import Endcall from "./Views/Endcall"
import Sidebar from "./Components/Sidebar.js"
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from "react-firebase-hooks/firestore"
// import { auth } from './firebase';


function App() {
  // const [user] = useAuthState(auth)
  return (
    <>
      {/* {user ? <Sidebar /> : <Signin />} */}

      <Routes>
        
        <Route path='/' element={<Sidebar/>} />
        <Route path='/Waiting' element={<Waiting/>} />
        <Route path='/Endcall' element={<Endcall/>} />
        </Routes>
      </>
      );
}

      export default App;
