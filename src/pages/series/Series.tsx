import React, { FunctionComponent, Suspense} from 'react';
import { createResource } from '../../api';
import Grid from '../../components/Grid';

const resource = createResource();

const Shows: FunctionComponent = ({ children }) => {

  return (
    <>
      <h2 className="text-inter-2xl text-white mb-5">Popular shows</h2>

      <Suspense fallback={<h1>Loading shows</h1>}>
        <Grid collection={resource.popularShows.read()} />
      </Suspense>
    </>
    
  );
};

export default Shows;
