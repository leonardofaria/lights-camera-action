import React, { useState, FunctionComponent} from 'react';
import { 
  Link
} from "react-router-dom";
import { IMAGE_PATH, IMAGE_SIZE } from '../../constants';

type Props = {
  item: any,
  mediaType: "movie" | "show" | "trending",
}

const ItemCard: FunctionComponent<Props> = ({ item, mediaType }) => {
  const type = mediaType === "trending" ? item.media_type.replace("tv", "show") : mediaType;
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <Link className="relative" to={`/${type}s/${item.id}`} onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
      { 
        showDetails && 
        <div className="absolute w-full h-full bg-black bg-opacity-50 color-white flex p-4 text-xl items-center text-center">
          { type === "movie" ? item.title : item.name }
        </div>
      }
      <img src={`${IMAGE_PATH}/${IMAGE_SIZE}/${item.poster_path}`} alt={item.title} />
    </Link>
  );
};

export default ItemCard;
