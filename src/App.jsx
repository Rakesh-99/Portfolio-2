import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';
import Background from './components/ui/Background';
import { persistStore } from 'redux-persist';
import Spinner from './components/spinner/Spinner';
import { Analytics } from '@vercel/analytics/react'

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));

const persistor = persistStore(store);

const App = () => {
  return (
    <>
      <Analytics />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ScrollToTop />
          <ThemeProvider>
            <Background />
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/about' element={<About />} />
                </Route>
              </Routes>
            </Suspense>
          </ThemeProvider>
          <Toaster
            toastOptions={{
              style: {
                background: '#0B0B0F',
                color: '#FAFAF8',
                fontSize: '14px',
                borderRadius: '10px',
              },
            }}
          />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
