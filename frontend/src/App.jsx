import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMe } from './features/auth/authSlice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './pages/lessons/landing/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

const SimpleAddition = React.lazy(() =>
  import('./pages/lessons/level_1/SimpleAddition')
);
const SimpleDivision = React.lazy(() =>
  import('./pages/lessons/level_1/SimpleDivision')
);
const SimpleMultiplication = React.lazy(() =>
  import('./pages/lessons/level_1/SimpleMultiplication')
);
const SimpleSubtraction = React.lazy(() =>
  import('./pages/lessons/level_1/SimpleSubtraction')
);

const MultCloseTo100 = React.lazy(() =>
  import('./pages/lessons/level_2/multCloseTo100/MultCloseTo100')
);

const ReferenceNumber10 = React.lazy(() =>
  import('./pages/lessons/level_2/referenceNumber10/ReferenceNumber10')
);
const ReferenceNumber20 = React.lazy(() =>
  import('./pages/lessons/level_2/referenceNumber20/ReferenceNumber20')
);
const ReferenceNumber100Above = React.lazy(() =>
  import(
    './pages/lessons/level_2/referenceNumber100Above/ReferenceNumber100Above'
  )
);
const ReferenceNumber100Below = React.lazy(() =>
  import(
    './pages/lessons/level_2/referenceNumber100Below/ReferenceNumber100Below'
  )
);
const ReferenceNumber100Mix = React.lazy(() =>
  import('./pages/lessons/level_2/referenceNumber100Mix/ReferenceNumber100Mix')
);
const CheckingAnswers = React.lazy(() =>
  import('./pages/lessons/level_2/checkingAnswers/CheckingAnswers')
);

const RefNumber20 = React.lazy(() =>
  import('./pages/lessons/level_3/refNumber20/RefNumber20')
);
const RefNumber50 = React.lazy(() =>
  import('./pages/lessons/level_3/refNumber50/RefNumber50')
);
const RefNumber200 = React.lazy(() =>
  import('./pages/lessons/level_3/refNumber200/RefNumber200')
);
const RefNumber500 = React.lazy(() =>
  import('./pages/lessons/level_3/refNumber500/RefNumber500')
);
const Decimals = React.lazy(() =>
  import('./pages/lessons/level_3/decimals/Decimals')
);
const TwoRefNumbers = React.lazy(() =>
  import('./pages/lessons/level_3/twoRefNubers/TwoRefNumbers')
);

const Addition = React.lazy(() =>
  import('./pages/lessons/level_4/addition/Addition')
);
const Substruction = React.lazy(() =>
  import('./pages/lessons/level_4/substruction/Substruction')
);

const SquaringEnding5 = React.lazy(() =>
  import('./pages/lessons/level_5/squaringEnding5/SquaringEnding5')
);
const SquaringClose50 = React.lazy(() =>
  import('./pages/lessons/level_5/squaringClose50/SquaringClose50')
);
const SquaringClose500 = React.lazy(() =>
  import('./pages/lessons/level_5/squaringClose500/SquaringClose500')
);
const SquaringEnding1 = React.lazy(() =>
  import('./pages/lessons/level_5/squaringEnding1/SquaringEnding1')
);
const SquaringEnding9 = React.lazy(() =>
  import('./pages/lessons/level_5/squaringEnding9/SquaringEnding9')
);

const DivBySingleNumber = React.lazy(() =>
  import('./pages/lessons/level_6/divBySingleNumber/DivBySingleNumber')
);
const DivByMultipliers = React.lazy(() =>
  import('./pages/lessons/level_6/divByMultipliers/DivByMultipliers')
);

const MultiplyBy11 = React.lazy(() =>
  import('./pages/lessons/level_7/myltiplyBy11/MultiplyBy11')
);
const MultiplyBy12 = React.lazy(() =>
  import('./pages/lessons/level_7/myltiplyBy12/MultiplyBy12')
);
const MultiplyBy3 = React.lazy(() =>
  import('./pages/lessons/level_7/myltiplyBy3/MultiplyBy3')
);
const MultiplyBy4 = React.lazy(() =>
  import('./pages/lessons/level_7/myltiplyBy4/MultiplyBy4')
);
const MultiplyBy5 = React.lazy(() =>
  import('./pages/lessons/level_7/myltiplyBy5/MultiplyBy5')
);
const MultiplyBy6 = React.lazy(() =>
  import('./pages/lessons/level_7/myltiplyBy6/MultiplyBy6')
);
const MultiplyBy7 = React.lazy(() =>
  import('./pages/lessons/level_7/myltiplyBy7/MultiplyBy7')
);
const MultiplyBy8 = React.lazy(() =>
  import('./pages/lessons/level_7/myltiplyBy8/MultiplyBy8')
);
const MultiplyBy9 = React.lazy(() =>
  import('./pages/lessons/level_7/myltiplyBy9/MultiplyBy9')
);

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
          <Suspense fallback={<CircularProgress color='secondary' />}>
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
                path='/lessons/level_3/two-ref-numbers'
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
              <Route
                path='/lessons/level_7/myltiply-by-11'
                element={<MultiplyBy11 />}
              />
              <Route
                path='/lessons/level_7/myltiply-by-12'
                element={<MultiplyBy12 />}
              />
              <Route
                path='/lessons/level_7/myltiply-by-3'
                element={<MultiplyBy3 />}
              />
              <Route
                path='/lessons/level_7/myltiply-by-4'
                element={<MultiplyBy4 />}
              />
              <Route
                path='/lessons/level_7/myltiply-by-5'
                element={<MultiplyBy5 />}
              />
              <Route
                path='/lessons/level_7/myltiply-by-6'
                element={<MultiplyBy6 />}
              />
              <Route
                path='/lessons/level_7/myltiply-by-7'
                element={<MultiplyBy7 />}
              />
              <Route
                path='/lessons/level_7/myltiply-by-8'
                element={<MultiplyBy8 />}
              />
              <Route
                path='/lessons/level_7/myltiply-by-9'
                element={<MultiplyBy9 />}
              />
            </Routes>
          </Suspense>
          <Footer />
        </Container>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
