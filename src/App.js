
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes'
import Protected from './Routes/Protected';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </>

  );
}

export default App;
