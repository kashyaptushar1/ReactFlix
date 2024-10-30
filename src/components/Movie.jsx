import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import InfiniteScroll from "react-infinite-scroll-component"
import Cards from './partials/Cards'
import Loading from './Loading'

function Movie() {

     

    const navigate = useNavigate()
 const [category , setcategory] =  useState("now_playing")
 
 const [movie , setmovie] =  useState([])
 const [page , setpage] = useState(1)
 const [hasMore , sethasMore] =   useState(true)

 document.title = "ReactFlix | Movie -" +category.toLocaleUpperCase();

 const GetMovie = async () => {
    try {
        const { data } = await axios.get(`/movie/${category}?page=${page}`);
        if (data.results.length > 0) {
            setmovie((prevState) => [...prevState, ...data.results]);
            setpage((prevPage) => prevPage + 1);
        } else {
            sethasMore(false); // No more data to load
        }
    } catch (error) {
        console.log("Error", error);
    }
};


const refershHandler = () => {
 if(movie.length === 0){
    GetMovie()
 }else{
    setpage(1)
    setmovie([])
    GetMovie();
 }
}


useEffect(()=>{
    

    refershHandler()
},[category])



  return movie.length > 0 ? (
    <div className=' w-screen h-screen  ' >
        <div className='px-[5%] w-full flex items-center justify-between ' >
        <h1 className='text-2xl font-semibold text-zinc-400 ' >
        <i onClick={()=>navigate(-1)} className=" hover:text-[#6556CD] mr-[10%] ri-arrow-left-line"></i>
            Movie
        </h1>
       <div className='flex items-center w-[80%]  ' >
       <Topnav  />
        <Dropdown title="Category" options={["popular","top_rated","upcoming","now_playing"]} func={(e)=> setcategory(e.target.value)} />
        <div className='w-[3%]' ></div>
        {/* <Dropdown title="Duration" options={["week","day"]} func={(e)=> setduration(e.target.value)} /> */}
       </div>

        </div>



   

            <InfiniteScroll 
            dataLength={movie.length}
            next={GetMovie}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}

            >
            <Cards data={movie} title="movie"/>
            </InfiniteScroll>
      
        



    </div>
  ):<Loading/>
}

export default Movie
