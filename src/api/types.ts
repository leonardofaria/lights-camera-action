export interface IGenre {
  id: string,
  name: string,
}

export interface IMovie {
  title: string,
  genres: IGenre[],
  poster_path: string,
  overview: string,
}

export interface IShow {
  name: string,
  title: string,
  genres: IGenre[],
  poster_path: string,
  overview: string,
}
