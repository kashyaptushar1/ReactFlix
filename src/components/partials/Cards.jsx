import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data , title}) {
  return (
    <div className='flex flex-wrap w-full h-full pl-[5%] bg-[#1F1E24]' >
      {data.map((c,i)=>(
        <Link className='w-[25vh]  mr-[4%] mb-[5%]' key={i}>

            <img className='h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path}`} alt="" />
       <h1 className='text-2xl text-zinc-300 mt-3 font-semibold' >
         {c.name || c.title || c.original_name || c.original_title}
         </h1>
        </Link>
      ))}
    </div>
  )
}

export default Cards
