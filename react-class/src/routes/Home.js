import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  // https://yts.mx/api/v2/movie_details.json?movie_id=2352352



  return (
    <div>
      {loading ? <h1>I'm loading, wait!</h1> :
      <div>
        {
          movies.map((a, i) => {
            return (
              <Movie key={i} id={a.id} title={a.title} year={a.year} poster={a.medium_cover_image} rating={a.rating} genres={a.genres} summary={a.summary} />
            );
          })
        }
      </div>
      
      }
    </div>
  );
}

export default Home;