const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchAPIData = (resourceType: String, params: String | null) => {
  const url = `${BASE_URL}/${resourceType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&${params}`;

  return fetch(url)
    .then(response => response.json());
}
