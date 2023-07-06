
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes'
import Protected from './Routes/Protected';

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
        <Route element={<Protected />}>
        <Route path='/admin/*' element={<AdminRoutes />} />
        </Route>
      </Routes>

    </>

  );
}

export default App;
