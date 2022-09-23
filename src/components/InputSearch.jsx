import React, { useState } from "react";

const InputSearch = ({setSearchLocation}) => {



   const searchLocation = e => {
     e.preventDefault()
     setSearchLocation(e.target.children[0].value)
    }


   return (
       <form onSubmit={searchLocation}>
          <input type="text"  className="bars" placeholder='Ingrese el ID de la dimensión'/>
          <button className="buton"><i class="fa-solid fa-magnifying-glass"></i></button>
       </form>
    )
}

export default InputSearch