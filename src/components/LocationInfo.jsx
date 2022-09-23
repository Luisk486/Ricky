import React from 'react'

const LocationInfo = ({location}) => {
    
    console.log(location)
    
    return (
    <article className='loc'>
        
      <div className='card'>
        <span>
          <div>Name:</div>  
             {location?.name} 
        </span>
        <span>
          <div>Type:</div> 
             {location?.type}
        </span> 
        <span>
           <div>Dimension:</div>  
             {location?.dimension}
        </span>
        <span>
           <div>Population:</div>  
              {location?.residents.length}</span>
    </div>
        
    </article>
  )
}

export default LocationInfo