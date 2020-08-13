import React, { FunctionComponent} from 'react';

const Layout: FunctionComponent = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="bg-black fixed z-10 w-full border-gray-700 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-3xl text-white h-16 flex items-center">
            Lights, camera, action
          </div>

          <ul className="w-full flex flex-row h-12 items-end">
            <li className="h-12 flex items-end"><a className="uppercase border-b-2 border-white text-white font-bold py-3 mr-6 text-sm opacity-75 hover:opacity-100 transition duration-300 ease-in-out" href="movies">Movies</a></li>
            <li className="h-12 flex items-end"><a className="uppercase border-b-2 border-black text-white font-bold py-3 mr-6 text-sm opacity-75 hover:opacity-100 transition duration-300 ease-in-out" href="tv-shows">TV Shows</a></li>
          </ul>    

        </div>
      </header>
      
      <main className="flex-1 w-full mt-32 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 text-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
