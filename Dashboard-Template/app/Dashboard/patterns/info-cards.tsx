import { Text } from '@/app/components/text';
import { ICardItem, IColors } from '@/app/Dashboard/constants/interfaces';
import {
  AcademicCapIcon,
  BookmarkIcon,
  CurrencyDollarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React from 'react';

interface IInfoCards {
  data: ICardItem;
}

const iconsTypes: Record<string, React.ElementType> = {
  AcademicCapIcon,
  BookmarkIcon,
  CurrencyDollarIcon,
  UserIcon,
};

const bgColors: IColors = {
  1: 'bg-blue-50',
  2: 'bg-pink-50',
  3: 'bg-yellow-50',
  4: 'bg-amber-500',
};

const iconColors: IColors = {
  1: 'text-blue-500',
  2: 'text-pink-500',
  3: 'text-yellow-500',
  4: 'text-white',
};

const iconIndex: Record<number, keyof typeof iconsTypes> = {
  1: 'AcademicCapIcon',
  2: 'BookmarkIcon',
  3: 'CurrencyDollarIcon',
  4: 'UserIcon',
};

const InfoCards = ({ data }: IInfoCards) => {
  const infoCardClasses = classNames('h-full w-full', {
    [bgColors[data.id]]: data,
  });

  const infoCardIconClasses = classNames('w-10 h-10', {
    [iconColors[data.id]]: data,
  });

  const IconComponent = iconsTypes[iconIndex[data.id]];

  return (
    <div className={infoCardClasses}>
      <main>
        <div className={infoCardIconClasses}>
          <IconComponent />
        </div>
        <div className="mt-2">
          <Text color={data.id === 4 ? 'white' : 'lightGray'}>
            {data.label}
          </Text>
        </div>
      </main>
      <footer className="flex justify-end mt-5">
        <Text size="xl2" weight="bold">
          {data.value}
        </Text>
      </footer>
    </div>
  );
};

export default InfoCards;
