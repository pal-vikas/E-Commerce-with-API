import React from 'react'
import { Link } from 'react-router-dom'

function Cards({ title, img, desc, price, id }) {
    return (
        <Link to={`/details/${id}`}>

            <div className='w-[250px] border p-2 border-neutral-300 hover:cursor-pointer'>
                <div className="text-center">
                    <img className='h-28 inline' src={img} alt="" />
                </div>
                <h1 className='truncate font-semibold mt-2'>{title}</h1>
                <p>Rs {Math.floor(price * 85)}</p>
                {/* <p>{desc}</p> */}
            </div>
        </Link>
    )
}

export default Cards
