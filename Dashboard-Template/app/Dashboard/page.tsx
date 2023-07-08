'use client';

import React from 'react';
import CardWrapper from '../components/card-wrapper';
import InnerLayout from '../components/inner-layout';
import { cardItems } from './constants/card-items';
import InfoCards from './patterns/info-cards';

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <InnerLayout>
        <div className="flex w-full justify-around">
          {cardItems.map((card) => (
            <CardWrapper
              className="w-64 h-40"
              padding="xs"
              key={card.id}
              type={card.id}
            >
              <InfoCards data={card} />
            </CardWrapper>
          ))}
        </div>
      </InnerLayout>
    </div>
  );
};

export default Dashboard;
