const BASE_URL = 'https://api.themoviedb.org/3';

const fetchApiData = (resourceType: String, params: String | null) => {
  const url = `${BASE_URL}/${resourceType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

  console.log(url)
  return fetch(url)
    .then(x => x.json())
    .then(x => x.results);
}

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

export const createResource = (type: String, params: String | null) => {
  return {
    fetchData: wrapPromise(fetchApiData(type, params)),
  };
};