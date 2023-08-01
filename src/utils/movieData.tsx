import { useEffect, useState, useRef } from "react";
import { Credits } from "./interfaces/interfaces";
interface Data {
  loading: boolean;
  error: boolean;
  data?: any;
}

const useFetch = (url: string): Data => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any | null>([]);
  const [error, setError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);

  
  useEffect(() => {
    if (url !== urlRef.current) {
      urlRef.current = url;
      setShouldLoad((s) => !s);
    }
  }, [url]);
  useEffect(() => {
    if (url.length === 0) {
      return;
    }
    if (loading) {
      return;
    }

   
    const fetchData = async () => {
      try {
        setLoading(true);
        const moviesPromise = await fetch(url);
        const moviesData = await moviesPromise.json();
        
        setData(moviesData);
        setLoading(false);
      } catch (error) {
        console.error("Ocorreu um erro:", error);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line
  }, [shouldLoad]);

  return { data, loading, error };
};

export async function getMovieCredits(movieId: string): Promise<Credits[]> {
  if (!movieId) {
    return [];
  }
  try {
    const moviesPromise = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1495c4d87bd2fdd377bfadeb1d866cd8`
    );
    const moviesData = await moviesPromise.json();

    const moviesCast = await moviesData.cast;
    const moviesCrew = await moviesData.crew;

    let actors = [];
    let directors = [];
    if (!!moviesCast) {
      actors = moviesCast.filter(
        (objectActor: { known_for_department: string; profile_path: string }) =>
          objectActor?.known_for_department === "Acting" &&
          !!objectActor?.profile_path
      );
    }
    if (!!moviesCrew) {
      directors = moviesCrew.filter(
        (objectActor: { job: string }) => objectActor?.job === "Director"
      );
    }
    return [{ directors: directors, actors: actors }];
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
  return [];
}

export default useFetch;
