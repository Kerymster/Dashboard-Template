import React from 'react';

const TitleBar = () => {
  return (
    <div className="flex py-4 px-2 text-sm text-gray-500 gap-10">
      <div className="w-2/12 text-center">Name</div>
      <div className="w-2/12">Email</div>
      <div className="w-1/12">Phone</div>
      <div className="w-2/12">Website</div>
      <div className="w-2/12">Company Name</div>
      <div className="w-2/12"></div>
    </div>
  );
};

export default TitleBar;
