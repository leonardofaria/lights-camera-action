import React, { FunctionComponent} from 'react';
import ItemCard from '../ItemCard';

type Props = {
  collection?: any,
}

const Grid: FunctionComponent<Props> = ({ collection }) => {
  
  return (
    <div className="flex flex-wrap">
      { collection.map((movie: any) => <ItemCard movie={movie} key={movie.id} />)}
    </div>
  );
};

export default Grid;
