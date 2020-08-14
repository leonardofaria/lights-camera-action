import React, { FunctionComponent, Suspense} from 'react';
import { createResource } from '../../api';
import Grid from '../../components/Grid';

const resource = createResource('trending/all/week', null);

const Dashboard: FunctionComponent = ({ children }) => {

  return (
    <>
      <h2 className="text-inter-2xl text-white mb-5">Trending</h2>

      <Suspense fallback={<h1>Loading trending</h1>}>
        <Grid collection={resource.fetchData.read()} />
      </Suspense>
    </>
    
  );
};

export default Dashboard;
