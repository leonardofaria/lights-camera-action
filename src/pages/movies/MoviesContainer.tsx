import React, { FunctionComponent, Suspense} from 'react';
import Grid from '../../components/Grid';

type Props = {
  resource?: any,
}

const MoviesContainer: FunctionComponent<Props> = ({ resource }) => {
  
  return (
    <>
      <Suspense fallback={<h1>Loading movies</h1>}>
        <Grid collection={resource.fetchData.read()} />
      </Suspense>
    </>
    
  );
};

export default MoviesContainer;
