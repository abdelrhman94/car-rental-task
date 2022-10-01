import React from 'react';

import { SearchIcon, BellIcon, MenuIcon } from '../assets/icons';

const Header = () => {
  return (
    <header className='z-40 py-2 bg-white shadow-bottom'>
      <div className='container flex items-center justify-between h-full px-6 mx-auto text-purple-600'>
        <button
          className='p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple'
          aria-label='Menu'
        >
          <MenuIcon className='w-6 h-6' aria-hidden='true' />
        </button>
        <div className='flex flex-1 lg:mr-32'>
          <div className='relative w-full max-w-xl mr-6 focus-within:text-purple-500'>
            <div className='absolute inset-y-0 flex items-center pl-2'>
              <SearchIcon className='w-4 h-4' aria-hidden='true' />
            </div>
            <input
              className='pl-8 text-gray-700'
              style={{
                backgroundColor: '#F5F4F6',
                borderRadius: '8px',
                height: '40px',
              }}
              placeholder='Search or type'
              aria-label='Search'
            />
          </div>
        </div>
        <ul className='flex items-center flex-shrink-0 space-x-6'>
          {/* <!-- Notifications menu --> */}
          <li className='relative'>
            <button
              className='relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple'
              aria-label='Notifications'
              aria-haspopup='true'
            >
              <BellIcon className='w-5 h-5' aria-hidden='true' />
            </button>
          </li>
          {/* <!-- Profile menu --> */}
          <li className='relative'>
            <img
              className=' h-10 w-10 rounded-full ring-2 ring-white'
              src='profile-02.png'
              alt=''
              aria-hidden='true'
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
