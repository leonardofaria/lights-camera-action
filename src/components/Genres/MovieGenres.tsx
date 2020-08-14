import React, { FunctionComponent} from 'react';
import { Link } from 'react-router-dom';
// import { useAPI } from '../../api/context';
import { IGenre } from '../../api/types';

type Props = {
  genres?: IGenre[],
  mediaType: "movie" | "show",
}

const MovieGenres: FunctionComponent<Props> = ({ genres, mediaType }) => {
  // const contextAPI = useAPI();  
  // console.dir(contextAPI?.showsGenres);

  return (
    <div className="flex flex-wrap my-3">
      { genres?.map((genre) => 
        <Link className="flex items-center bg-teal-500 rounded-md mr-2 py-1 px-3 uppercase font-bold text-inter-sm" to={`/${mediaType}s/explore?id=${genre.id}`}>
          {genre.name}
        </Link>
      )}
    </div>
  );
};

export default MovieGenres;
