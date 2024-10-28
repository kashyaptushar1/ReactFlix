import React from "react";

function HorizontalCards({ data }) {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-3 ">
      {data.map((d, i) => (
        <div
          key={i}
          className="min-w-[15%]  ml-5 mb-5 bg-zinc-900 overflow-auto"
        >
          <img
            className=" w-full h-[55%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.profile_path
            }`}
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
        </div>
      ))}
    </div>
  );
}

export default HorizontalCards;
