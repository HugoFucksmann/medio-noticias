import React from 'react'
import publi1 from '../assets/banner-argentinanosnecesita.jpg'

function Ads(){
    return (
      <section
        className="ads1"
        style={{
          backgroundImage: `url(${publi1})`,
          margin: '20px auto'
        }}
      />
    );
      
    
}

export default Ads;