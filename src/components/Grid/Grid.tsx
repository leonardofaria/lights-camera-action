import React, { FunctionComponent} from 'react';
import ItemCard from '../ItemCard';

type Props = {
  collection?: any,
  itemType: "movie" | "show",
}

const Grid: FunctionComponent<Props> = ({ collection, itemType }) => {
  
  return (
    <div className="flex flex-wrap">
      { collection.map((item: any) => <ItemCard item={item} key={item.id} />)}
    </div>
  );
};

export default Grid;
