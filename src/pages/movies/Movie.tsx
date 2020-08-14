import React, { FunctionComponent, Suspense } from 'react';
import { createResource } from '../../api/suspense';
import Loader from '../../components/Loader';

import { RouteComponentProps, withRouter } from 'react-router-dom';

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

const test = (id: String) => {

  return createResource(`movie/${id}`, '');
}

type Props = {
  item?: any,
}

const Movies: FunctionComponent<Props> = ({ children, item }) => {
  // const item = test(match.params.id).fetchData.read();
  console.dir(item.fetchData.read());
  return (
    <>
      <h2 className="text-inter-2xl text-white mb-5">Popular movies</h2>

      <Suspense fallback={<Loader message="Loading movie" />}>
        Hi
      </Suspense>
    </>
    
  );
};

export default Movies;
