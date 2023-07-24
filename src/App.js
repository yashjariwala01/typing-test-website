import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './Context/ThemeContext';
import { GlobalStyles } from "./styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
  const {theme} = useTheme();

  return (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <ToastContainer/>
    <Routes>
      <Route path='/' element = {<HomePage/>} />
      <Route path='/user' element = {<UserPage/>} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;