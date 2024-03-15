'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/normal`)}>
      <Image
        src='/logo.png'
        alt='logo'
        width={100}
        height={50}
        className='cursor-pointer'
      />
    </div>
  );
};

export default Logo;
