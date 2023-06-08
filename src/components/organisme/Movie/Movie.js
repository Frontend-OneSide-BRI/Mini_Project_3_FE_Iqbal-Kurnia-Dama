import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../../../services/api";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../../molekul/Footers";
import Search from "../../atom/Search";

const Movies = () => {
  const [populerMovie, setPopulerMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const image = process.env.REACT_APP_IMG_URL;

  useEffect(() => {
    getMovieList().then((result) => {
      setPopulerMovie(result);
    });
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchQuery.length > 3) {
        search(searchQuery);
      } else {
        getMovieList().then((result) => {
          setPopulerMovie(result);
        });
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [searchQuery]);

  const search = async (q) => {
    const query = await searchMovie(q);
    setPopulerMovie(query.results);
  };

  return (
    <div>
      <Header />
      {/* search */}
      <div className='bg-slate-900 py-28'>
        {/* search */}
        <div className='py-20'>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 md:gap-4 grid-cols-1 px-20'>
          {populerMovie.map((result, index) => {
            return (
              <div
                key={index}
                className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg md:mb-0 mb-4'>
                <div className='h-96 w-72'>
                  <img
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                    src={`${image}/${result.poster_path}`}
                    alt='images'
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                  <div className='mb-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    <h1 className='font-dmserif text-xl font-bold text-white'>{result.title}</h1>
                    <p className='text-xs italic'>
                      {result.overview}
                    </p>
                  </div>
                </div>
              </div>
              // <div
              //   key={index}
              //   className='rounded-lg shadow'>
              //   <Link to='/detail'>
              //     <img className='rounded-t-lg' src={`${image}/${result.poster_path}`} alt='test' />
              //   </Link>
              //  <div className="p-5">
              //   <a href="/#">
              //     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              //       {result.title}
              //     </h5>
              //   </a>
              //   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              //     {result.overview}
              //   </p>
              //   <a
              //     href="/#"
              //     className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              //   >
              //     Read more
              //     <svg
              //       aria-hidden="true"
              //       className="w-4 h-4 ml-2 -mr-1"
              //       fill="currentColor"
              //       viewBox="0 0 20 20"
              //       xmlns="http://www.w3.org/2000/svg"
              //     >
              //       <path
              //         fillRule="evenodd"
              //         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              //         clipRule="evenodd"
              //       ></path>
              //     </svg>
              //   </a>
              // </div>
              // </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
