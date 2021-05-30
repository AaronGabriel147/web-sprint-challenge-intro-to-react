import React from 'react';
import '../App.css'
import styled from 'styled-components'

// you can use {createGlobalStyle} from styled-components to style the body and html 
// https://styled-components.com/docs/api#createglobalstyle 

const UnorderedListContainer = styled.ul`
    // border: 2px solid blue;
    position: relative;
    margin: 3rem;
    margin-top: 1rem;
    z-index: 1;
    margin-top: 3rem;
    /*   text-align: center; */
    
`;


const ListNames = styled.li`
//   border: 1px solid grey;
  list-style-type: none;
  color: black;
  font-size: 1.4rem;
  margin: 1.8rem;
  font-weight: 700;
`;



export default function Characters(props) {
    const apiData = props.apiData;                                                   // This removes the need got having to type 'props'.
    console.log(apiData);           

    return (
        <div class="test">
            <UnorderedListContainer>                                   
                {apiData.map(i => <ListNames>{i.name}</ListNames>)}              
            </UnorderedListContainer>
        </div>
    )
}