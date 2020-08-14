import React, { useState, useEffect, FunctionComponent } from 'react';
import Loader from '../../components/Loader';
import { fetchAPIData } from '../../api/api';

import { IMovie } from '../../api/types';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import ItemPage from '../../components/ItemPage';

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> { }

const Movies: FunctionComponent<MatchProps> = ({ children, match }) => {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAPIData(`movie/${match.params.id}`, null).then(
      (response: IMovie) => {
        setMovie(response);
        setLoading(false);
      }
    );    
  }, [match.params.id]);

  if (loading) {
    return (<Loader message="Loading movie" />)
  }

  return (
    <ItemPage mediaType="movie" item={movie} />
  );
};

export default withRouter(Movies);
