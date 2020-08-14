import React, { FunctionComponent} from 'react';
import { FiLoader } from "react-icons/fi";

type Props = {
  message?: String,
}

const Loader: FunctionComponent<Props> = ({ message }) => {
  
  return (
    <div className="flex items-center text-white text-inter-2xl text-white mb-5">
      <FiLoader />
      <span className="ml-2">{ message }</span>
    </div>
  );
};

export default Loader;
