import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Phrase from './components/Phrase';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2x solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  // State de frases
  const [ phrase, setPhase ] = useState({});

  const getApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json();

    console.log(phrase[0]);
    setPhase(phrase[0]);
  }

  // Cargar una frase
  useEffect( () => {
    getApi();
  }, [] );

  return (
    <Container>
      <Phrase
        phrase={phrase}
      />
      <Button
        onClick={getApi}
      >
        Obtener Frase
      </Button>
    </Container>
  );
}

export default App;
