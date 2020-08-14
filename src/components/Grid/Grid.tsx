import React, { FunctionComponent} from 'react';
import MediaCard from '../MediaCard';

type Props = {
  collection?: any,
  itemType: "movie" | "show",
}

const Grid: FunctionComponent<Props> = ({ collection, itemType }) => {
  
  return (
    <div className="flex flex-wrap justify-around">
      { collection.results.map((item: any) => <MediaCard item={item} itemType={itemType} key={item.id} />)}
    </div>
  );
};

export default Grid;
