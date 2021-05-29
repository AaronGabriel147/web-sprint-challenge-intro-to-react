import React from 'react';
import '../App.css'



export default function Characters(props) {
    const apiData = props.apiData;       // This removes the need got having to type 'props'.
    console.log(apiData);           

    return (
        <ul>                                   
            {apiData.map(i => <li>{i.name}</li>)}              
        </ul>
    )
}