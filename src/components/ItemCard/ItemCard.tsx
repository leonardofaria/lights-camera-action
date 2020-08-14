import React, { FunctionComponent} from 'react';
import { 
  Link
} from "react-router-dom";
import { IMAGE_PATH, IMAGE_SIZE } from '../../constants';

type Props = {
  item: any,
  itemType: "movie" | "show",
}

const ItemCard: FunctionComponent<Props> = ({ item, itemType }) => {
  return (
    <Link to={`/${itemType}s/${item.id}`}>
      <img src={`${IMAGE_PATH}/${IMAGE_SIZE}/${item.poster_path}`} alt={item.title} />
    </Link>
  );
};

export default ItemCard;
