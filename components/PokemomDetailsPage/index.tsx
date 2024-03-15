'use client';

import React from 'react';
import Image from 'next/image';
import './details.css';

interface Props {
  data: {
    name: string;
    height: string;
    weight: string;
    image: string;
    description: string;
    type: string;
    ability: string;
    rank: string;
    stats: { name: string; value: string; effort: string }[];
  };
}
const DetailsPage: React.FC<Props> = ({ data }) => {
  return (
    <div className='details'>
      <div className='md:w-[70%] xxs:w-[90%] bg-white rounded-md p-10 md:pt-10 xxs:pt-5 mt-10 min-h-[550px]'>
        <section className='flex justify-between items-center md:flex-row xxs:flex-col-reverse'>
          <div className='capitalize '>
            <h2 className='text-2xl font-semibold mb-2'>{data.name}</h2>
            <h6 className='font-semibold text-stone-500 flex items-center'>
              <Image
                src='/category.svg'
                width={20}
                height={20}
                alt='category-icon'
                className='inline-block text-stone-500 mr-1 '
              />
              {data.type}
            </h6>
          </div>

          <div className=' image_div '>
            <Image src={data?.image || ''} alt='' width={200} height={200} />
          </div>
        </section>
        <section className='flex gap-4 my-10 md:flex-row  xxs:flex-col'>
          <div className='flex-1 '>
            <h6 className='text-amber-500 font-semibold'>Height</h6>
            <span>{data.height}</span>
          </div>
          <div className='flex-1'>
            <h6 className='text-amber-500 font-semibold'>Weight</h6>
            <span>{data.weight}</span>
          </div>
          <div className='flex-1'>
            <h6 className='text-amber-500 font-semibold'>Ability</h6>
            <span>{data.ability}</span>
          </div>
          <div className='flex-1'>
            <h6 className='text-amber-500 font-semibold'>Rank</h6>
            <span>{`#${data.rank}`}</span>
          </div>
        </section>
        <p className='text-sm text-gray-500'>
          {`${data.name}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
        </p>
        <section className='mt-10'>
          <h2 className='font-semibold text-rose-800'>STATS:</h2>
          <div className='flex gap-4 md:flex-row xxs:flex-col'>
            {data.stats.map(({ name, value }) => (
              <div key={name}>
                <span className='capitalize text-amber-600 '>{name} </span>:{' '}
                <span className='text-slate-500 text-lg font-bold'>
                  {value}{' '}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailsPage;
