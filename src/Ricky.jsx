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
      <img src="https://binaryfortressdownloads.com/Download/WPF/Images/22747/WallpaperFusion-rick-and-morty-1680x480.jpg" alt="" />
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