import React, { useContext, useState, useEffect, createContext } from 'react';
import { fetchAPIData } from './api';

export interface AppContextInterface {
  showsGenres: any | null,
  moviesGenres: any | null;
}

const APIContext = createContext<AppContextInterface | null>(null);

export function APIContextProvider({ children }: any) {
  const [showsGenres, setShowsGenres] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);

  useEffect(() => {
    fetchAPIData('genre/tv/list', null).then(
      (response: any) => {
        setShowsGenres(response);
      }
    );

    fetchAPIData('genre/movie/list', null).then(
      (response: any) => {
        setMoviesGenres(response);
      }
    );
  }, []);

  return (
    <APIContext.Provider
      value={{
        showsGenres,
        moviesGenres,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
