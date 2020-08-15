import React, { useState, useEffect, FunctionComponent } from 'react';
import Loader from '../../components/Loader';
import { fetchAPIData } from '../../api/api';

import { ISearch } from '../../api/types';

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Grid from '../../components/Grid';

interface MatchParams {
  query: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> { }

const Search: FunctionComponent<MatchProps> = ({ children, match }) => {
  const [results, setResults] = useState<ISearch | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchAPIData(`search/multi`, `query=${match.params.query}&page=${page}`).then(
      (response: ISearch) => {
        setResults(response);
        setLoading(false);
      }
    );    
  }, [match.params.query, page]);

  if (loading) {
    return (<Loader message={`Searching ${match.params.query}`} />)
  }

  if (results) {
    return (
      <>
        <div className="flex justify-between mb-5">
          <h2 className="text-inter-2xl text-white">Search: {match.params.query}</h2>

          <div className="flex">
            <div className="mr-3 flex items-center">
              { (page - 1) * 25 + 1 } - { page * 25 } results
            </div>
            <div className="flex" role="group">
              <button onClick={() => setPage((page > 1) ? page - 1 : 1)} className="text-black bg-gray-500 focus:bg-gray-200 hover:bg-gray-200 transition duration-300 ease-in-out rounded-l py-1 px-2 m-0">
                <FiChevronLeft />
              </button>
              <button onClick={() => setPage(page + 1)} className="text-black bg-gray-500 focus:bg-gray-200 hover:bg-gray-200 transition duration-300 ease-in-out rounded-r py-1 px-2 m-0">
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
  
        <Grid collection={results} mediaType="trending" />
      </>
    );
  }
  
  return null;
};

export default withRouter(Search);
