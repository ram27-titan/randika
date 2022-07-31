import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './homePage.css';
import CountryPage from './CountryPage';
import Search from '../assets/search.png';

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    if (name.length) {
      getEndPoints();
    }
  }, [name]);

  const getEndPoints = async () => {
    // setLoading(true);
    const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    setCountries(res.data);
    // setLoading(false);
    console.log(res.data);
  };

  return (
    <div>
      <div className="container__home">
        <h1>Country</h1>
        <input type="text" placeholder="Type any country name" onChange={(e) => setName(e.target.value)} />
        <img src={Search} alt="imagelogo" />
      </div>
    </div>
  );
};

export default HomePage;
