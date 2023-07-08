import React from 'react';
import { BackwardIcon, BellAlertIcon } from '@heroicons/react/24/outline';

const TopBar = () => {
  return (
    <div className="w-full flex justify-between text-gray-400 h-16 px-10 py-5">
      <BackwardIcon className="w-5 h-5" />
      <BellAlertIcon className="w-5 h-5" />
    </div>
  );
};

export default TopBar;
