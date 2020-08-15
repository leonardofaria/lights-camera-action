import React, { FunctionComponent, Suspense} from 'react';
import { createResource } from '../../api/suspense';
import Grid from '../../components/Grid';
import Loader from '../../components/Loader';

const resource = createResource('tv/popular', null);

const Shows: FunctionComponent = ({ children }) => {

  return (
    <>
      <h2 className="text-inter-3xl text-white mb-8">Popular shows</h2>

      <Suspense fallback={<Loader message="Loading popular shows" />}>
        <Grid collection={resource.fetchData.read()} mediaType="show" />
      </Suspense>
    </>
    
  );
};

export default Shows;
