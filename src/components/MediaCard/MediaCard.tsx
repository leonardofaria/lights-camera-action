import React, { FunctionComponent} from 'react';
import { 
  Link
} from "react-router-dom";
import { IMAGE_PATH, IMAGE_SIZE } from '../../constants';

type Props = {
  item: any,
  mediaType: "movie" | "show" | "trending",
}

const ItemCard: FunctionComponent<Props> = ({ item, mediaType }) => {
  const path = mediaType === "trending" ? item.media_type.replace("tv", "show") : mediaType;
  return (
    <Link to={`/${path}s/${item.id}`}>
      <img src={`${IMAGE_PATH}/${IMAGE_SIZE}/${item.poster_path}`} alt={item.title} />
    </Link>
  );
};

export default ItemCard;
