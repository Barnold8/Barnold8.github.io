import { render } from '@testing-library/react';
import React from 'react'




function RandResize(f){

    var t = Math.random(10,100) * 100

    console.log(t)
    return(
       
        <div style={{fontSize: `${t}px` }}>

    Here is the text: {f.name}

            </div>
    )

}

export default RandResize