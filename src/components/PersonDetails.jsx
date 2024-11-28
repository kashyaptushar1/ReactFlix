import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadperson, removeperson } from '../store/actions/personActions';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import Loading from './Loading';
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from './partials/Dropdown';

function PersonDetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person) || {}; // fallback to empty object to avoid undefined error
  const dispatch = useDispatch();

  const [category , setcategory] = useState("movie")

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [dispatch, id]);

  // Return a loading spinner if data is not yet loaded
  if (!info?.detail) {
    return <Loading />;
  }

  return (
    <div className='px-[5%] w-screen h-[200vh] bg-[#1F1E24]'>
      {/*part 1 Navigation Bar */}
      <nav className="w-full h-[10vh] flex items-center gap-10 text-zinc-200 text-xl">
        <button onClick={() => navigate(-1)} className="hover:text-[#6556CD] mr-[10%] ri-arrow-left-line text-2xl"></button>
      </nav>

      {/* Details Section */}
      <div className='w-full flex  '>
        {/* part 2 left poster and details */}
        <div className='w-[20%]'>
          <img
            className="h-[35vh] w-full object-cover mt-10 rounded-lg shadow-lg"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path || ''}`}
            alt={info.detail.name || 'Person Image'}
          />

          <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-500 ' />
          {/* social media links */}
          <div className='text-xl text-white flex gap-x-10' >
         
        <a target="_blank" rel="noopener noreferrer" href={`https://www.wikidata.org/wiki/${info.externalid?.wikidata_id}`}>
          <i className="ri-earth-fill"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/${info.externalid?.facebook_id}`}>
          <i className="ri-facebook-circle-fill"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/${info.externalid?.instagram_id}`}>
          <i className="ri-instagram-fill"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href={`https://www.twitter.com/${info.externalid?.twitter_id}`}>
          <i className="ri-twitter-x-fill"></i>
        </a>
       
          </div>
          {/* personal details */}
          <h1 className='text-2xl text-zinc-400 font-semibold my-3' >person info</h1>
          <h1 className='text-lg text-zinc-400 font-semibold' >Know for</h1>
          <h1 className='text-zinc-400' > {info.detail.known_for_department} </h1>

          
          <h1 className='text-lg text-zinc-400 font-semibold mt-2' >Gender</h1>
          <h1 className='text-zinc-400' > {info.detail.gender == 2?"Male":"Female"} </h1>
          <h1 className='text-lg text-zinc-400 font-semibold mt-2' >Birthday</h1>
          <h1 className='text-zinc-400' > {info.detail.birthday} </h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-2' >Place of birth</h1>
          <h1 className='text-zinc-400' > {info.detail.place_of_birth} </h1>
          <h1 className='text-lg text-zinc-400 font-semibold mt-2' >Also Known as</h1>
          <h1 className='text-zinc-400' > {info.detail.also_known_as.join(", ")} </h1>
        </div>
        {/* part 3 rigth details and info */}
        <div className='w-[80%] ml-[5%] ' >
          <h1 className='text-6xl text-zinc-400 font-black my-5' >
            {info.detail.name} 
          </h1>
          <h1 className='text-xl text-zinc-400 font-semibold' >
            Overview
          </h1>
          <p className='text-zinc-400 mt-3' >{info.detail?.biography}</p>
          <h1 className='text-zinc-400 text-lg mt-5 font-semibold' >Known for</h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className='w-full flex justify-between' >
          <h1 className='text-xl font-semibold text-zinc-400 mt-5'>Acting</h1>
          <Dropdown title="category" options={["tv","movie"]} func={(e)=>setcategory(e.target.value)} />
          </div>

          <div className=' list-disc mt-3 w-full h-[50vh] overflow-x-hidden overflow-y-auto  shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5 ' >

          {info[category +"Credits"].cast.map((c,i)=>(
              <li key={i} className='hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer text-zinc-400' >
              <Link to={`/${category}/details/${c.id}`} className='' >
              <span>
                {" "}
                {c.name || c.title || c.original_name || c.original_title}
              </span>

              <span className='block' >
                {c.character}
              </span>
              </Link>
          </li>
          ))}

          </div>

        </div>

        
      </div>

      {/* Related Media Section */}
      {info.related?.length > 0 && (
        <div className='mt-10'>
          <h2 className='text-2xl font-semibold text-zinc-400 mt-3'>Related Works:</h2>
          <HorizontalCards data={info.related} />


         
        </div>
      )}
    </div>
  );
}

export default PersonDetails;
