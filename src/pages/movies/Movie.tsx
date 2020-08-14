import React, { useState, useEffect, FunctionComponent } from 'react';
import Loader from '../../components/Loader';
import { fetchAPIData } from '../../api/api';
import { useAPI } from '../../api/context';

import { RouteComponentProps, withRouter } from 'react-router-dom';

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

interface Movie {
  title: string,
  genres: string[],
  poster_path: string,
  overview: string,
}

const Movies: FunctionComponent<MatchProps> = ({ children, match }) => {
  const contextAPI = useAPI();  
  // console.dir(contextAPI?.showsGenres);

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAPIData(`movie/${match.params.id}`, null).then(
      (response: Movie) => {
        setMovie(response);
        setLoading(false);
      }
    );    
  }, [match.params.id]);

  if (loading) {
    return (<Loader message="Loading movie" />)
  }

  console.log(movie);

  return (
    <>
      <h2 className="text-inter-2xl text-white mb-5">{movie?.title}</h2>

      <p>{movie?.overview}</p>
    </>
    
  );
};

export default withRouter(Movies);
