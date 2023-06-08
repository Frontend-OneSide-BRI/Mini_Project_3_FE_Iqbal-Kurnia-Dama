import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../../services/api";
import { Link } from "react-router-dom";
import Header from "../organisme/Header";
import Footer from "../molekul/Footers";
import Search from "../atom/Search";

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
      <div className="bg-slate-900 py-28">
        {/* search */}
        <div className="py-20">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
        </div>

        <div className='grid grid-cols-4 gap-4 px-20'>
          {populerMovie.map((result, index) => {
            return (
              <div
                key={index}
                className='rounded-lg shadow'>
                <Link to='/detail'>
                  <img className='rounded-t-lg' src={`${image}/${result.poster_path}`} alt='test' />
                </Link>
                {/* <div className="p-5">
                  <a href="/#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {result.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {result.overview}
                  </p>
                  <a
                    href="/#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
