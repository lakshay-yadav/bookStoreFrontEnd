import React from 'react'
import Navbar from '../Navbar/Navbar.js'

export default function Error(){
    return(
        <React.Fragment>
            <Navbar/>
            <div className='container'>
                <h2>Error Page</h2>
            </div>
        </React.Fragment>
    )
}