import React, { FunctionComponent} from 'react';

type Props = {
  movie?: any,
}

const imagePath = 'https://image.tmdb.org/t/p/';
const imageSize = 'w185';

const ItemCard: FunctionComponent<Props> = ({ movie }) => {
  return (
    <span>
      <img src={`${imagePath}/${imageSize}/${movie.poster_path}`} alt={movie.original_title} />
    </span>
  );
};

export default ItemCard;
