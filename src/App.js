import React from 'react';
import HomePage from './components/HomePage';
import CountryPage from './components/CountryPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/country" exact element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
