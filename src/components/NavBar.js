import React from 'react'
import photo from '../media/logos/logo.png'


export const NavBar = () => {
    return (
        <div className='flex flex-row'>
            <img className='p-10' src={photo} />
            <nav>
                <ul className='flex flex-row p-18'>
                    <li className='pt-20 px-10 text-4xl font-thin '><a href="/about">Home</a></li>
                    <li className='pt-20 px-10 text-4xl font-thin '><a href="/contact">FAQ</a></li>
                    <li className='pt-20 px-10 text-4xl font-thin '><a href="/press">Rentals</a></li>
                    <li className='pt-20 px-10 text-4xl font-thin '><a href="/press">Book Now</a></li>
                </ul>
            </nav>

        </div>
    )
}
