import React, { FunctionComponent} from 'react';
import MediaCard from '../MediaCard';

type Props = {
  collection?: any,
  mediaType: "movie" | "show" | "trending",
}

const Grid: FunctionComponent<Props> = ({ collection, mediaType }) => {
  
  return (
    <div className="flex flex-wrap justify-around">
      { collection.results.map((item: any) => <MediaCard item={item} mediaType={mediaType} key={item.id} />)}
    </div>
  );
};

export default Grid;
