import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Topnav from './partials/Topnav'

import InfiniteScroll from "react-infinite-scroll-component"
import Cards from './partials/Cards'
import Loading from './Loading'

function People() {


    
    const navigate = useNavigate()
 const [category , setcategory] =  useState("person")
 
 const [person , setperson] =  useState([])
 const [page , setpage] = useState(1)
 const [hasMore , sethasMore] =   useState(true)

 document.title = "ReactFlix | Person" 

 const GetPerson = async () => {
    try {
        const { data } = await axios.get(`/person/popular?page=${page}`);
        if (data.results.length > 0) {
            setperson((prevState) => [...prevState, ...data.results]);
            setpage((prevPage) => prevPage + 1);
        } else {
            sethasMore(false); // No more data to load
        }
    } catch (error) {
        console.log("Error", error);
    }
};


const refershHandler = () => {
 if(person.length === 0){
    GetPerson()
 }else{
    setpage(1)
    setperson([])
    GetPerson();
 }
}


useEffect(()=>{
    

    refershHandler()
},[category])


  return person.length > 0 ? (
    <div className=' w-screen h-screen  ' >
        <div className='px-[5%] w-full flex items-center justify-between ' >
        <h1 className='text-2xl font-semibold text-zinc-400 ' >
        <i onClick={()=>navigate(-1)} className=" hover:text-[#6556CD] mr-[10%] ri-arrow-left-line"></i>
            People
        </h1>
       <div className='flex items-center w-[80%]  ' >
       <Topnav  />
       
        <div className='w-[3%]' ></div>
        {/* <Dropdown title="Duration" options={["week","day"]} func={(e)=> setduration(e.target.value)} /> */}
       </div>

        </div>



   

            <InfiniteScroll 
            dataLength={person.length}
            next={GetPerson}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}

            >
            <Cards data={person} title="person"/>
            </InfiniteScroll>
      
        



    </div>
  ):<Loading/>
}

export default People

