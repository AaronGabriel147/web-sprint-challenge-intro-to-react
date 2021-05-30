import React from 'react';
import '../App.css'
import styled from 'styled-components'

// you can use {createGlobalStyle} from styled-components to style the body and html 
// https://styled-components.com/docs/api#createglobalstyle 
const UnorderedListContainer = styled.ul`
    border: 2px solid blue;
    position: relative;
    margin: 3rem;
    margin-top: 1rem;
    z-index: 1;
    /*   margin-top: 50px; */
    /*   text-align: center; */
    
`;


const ListNames = styled.li`
//   border: 1px solid grey;
  list-style-type: none;
  margin-top: 5px;
  margin-bottom: 25px;
  color: white;
  font-size: 1.3rem;
`;

const Card = styled.div`

      border: 2px solid lightgrey; 
      position: relative;
      width: 400px;
      height: 400px;
      top: calc(50% - 175px);
      left: calc(50% - 125px);
      background: inherit;
      border-radius: 2px;
      overflow: hidden;
    }
    
    Card:after{
     content: '';
     width: 800px;
     height: 500px;
     background: inherit; 
     position: absolute;
     left: -25px;
     left position
     right: 0;
     top: -25px;  
     top position 
     bottom: 0;
     box-shadow: inset 0 0 0 200px rgba(255,255,255,0.05);
     filter: blur(5px);
    
`;


export default function Characters(props) {
    const apiData = props.apiData;                                                   // This removes the need got having to type 'props'.
    console.log(apiData);           

    return (
        <Card>
            <UnorderedListContainer>                                   
                {apiData.map(i => <ListNames>{i.name}</ListNames>)}              
            </UnorderedListContainer>
        </Card>
    )
}