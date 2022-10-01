import React from 'react';
import Router from '../routes/Router';
import Sidebar from '../components/Sidebar';
// import TopNav from '../TopNav/TopNav';

const Layout = () => {
  return (
    <div className='flex h-screen bg-gray-50'>
      <Sidebar />
      <div className='flex flex-col flex-1 w-full'>
        {/* <TopNav /> */}

        <div className=''>
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
