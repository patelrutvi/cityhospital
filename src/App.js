
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes'
import Protected from './Routes/Protected';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';

function App() {
  const store = configureStore()
  return (
    <>
      <Provider store={store}>

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
      </Provider>
    </>

  );
}

export default App;
