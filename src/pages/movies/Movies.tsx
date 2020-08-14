import React, { FunctionComponent, Suspense } from 'react';
import { createResource } from '../../api/suspense';
import Grid from '../../components/Grid';
import Loader from '../../components/Loader';

const resource = createResource('movie/popular', '');

const Movies: FunctionComponent = ({ children }) => {

  return (
    <>
      <h2 className="text-inter-2xl text-white mb-5">Popular movies</h2>

      <Suspense fallback={<Loader message="Loading popular movies" />}>
        <Grid collection={resource.fetchData.read()} mediaType="movie" />
      </Suspense>
    </>
    
  );
};

export default Movies;
