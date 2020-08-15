import React, { FunctionComponent} from 'react';
import { 
  NavLink,
  useHistory,
} from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useFormFields } from '../../hooks/use-form-fields';

export interface Search {
  query: string;
}

const linkClassName:string = 'uppercase border-b-2 border-black text-inter-sm sm:text-inter-base text-white font-bold py-3 mr-8 opacity-75 hover:opacity-100 transition duration-300 ease-in-out';

const Layout: FunctionComponent = ({ children }) => {
  const history = useHistory();

  const [inputs, handleInputChange] = useFormFields<Search>({
    query: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { query } = inputs;
    history.push(`/search/${query}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 font-inter">
      <header className="bg-black bg-opacity-75 fixed z-10 w-full border-gray-700 border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-inter-xl lg:text-inter-3xl text-white h-16 flex items-center flex-shrink-0 mr-2">
              Lights, camera, action
            </div>

            <form className="relative w-64" onSubmit={handleSubmit}>
              <input name="query" type="text" onChange={handleInputChange} className="bg-gray-500 focus:bg-gray-200 transition duration-300 ease-in-out shadow rounded border-gray-900 w-full p-3" placeholder="Search + <enter>" />
              <button type="submit" className="absolute right-0 top-0 m-4">
                <FiSearch className="h-4 text-dark" />              
              </button>
            </form>
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
      
      <main className="flex-1 w-full mt-32 max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
