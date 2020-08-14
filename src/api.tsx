const fetchPopularMovies = () => {
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    .then(x => x.json())
    .then(x => x.results);
};

const fetchPopularShows = () => {
  return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    .then(x => x.json())
    .then(x => x.results);
};

const wrapPromise = (promise: any) => {
  let status = "pending";
  let result = "";
  let suspender = promise.then(
    (r: any) => {
      status = "success";
      result = r;
    },
    (e: any) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    }
  };
};

export const createResource = () => {
  return {
    popularMovies: wrapPromise(fetchPopularMovies()),
    popularShows: wrapPromise(fetchPopularShows()),
  };
};