import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const PhraseContainer = styled.div`
    padding: 3rem;
    border-radius: .5re;
    background-color: #FFF;
    max-width: 800px;
    
    @media (min-width: 767px) {
        margin-top: 15rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Phrase = ({ phrase }) => {

    if (Object.keys(phrase).length === 0) return null;

    const { quote, author } = phrase;

    return (
        <PhraseContainer>
            <h1>{quote}</h1>
            <p>{author}</p>
        </PhraseContainer>
    );
}

Phrase.propTypes = {
    phrase: PropTypes.object.isRequired,
}
 
export default Phrase;
