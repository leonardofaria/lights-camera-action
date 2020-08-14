import React, { FunctionComponent} from 'react';
import { 
  NavLink
} from "react-router-dom";

const linkClassName:string = 'uppercase border-b-2 border-black text-inter-sm text-white font-bold py-3 mr-8 opacity-75 hover:opacity-100 transition duration-300 ease-in-out';

const Layout: FunctionComponent = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 font-inter">
      <header className="bg-black bg-opacity-75 fixed z-10 w-full border-gray-700 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-inter-3xl text-white h-16 flex items-center">
            Lights, camera, action
          </div>

          <ul className="w-full flex flex-row h-12 items-end">
            <li className="h-12 flex items-end">
              <NavLink activeClassName="border-white" className={linkClassName} to="/" exact>
                Dashboard
              </NavLink>
            </li>
            <li className="h-12 flex items-end">
              <NavLink activeClassName="border-white" className={linkClassName} to="/movies">
                Movies
              </NavLink>
            </li>
            <li className="h-12 flex items-end">
              <NavLink activeClassName="border-white" className={linkClassName} to="/shows">
                Shows
              </NavLink>
            </li>
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
