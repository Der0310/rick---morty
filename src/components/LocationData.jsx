import React from 'react';
import './styles/locationData.css';

const LocationData = ({location}) => {
    // console.log(location);
  return (
    <section className='location'>
        <h2 className='location__name'>{location?.name}</h2>
        <ul className='location__list'>
                <li className='location__item'><span>Type:</span><span> {location?.type}</span></li>
                <li className='location__item'><span>Dimension:</span><span> {location?.dimension}</span></li>
                <li className='location__item'><span>Population:</span><span> {location?.residents.length}</span></li>

        </ul>
    </section>
  )
}

export default LocationData;