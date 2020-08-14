import React, { useState, useEffect, FunctionComponent } from 'react';
import Loader from '../../components/Loader';
import { fetchAPIData } from '../../api/api';

import { IShow } from '../../api/types';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import ItemPage from '../../components/ItemPage';

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> { }

const Show: FunctionComponent<MatchProps> = ({ children, match }) => {
  const [show, setShow] = useState<IShow | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAPIData(`tv/${match.params.id}`, null).then(
      (response: IShow) => {
        setShow(response);
        setLoading(false);
      }
    );    
  }, [match.params.id]);

  if (loading) {
    return (<Loader message="Loading show" />)
  }

  return (
    <ItemPage itemType="show" item={show} />
  );
};

export default withRouter(Show);
