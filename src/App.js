import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';



function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <>
      <div className='sec'>
        <p className='title'>
          The Rick and Morty API
        </p>
      </div>
      <div className='row gx-0 m-auto'>
        {
          data.map((items) => {
            return (
              <Card data={items} />
            )
          })
        }
      </div>
    </>
  );
}

export default App;
