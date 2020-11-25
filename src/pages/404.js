import React from 'react';
import fondo from '../assets/error-404.webp'

function Error404(props){
    return (
      <div
        style={{
          backgroundImage: "url(" + fondo + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh"
        }}
      >
        
      </div>
    );
};


export default Error404;