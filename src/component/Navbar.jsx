import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
                <div className="p-5 mt-2 border-b border-neutral-200">
                    <div className="w-[900px] mx-auto flex items-center  justify-between">
                        {/* <a href="/" className='text-2xl font-bold'>API's and UseEffect</a> */}
                        <Link className='text-2xl font-bold' to={'/'} >API's and UseEffect</Link>
                        <div className="flex  gap-5 text-xl font-medium">
                            {/* <a href="/">Home</a> */}
                            <Link to={'/'}>Home</Link>
                            {/* <a href="/">Details</a> */}
                            <Link to={'/details'}>Details</Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Navbar
