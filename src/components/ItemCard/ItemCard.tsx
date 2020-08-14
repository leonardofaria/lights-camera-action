import React, { FunctionComponent} from 'react';
import { 
  Link
} from "react-router-dom";

type Props = {
  item: any,
  itemType: "movie" | "show",
}

const imagePath = 'https://image.tmdb.org/t/p/';
const imageSize = 'w185';

const ItemCard: FunctionComponent<Props> = ({ item, itemType }) => {
  return (
    <Link to={`/${itemType}s/${item.id}`}>
      <img src={`${imagePath}/${imageSize}/${item.poster_path}`} alt={item.original_title} />
    </Link>
  );
};

export default ItemCard;
