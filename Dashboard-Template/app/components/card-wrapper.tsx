import React, { ReactNode } from 'react';
import { IColors } from '../Dashboard/constants/interfaces';

const bgColors: IColors = {
  1: 'bg-blue-50',
  2: 'bg-pink-50',
  3: 'bg-yellow-50',
  4: 'bg-amber-500',
  5: 'bg-white',
};

const paddingClassNames = {
  xs: 'p-4', // 16px
  sm: 'p-8', // 32px
  md: 'p-12', // 48px
  lg: 'p-16', // 64px
};

interface CardWrapperProps {
  type?: number;
  children: ReactNode;
  className?: string;
  padding?: keyof typeof paddingClassNames;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  type = 5,
  children,
  className,
  padding = 'sm',
}) => {
  const cardClasses = `flex flex-col items-center justify-center border border-gray-100 rounded-md shadow p-4 ${className} ${paddingClassNames[padding]} ${bgColors[type]} `;

  return <div className={cardClasses}>{children}</div>;
};

export default CardWrapper;
