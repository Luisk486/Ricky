import React, { useEffect, useState } from 'react'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import useLocationApi from './hooks/useLocationApi'



const Ricky= () => {

  const [searchLocation, setSearchLocation] = useState()
 
  console.log(searchLocation)

  const location = useLocationApi(searchLocation)

  return (
    <>
   <div className='App'>
    <div className='head'>
      <div className='header'>
      <img src="https://image.tmdb.org/t/p/original/nXRw4YdH4UaQT7n0pUjL4PAinoI.jpg" alt="" />
      </div>
    </div>
    <div className='input'>
      <InputSearch  setSearchLocation={setSearchLocation} />
    </div>
    <div >
      
      <LocationInfo location={location} />
      <div>
        {location?.residents.map(resident => (
            <CardCharacter
            resident={resident}
            key={resident}
            />
        ))}
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Ricky