import React, { FunctionComponent, Suspense} from 'react';
import { createResource } from '../../api';
import Grid from '../../components/Grid';
import Loader from '../../components/Loader';

const resource = createResource('trending/all/week', null);

const Dashboard: FunctionComponent = ({ children }) => {

  return (
    <>
      <h2 className="text-inter-2xl text-white mb-5">Trending</h2>

      <Suspense fallback={<Loader message="Loading trending" />}>
        <Grid collection={resource.fetchData.read()} />
      </Suspense>
    </>
    
  );
};

export default Dashboard;
