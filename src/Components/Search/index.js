import React from 'react'
import {useState, useEffect} from "react";

function Search({search, handleClick}) {
    
    let inputValue = "";
    return (
        <div>
            <input type = "text" onChange={(event)=>{inputValue = event.target.value}}></input>
            <button onClick = {()=>{handleClick(inputValue)}}>search</button>
        </div>
    )
}

export default Search;