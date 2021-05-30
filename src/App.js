import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import './App.css';
import Character from './components/Character'


const T = styled.div`
  // border: 1px solid orange;
  display: flex;
  justify-content: center;
  margin: 4rem;
  
`;

const StyledH1 = styled.h1`
  color: dodgerblue;
  font-size: 3rem;
  right: 25px;
`;


export default function App() {
  const [apiData, setApiData] = useState([])       // Subject to name change and default type change

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people')
    .then(res => {
      setApiData(res.data)
    })
    .catch(ERR => {
      console.log('ERR');
    })
  }, [])

// console.log(apiData);                           // An array with 6 objects. I.E. 0: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}

  return (
    <>
      <T>
        <StyledH1>STAR WARS CHARACTERS</StyledH1>
      </T>
        <Character apiData={apiData}/>             {/* 6 names. 1 per line... PROPS for child. Array of 6 objects, manipulated be a child component (or soon to be) */}
    </>
  );
}
