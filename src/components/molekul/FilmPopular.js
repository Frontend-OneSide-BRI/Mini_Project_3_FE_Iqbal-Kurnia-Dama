import React, { useEffect, useState } from "react";
// import { getMovieListLimit } from "../../services/apiMovie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListLimit as MoviesLists } from "../../redux/actions/movies";

const BrowseFilm = () => {
  // menggunakan state
  // const [populerMovie, setPopulerMovie] = useState([]);
  // useEffect(() => {
  //   getMovieListLimit().then((result) => {
  //     setPopulerMovie(result);
  //   });
  // }, []);

  // penerapan redux
  const image = process.env.REACT_APP_IMG_URL;
  const dispatch = useDispatch();
  const movieListLimit = useSelector((state) => state.movies.movieListLimit);

  useEffect(() => {
    dispatch(MoviesLists());
  }, [dispatch]);


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="bg-slate-900 px-20 pb-32">
      <h1 className="text-white md:text-4xl text-2xl py-5 text-center">Populer Movie in LayarKaca 21</h1>
      <Carousel
        responsive={responsive}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        rewind={true}
      >
        {movieListLimit.map((result, index) => (
          <div key={index} className="p-2">
              <img
                className="transition-all duration-500 hover:scale-105"
                src={`${image}/${result.poster_path}`}
                alt="img"
              />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BrowseFilm;
