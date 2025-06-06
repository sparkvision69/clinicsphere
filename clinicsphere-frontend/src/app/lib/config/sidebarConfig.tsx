'use client';
import { FaTachometerAlt, FaUsers, FaSignOutAlt, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { JSX } from 'react';

export interface SubmenuItem {
  name: string;
  href: string;
  icon: JSX.Element;
}

export interface NavItem {
  name: string;
  href?: string;
  icon: JSX.Element;
  submenu?: SubmenuItem[];
}

export const iconColors = {
  dashboard: '#6366f1',
  users: '#10b981',
  company: '#8b5cf6',
  plans: '#f59e0b',
  logout: '#ef4444',
};

export const adminNavItems: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: <FaTachometerAlt className="w-5 h-5" style={{ color: iconColors.dashboard }} />,
  },
  {
    name: 'Company',
    href: '/admin/company',
    icon: <FaBuilding className="w-5 h-5" style={{ color: iconColors.company }} />,
  },
  {
    name: 'Branches',
    icon: <FaMapMarkerAlt className="w-5 h-5" style={{ color: iconColors.company }} />,
    submenu: [
      {
        name: 'Branches',
        href: '/admin/branches',
        icon: <FaMapMarkerAlt className="w-4 h-4" style={{ color: iconColors.company }} />,
      },
      {
        name: 'Doctors',
        href: '/admin/branches/doctors',
        icon: <FaUsers className="w-4 h-4" style={{ color: iconColors.users }} />,
      },
      {
        name: 'Patients',
        href: '/admin/branches/patients',
        icon: <FaUsers className="w-4 h-4" style={{ color: iconColors.users }} />,
      },
    ],
  },
  {
    name: 'Users',
    icon: <FaUsers className="w-5 h-5" style={{ color: iconColors.users }} />,
    submenu: [
      {
        name: 'All Users',
        href: '/admin/users',
        icon: <FaUsers className="w-4 h-4" style={{ color: iconColors.users }} />,
      },
      {
        name: 'Admins',
        href: '/admin/admins',
        icon: <FaUsers className="w-4 h-4" style={{ color: iconColors.users }} />,
      },
    ],
  },
  {
    name: 'Plans',
    href: '/admin/plans',
    icon: <RiExchangeDollarFill className="w-5 h-5" style={{ color: iconColors.plans }} />,
  },
  {
    name: 'My Profile',
    href: '/admin/profile',
    icon: <CgProfile className="w-5 h-5" style={{ color: '#e09326' }} />,
  },
];

export const doctorNavItems: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/doctor',
    icon: <FaTachometerAlt className="w-5 h-5" style={{ color: iconColors.dashboard }} />,
  },
];

export const patientNavItems: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/patient',
    icon: <FaTachometerAlt className="w-5 h-5" style={{ color: iconColors.dashboard }} />,
  },
];

export const logoutItem: NavItem = {
  name: 'Logout',
  href: '/auth/logout',
  icon: <FaSignOutAlt className="w-5 h-5" style={{ color: iconColors.logout }} />,
};