
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes'
import Protected from './Routes/Protected';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store';
import { SnackbarProvider } from 'notistack';
import Alert from './user/components/Alert/Alert';
import { ThemeProvider } from './Context/ThameContext';


function App() {

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <ThemeProvider>
            <PersistGate loading={null} persistor={persistor}>
              <Alert />
              {/* <Test2 /> */}
              {/* <MuiDrower /> */}
              {/* <Panel /> */}
              {/* <ADoctor />
      <ADrpartment /> */}

              <Routes >
                <Route path='/*' element={<UserRoutes />} />
                <Route>
                  <Route path='/admin/*' element={<AdminRoutes />} />
                </Route>
              </Routes>
            </PersistGate>
          </ThemeProvider>
        </Provider>
      </SnackbarProvider>
    </>

  );
}

export default App;
