import Test2 from './user/containers/Test2';
import MuiDrower from './user/containers/MuiDrower';
import logo from './logo.svg';
import './App.css';
import ADoctor from './admin/components/ADoctor'
import ADrpartment from './admin/components/ADrpartment'


import Panel from './admin/components/Panel'
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes'

function App() {
  return (
    <>

      {/* <Test2 /> */}
      {/* <MuiDrower /> */}
      {/* <Panel /> */}

      {/* <ADoctor />
      <ADrpartment /> */}

      <Routes >

        <Route path='/*' element={<UserRoutes />} />
        <Route path='/admin/*' element={<AdminRoutes />} />
      </Routes>

    </>

  );
}

export default App;
