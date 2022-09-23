import axios from'axios'
import React, { useEffect, useState } from 'react'
import useCharacterApi from '../hooks/useCharacterApi'
const CardCharacter = ({resident}) => {
   
    const character = useCharacterApi(resident)
    
   return (
    <article className='characterCard'>
        <img src={character?.image} alt="character image" />
        <h2 className='name1'>{character?.name}</h2>
        <p> <b>Status:</b>  {character?.status}</p>
        <p> <b>Origin:</b>  {character?.origin.name}</p>
        <p> <b> Episodes where appears: </b>{character?.episode.length}</p>
    </article>
   )
}

export default CardCharacter