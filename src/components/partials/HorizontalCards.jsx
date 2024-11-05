
import { Link } from "react-router-dom";
import Noimage from '/Noimage.jpg'

function HorizontalCards({ data }) {
  return (
    <div to="" className="w-[100%] flex overflow-y-hidden mb-3 ">
      {data.length > 0 ? data.map((d, i) => (
        <Link to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[15%]  ml-5 mb-5 bg-zinc-900 overflow-auto"
        >
          <img
            className=" w-full h-[55%] object-cover"
            src={d.backdrop_path || d.profile_path?`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.profile_path
            }`:Noimage}
            alt=""
          />
          <div className="text-white p-3 h-[45%]">
            <h1 className=" text-xl font-semibold text-[#6556CD] ">
              {" "}
              {d.title || d.name || d.original_name || d.original_title}
            </h1>
            <p className=" mb-5 pb-5 ">
              {d.overview.slice(0, 50)}...
              <span className="text-blue-400">more</span>
            </p>
          </div>
        </Link>
      )):<h1 className="text-3xl text-white font-black text-center mt-5 " >Nothing to show</h1>}
    </div>
  );
}

export default HorizontalCards;
