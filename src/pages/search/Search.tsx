import React, { useState, useEffect, FunctionComponent } from 'react';
import Loader from '../../components/Loader';
import { fetchAPIData } from '../../api/api';

import { ISearch } from '../../api/types';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import Grid from '../../components/Grid';

interface MatchParams {
  query: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> { }

const Search: FunctionComponent<MatchProps> = ({ children, match }) => {
  const [results, setResults] = useState<ISearch | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAPIData(`search/multi`, `query=${match.params.query}`).then(
      (response: ISearch) => {
        setResults(response);
        setLoading(false);
      }
    );    
  }, [match.params.query]);

  if (loading) {
    return (<Loader message="Searching" />)
  }

  if (results) {
    return (
      <>
        <h2 className="text-inter-2xl text-white mb-5">Search: {match.params.query}</h2>
  
        <Grid collection={results} mediaType="trending" />
      </>
    );
  }
  
  return null;
};

export default withRouter(Search);
