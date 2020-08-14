import React, { FunctionComponent, Suspense} from 'react';
import { createResource } from '../../api';
import Grid from '../../components/Grid';

const resource = createResource();

const Movies: FunctionComponent = ({ children }) => {

  return (
    <>
      <h2 className="text-inter-2xl text-white mb-5">Popular movies</h2>

      <Suspense fallback={<h1>Loading movies</h1>}>
        <Grid collection={resource.popularMovies.read()} />
      </Suspense>
    </>
    
  );
};

export default Movies;
