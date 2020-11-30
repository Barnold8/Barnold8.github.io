import React from 'react'


var current_year = new Date().getFullYear()

function Footer(){


    return(

        <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">

    &copy; Copyright {current_year}

        </footer>


    )


}

export default Footer