import {
  HomeIcon,
  BookmarkIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  DocumentChartBarIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import { IMenuItem } from './interfaces';

export const menuItems: IMenuItem[] = [
  { id: 1, label: 'Home', icon: HomeIcon, link: '/Dashboard', active: true },
  {
    id: 2,
    label: 'Course',
    icon: BookmarkIcon,
    link: '/course',
    active: false,
  },
  {
    id: 3,
    label: 'Students',
    icon: AcademicCapIcon,
    link: '/Students',
    active: true,
  },
  {
    id: 4,
    label: 'Payment',
    icon: CurrencyDollarIcon,
    link: '/payment',
    active: false,
  },
  {
    id: 5,
    label: 'Report',
    icon: DocumentChartBarIcon,
    link: '/report',
    active: false,
  },
  {
    id: 6,
    label: 'Settings',
    icon: AdjustmentsHorizontalIcon,
    link: '/settings',
    active: false,
  },
];
