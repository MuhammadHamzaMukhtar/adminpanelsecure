import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Reviews',
    path: '/projects',
    icon: <Icon icon="lucide:star" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Shop Reviews', path: '/reviews' },
      { title: 'Product Reviews', path: '/products-reviews' },
      { title: 'Invitations', path: '/invitations' },
      { title: 'Insights', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Profile',
    path: '/messages',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Appearance', path: '/profile/appearance' },
      { title: 'Reviews', path: '/settings/account' },
      { title: 'Entrepreneur', path: '/settings/account' },
      { title: 'Identity', path: '/settings/account' },
      { title: 'Quality Mark', path: '/settings/account' },
      { title: 'Security', path: '/settings/privacy' },
      // { title: 'Privacy', path: '/settings/privacy' },
      // { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Installation',
    path: '/settings',
    icon: <Icon icon="lucide:wrench" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Automatic Reviews', path: '/settings/account' },
      { title: 'Side Bar', path: '/settings/account' },
      { title: 'Widgets', path: '/settings/account' },
      { title: 'Banners', path: '/settings/account' },
      { title: 'API for developers', path: '/settings/account' },
    ],
  },
  {
    title: 'Extra Services',
    path: '/help',
    icon: <Icon icon="lucide:megaphone" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Telephone Services', path: '/settings/account' },
      { title: 'Offline & Print', path: '/settings/account' },
      { title: 'Document Templates', path: '/settings/account' },
      { title: 'Member Benefits', path: '/settings/account' },
    ],
  },
  {
    title: 'API',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
  {
    title: 'Answering Service',
    path: '/help',
    icon: <Icon icon="lucide:phone" width="24" height="24" />,
  },
  {
    title: 'Offers',
    path: '/help',
    icon: <Icon icon="lucide:dollar-sign" width="24" height="24" />,
  },
  {
    title: 'Account',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
  {
    title: 'Logout',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
