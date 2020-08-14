import React, { FunctionComponent} from 'react';
import ItemCard from '../MediaCard';

type Props = {
  collection?: any,
  itemType: "movie" | "show",
}

const Grid: FunctionComponent<Props> = ({ collection, itemType }) => {
  
  return (
    <div className="flex flex-wrap justify-around">
      { collection.results.map((item: any) => <ItemCard item={item} itemType={itemType} key={item.id} />)}
    </div>
  );
};

export default Grid;
