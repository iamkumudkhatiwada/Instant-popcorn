import { useState, useEffect } from "react";
const key = "44fba871";
export function useMovies(query) {
  //this is a function so no props, just parameter//

  const [movies, setMovies] = useState([]);
  // const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    // callback?.();
    const controller = new AbortController(); //Done to prevent race condition//
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${key}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("Something went wrong while fetching movie data"); // network error
        }
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie Not Found"); //movie not found error
        setMovies(data.Search);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    // handleCloseMovie();
    fetchMovies();
    return function () {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error };
}
