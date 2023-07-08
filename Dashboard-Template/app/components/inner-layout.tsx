import React, { ReactNode } from 'react';
import TopBar from '../Dashboard/patterns/top-bar';

import Sidebar from '../Menu/patterns/side-bar';

interface IInnerLayout {
  children: ReactNode;
}

export const InnerLayout = ({ children }: IInnerLayout) => {
  return (
    <div className="h-screen w-full flex flex-row justify-start">
      <Sidebar />
      <div className="w-full">
        <TopBar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default InnerLayout;
