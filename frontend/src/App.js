import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMe } from './features/auth/authSlice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import Container from '@mui/material/Container';
import LessonsList from './pages/lessons/LessonsList';
import SimpleAddition from './pages/lessons/level_1/SimpleAddition';
import SimpleDivision from './pages/lessons/level_1/SimpleDivision';
import SimpleMultiplication from './pages/lessons/level_1/SimpleMultiplication';
import SimpleSubtraction from './pages/lessons/level_1/SimpleSubtraction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
      dispatch(getMe());
    }
  }, [dispatch]);
  return (
    <>
      <Router>
        <Header />
        <Container sx={{ mt: '68px' }}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/lessons' element={<LessonsList />} />
            <Route
              path='/lessons/level_1/simple-addition'
              element={<SimpleAddition />}
            />
            <Route
              path='/lessons/level_1/simple-division'
              element={<SimpleDivision />}
            />
            <Route
              path='/lessons/level_1/simple-multiplication'
              element={<SimpleMultiplication />}
            />
            <Route
              path='/lessons/level_1/simple-subtraction'
              element={<SimpleSubtraction />}
            />
          </Routes>
          <Footer />
        </Container>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
