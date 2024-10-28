import { useEffect, useState } from "react"
import Header from "./partials/Header"
import Sidenav from "./partials/Sidenav"
import Topnav from "./partials/Topnav"
import axios from '../utils/axios'
import HorizontalCards from "./partials/HorizontalCards"
import Dropdown from "./partials/Dropdown"
import Loading from "./Loading"


function Home() {
    document.title = "ReactFlix | HomePage";

    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);
    const [category , setcategory] = useState("all")

    const GetHeaderWallper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
            setwallpaper(randomdata)
        } catch (error) {
            console.log("Error", error);
        }
    };
    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            settrending(data.results)
        } catch (error) {
            console.log("Error", error);
        }
    };

    // console.log(trending)

    useEffect(() => {
        !wallpaper && GetHeaderWallper();
        GetTrending();
    }, [category]); 

    return wallpaper && trending ? (
        <>
            <Sidenav />
            <div className="w-[80%] h-full overflow-x-hidden overflow-auto ">
                <Topnav />
                <Header data={wallpaper} /> 


                <div className=' p-5 flex justify-between ' >
                <h1 className='text-3xl font-semibold text-zinc-400' >Trending</h1>
                <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=>setcategory(e.target.value)} />
            </div>
                <HorizontalCards data={trending}  />
            </div>
        </>
    ):<Loading/>
}

export default Home;
