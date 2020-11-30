import React, {useState} from 'react'




//https://freesvg.org/img/1548612994.png

                



function CounterExample(){
    
    const [count, valueSetter] = useState(25)

    return(

        <div>
            <div style={{fontSize : `${count}px`}}> Hello world</div>

            <div onClick={() => valueSetter(count + count * 2)  } className="Clicker"> Click me  </div>

        </div>
    )

}

export default  CounterExample