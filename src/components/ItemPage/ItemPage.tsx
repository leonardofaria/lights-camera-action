import React, { FunctionComponent} from 'react';
import { IMAGE_PATH, IMAGE_SIZE } from '../../constants';
import { MovieGenres } from '../Genres';

type Props = {
  item?: any,
  mediaType: "movie" | "show",
}

const ItemPage: FunctionComponent<Props> = ({ item, mediaType }) => {
  
  return (
    <section className="flex">
      <div className="w-full sm:w-1/2 md:w-1/3">
        <div className="mr-6">
          <img src={`${IMAGE_PATH}/${IMAGE_SIZE}/${item?.poster_path}`} alt={item?.title} className="w-full h-auto" />
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-2/3">
        <h2 className="text-inter-3xl text-white mb-5">{item?.title}{item?.name}</h2>

        <MovieGenres genres={item?.genres} mediaType={mediaType} />

        <p>{item?.overview}</p>

      </div>
    </section>
  );
};

export default ItemPage;
