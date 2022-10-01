import React from 'react';
import { NavLink } from 'react-router-dom';
import navLinks from '../assets/dummy-data/navLinks';
import { SettingsIcon, LogOutIcon } from '../assets/icons/';
import * as Icons from '../assets/icons/';
function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}
const Sidebar = () => {
  return (
    <aside className='z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white  lg:block'>
      <div className='py-4 text-gray-500'>
        <div className='ml-6 text-lg font-bold text-gray-800 flex'>
          <div className='mx-2'>
            <svg
              width='27'
              height='27'
              viewBox='0 0 27 27'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                y='0.0751953'
                width='26.914'
                height='26.85'
                rx='6'
                fill='#A162F7'
              />
              <path
                d='M9.1273 19.7072L10.8492 17.9853C6.48698 15.345 7.21403 11.3367 8.12284 9.66258L13.5039 14.9002L18.885 9.66258C20.9513 14.1396 17.8805 17.0287 16.0868 17.9136L17.9523 19.7072C24.6248 14.6849 21.3961 7.94063 18.885 6.0752L13.5039 11.4563L7.97934 6.0752C2.09602 11.815 6.25741 18.2723 9.1273 19.7072Z'
                fill='white'
              />
            </svg>
          </div>
          <div>Motiv.</div>
        </div>

        <ul className='mt-6 '>
          {navLinks.map((item, index) => (
            <li className='relative px-6 py-3' key={index}>
              <NavLink
                to={item.path}
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800'
              >
                <Icon className='w-5 h-5' aria-hidden='true' icon={item.icon} />

                <span className='ml-4'>{item.display}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='relative px-6 py-3 '>
        <div className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800'>
          <SettingsIcon className='w-5 h-5' aria-hidden='true' />
          <span className='ml-4'>Settings</span>
        </div>
        <div className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800'>
          <LogOutIcon className='w-5 h-5' aria-hidden='true' />
          <span className='ml-4'>Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
