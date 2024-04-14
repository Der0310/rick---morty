
import { useEffect, useRef, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import LocationData from './components/LocationData';
import ResidentCard from './components/ResidentCard';

function App() {
  
  const [inputValue, setinputValue] = useState(Math.floor(Math.random() * 126) + 1);

  const [location, getLocation, isLoading, hasError] = useFetch();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
    getLocation(url);
  }, [inputValue]);

  // console.log(location);

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setinputValue(textInput.current.value.toLowerCase().trim());/*el value es para accesar a lo q ponen en el inpu o escriben en la barra*/ 
    textInput.current.value = ' ';
  }
  

  return (
    <>
    {
      isLoading ?
      <h2>Loading...</h2>
      :
      <div className='app'>
      <header><img src="https://toptoys2u.co.uk/cdn/shop/collections/Website_Category_banners_13.png?v=1662986669" alt="rick y morty" /></header>
      <form className='app__form' onSubmit={handleSubmit}>
        <input className='app__input' type="text" ref={textInput} placeholder='number'/>
        <button className='app__btn'>Search</button>
      </form>
      {
        hasError || inputValue==='0' ?
        <h2>Hey, you must provide an id from 1 to 126</h2>
        :
        <>
          <LocationData
            location={location}
          />
          <div className='app__container'>
            {
              location?.residents.map(resident=> (
                <ResidentCard
                key={resident}
                url={resident}
                />/*asi es por si quiero q cambie el componente */
              ))
            }
          </div>
        </>
      }
    </div>
    }
   
    </>
  )
}

export default App;
