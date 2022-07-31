import React from 'react';
import './countryPage.css';
import Panah from '../assets/panah.png';
import Bendera from '../assets/bendera.png';
import Intersect from '../assets/Intersect.png';

const CountryPage = () => {
  return (
    <div>
      <div className="container__detail">
        <button>
          <img src={Panah} alt="logo" />
          <h3>Back to Homepage</h3>
        </button>
        <div className="part2">
          <h1>Indonesia</h1>
          <img src={Bendera} alt="logo" />
        </div>
        <div className="part3">
          <h4>ID</h4>
          <h4>Republic of Indonesia</h4>
          <h4>Republik Indonesia</h4>
        </div>
        <div className="part4">
          <h4>LatLong</h4>
          <h1>-5.0, 120.0</h1>
          <img src={Intersect} alt="logo" />
        </div>
        <div className="part5">
          <h5>
            Capital: <span> Jakarta</span>
          </h5>
          <h5>
            Region: <span>Asia</span>
          </h5>
          <h5>
            Subregion: <span>South-Eastern Asia</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
