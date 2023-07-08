import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useMemo, ReactNode } from 'react';
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import UserBio from './user-bio';
import { menuItems } from '@/app/Menu/constants/menu-items';
import { Heading } from '@/app/components/heading';
import { IMenuItem } from '../constants/interfaces';

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const pathname = usePathname();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === pathname),
    [pathname]
  );

  const wrapperClasses = classNames(
    'h-screen px-4 pt-8 pb-4  bg-orange-100 flex items-center relative justify-between flex-col',
    {
      ['w-72']: !toggleCollapse,
      ['w-24']: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    'p-4 rounded bg-light-lighter absolute right-7 -top-12',
    {
      'absolute right-1 rotate-180': toggleCollapse,
    }
  );

  const getNavItemClasses = (menu: IMenuItem) => {
    return classNames(
      'flex items-center justify-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap',
      {
        ['bg-orange-400']: activeMenu?.id === menu.id,
        ['hover:bg-orange-400']: menu.active,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
    >
      <div className="flex items-center mb-12">
        <div className="h-9 w-2 mr-4 bg-amber-300" />
        <Heading size={toggleCollapse ? 'xs' : 'lg'}>Manage Courses</Heading>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between relative">
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <Bars3Icon height={25} width={25} />
            </button>
          )}
          <div className="flex items-center pl-1 gap-4">
            <UserBio collapsed={toggleCollapse} />
          </div>
        </div>

        <div className="w-full justify-center flex flex-col mt-20">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={menu.id}>
                <Link href={menu.active ? menu.link : '#'}>
                  <div className="flex py-4 px-3 items-center w-full h-full">
                    <div
                      style={{ width: '1.5rem' }}
                      className="flex items-center justify-center"
                    >
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          'text-md font-medium text-light text-center ml-5'
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`px-3 py-4 flex justify-center items-center`}>
        <div style={{ width: '2.5rem' }}>
          <ArrowRightOnRectangleIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames('text-md font-medium text-text-light')}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
