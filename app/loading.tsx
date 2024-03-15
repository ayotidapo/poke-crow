import React from 'react';

const loading = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <span className='border-4 inline-block border-cyan-400 rounded-full h-20 w-20 border-t-transparent border-b-transparent animate-spin'></span>
    </div>
  );
};

export default loading;
