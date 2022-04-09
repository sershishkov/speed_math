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

import SimpleAddition from './pages/lessons/level_1/SimpleAddition';
import SimpleDivision from './pages/lessons/level_1/SimpleDivision';
import SimpleMultiplication from './pages/lessons/level_1/SimpleMultiplication';
import SimpleSubtraction from './pages/lessons/level_1/SimpleSubtraction';
import MultCloseTo100 from './pages/lessons/level_2/MultCloseTo100';
import ReferenceNumber10 from './pages/lessons/level_2/ReferenceNumber10';
import ReferenceNumber20 from './pages/lessons/level_2/ReferenceNumber20';
import ReferenceNumber100Above from './pages/lessons/level_2/ReferenceNumber100Above';
import ReferenceNumber100Below from './pages/lessons/level_2/ReferenceNumber100Below';
import ReferenceNumber100Mix from './pages/lessons/level_2/ReferenceNumber100Mix';
import CheckingAnswers from './pages/lessons/level_2/CheckingAnswers';

import RefNumber20 from './pages/lessons/level_3/refNumber20/RefNumber20';
import RefNumber50 from './pages/lessons/level_3/refNumber50/RefNumber50';
import RefNumber200 from './pages/lessons/level_3/refNumber200/RefNumber200';
import RefNumber500 from './pages/lessons/level_3/refNumber500/RefNumber500';
import Decimals from './pages/lessons/level_3/decimals/Decimals';
import TwoRefNumbers from './pages/lessons/level_4/twoRefNubers/TwoRefNumbers';
import Addition from './pages/lessons/level_4/addition/Addition';
import Substruction from './pages/lessons/level_4/substruction/Substruction';
import SquaringEnding5 from './pages/lessons/level_5/squaringEnding5/SquaringEnding5';
import SquaringClose50 from './pages/lessons/level_5/squaringClose50/SquaringClose50';
import SquaringClose500 from './pages/lessons/level_5/squaringClose500/SquaringClose500';
import SquaringEnding1 from './pages/lessons/level_5/squaringEnding1/SquaringEnding1';
import SquaringEnding9 from './pages/lessons/level_5/squaringEnding9/SquaringEnding9';
import DivBySingleNumber from './pages/lessons/level_6/divBySingleNumber/DivBySingleNumber';
import DivByMultipliers from './pages/lessons/level_6/divByMultipliers/DivByMultipliers';

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
        <Container
          sx={{
            mt: '68px',
            minWidth: '360px',
            maxWidth: '900px',
            // border: '1px solid red',
          }}
        >
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

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
            <Route
              path='/lessons/level_2/mult-close-to-100'
              element={<MultCloseTo100 />}
            />
            <Route
              path='/lessons/level_2/ref-number-10'
              element={<ReferenceNumber10 />}
            />
            <Route
              path='/lessons/level_2/ref-number-20'
              element={<ReferenceNumber20 />}
            />
            <Route
              path='/lessons/level_2/ref-number-100-above'
              element={<ReferenceNumber100Above />}
            />
            <Route
              path='/lessons/level_2/ref-number-100-below'
              element={<ReferenceNumber100Below />}
            />
            <Route
              path='/lessons/level_2/ref-number-100-mix'
              element={<ReferenceNumber100Mix />}
            />
            <Route
              path='/lessons/level_2/checking-answers'
              element={<CheckingAnswers />}
            />
            <Route
              path='/lessons/level_3/ref-number-20'
              element={<RefNumber20 />}
            />
            <Route
              path='/lessons/level_3/ref-number-50'
              element={<RefNumber50 />}
            />
            <Route
              path='/lessons/level_3/ref-number-200'
              element={<RefNumber200 />}
            />
            <Route
              path='/lessons/level_3/ref-number-500'
              element={<RefNumber500 />}
            />
            <Route path='/lessons/level_3/decimals' element={<Decimals />} />
            <Route
              path='/lessons/level_4/two-ref-numbers'
              element={<TwoRefNumbers />}
            />
            <Route path='/lessons/level_4/addition' element={<Addition />} />
            <Route
              path='/lessons/level_4/substruction'
              element={<Substruction />}
            />
            <Route
              path='/lessons/level_5/squaring-ending-5'
              element={<SquaringEnding5 />}
            />
            <Route
              path='/lessons/level_5/squaring-close-to-50'
              element={<SquaringClose50 />}
            />
            <Route
              path='/lessons/level_5/squaring-close-to-500'
              element={<SquaringClose500 />}
            />
            <Route
              path='/lessons/level_5/squaring-ending-1'
              element={<SquaringEnding1 />}
            />
            <Route
              path='/lessons/level_5/squaring-ending-9'
              element={<SquaringEnding9 />}
            />
            <Route
              path='/lessons/level_6/division-by-single-number'
              element={<DivBySingleNumber />}
            />
            <Route
              path='/lessons/level_6/division-by-multipliers'
              element={<DivByMultipliers />}
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
