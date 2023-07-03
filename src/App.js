
import './App.css';
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
