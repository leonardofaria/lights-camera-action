import React, { useState, FunctionComponent} from 'react';
import { 
  Link
} from "react-router-dom";
import { IMAGE_PATH, IMAGE_SIZE } from '../../constants';

type Props = {
  item: any,
  mediaType: "movie" | "show" | "trending",
}

const MediaCard: FunctionComponent<Props> = ({ item, mediaType }) => {
  const type = mediaType === "trending" ? item.media_type.replace("tv", "show") : mediaType;
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <Link className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4" to={`/${type}s/${item.id}`} onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
      <div className="relative m-5 _nmp_ -nmp_src--lt -nmp_light--gray-600 -nmp_shadow--gray-600 -nmp_dist--xs rounded-lg overflow-hidden">
        { 
          showDetails && 
          <div className="absolute w-full h-full bg-black bg-opacity-75 color-white flex items-center justify-center">
            <span className="text-xl p-4">{ type === "movie" ? item.title : item.name }</span>
          </div>
        }
        <img className="w-full h-auto" src={`${IMAGE_PATH}/${IMAGE_SIZE}/${item.poster_path}`} alt={item.title} />
      </div>
    </Link>
  );
};

export default MediaCard;
