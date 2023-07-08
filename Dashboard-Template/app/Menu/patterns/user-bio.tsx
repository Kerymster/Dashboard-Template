import { Text } from '@/app/components/text';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

interface IUserBio {
  collapsed?: boolean;
}

const UserBio = ({ collapsed = false }: IUserBio) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full min-h-fit flex items-center justify-center">
        <Image
          className="rounded-full object-cover"
          height={10}
          width={100}
          src="/admin.png"
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <Text
          size={collapsed ? 'md' : 'xl'}
          weight="medium"
          addedClasses="block"
        >
          Harold Finch
        </Text>
        <Text
          size={collapsed ? 'xs' : 'md'}
          addedClasses="block"
          color="warning"
        >
          Admin of Admins
        </Text>
      </div>
    </div>
  );
};

export default UserBio;
