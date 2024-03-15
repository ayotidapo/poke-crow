/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useContext, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import Button from '@/components/Button';
import { PokemonContext } from '@/PokemanProvider';

import './category.css';
import { getPokemonByName } from '@/utils/request';

interface Category {
  name: string;
  url: string;
}

interface Props {
  categories: Category[];
  pokemons: any;
}

const CategoryPage: React.FC<Props> = ({ categories, pokemons }) => {
  const { setState, state } = useContext(PokemonContext);
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  let pathname = usePathname();

  const { allpokemons, filtered } = state;

  const searchQuery = useSearchParams();

  const limitString = searchQuery.get('limit') || 25;
  const limit = Number(limitString);

  const paginateFn = (offset: number = 0, limitEnd = 25) => {
    const typePokemons = pokemons.pokemon;

    const filterPokemon = typePokemons.slice(offset, limitEnd);
    console.log({ typePokemons, filterPokemon });
    setState((state) => ({
      ...state,
      allpokemons: typePokemons,
      filtered: filterPokemon,
    }));
  };

  const onChangePage = (selectedItem: { selected: number }) => {
    const { selected } = selectedItem;
    const offset = selected * limit;
    const page = selected + 1;
    const limitEnd = page * limit;
    paginateFn(offset, limitEnd);
    window.scrollTo(0, -70);
    console.log(selected);
  };

  const noOfPage = Math.ceil(allpokemons.length / Number(limit));

  useEffect(() => {
    if (!searchValue) paginateFn();
  }, [searchValue]);

  const onSearch = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => {
    e?.preventDefault();
    try {
      const { data } = await getPokemonByName(searchValue);
      const { id, name } = data;
      setState((state) => ({
        ...state,
        filtered: [
          {
            pokemon: {
              name,
              id,
              url: `https://pokeapi.co/api/v2/pokemon/25/${id}`,
            },
          },
        ],
      }));
    } catch (e) {
      setState((state) => ({
        ...state,
        filtered: [],
      }));
    }
  };

  return (
    <div className='category_'>
      <div className=' p-5 pr-0 bg-[#A5F3FC] mb-4'>
        <div className='w-[80%] '>
          <h2 className='mb-3 text-2xl text-slate-700'>Categories</h2>
          <div className='flex flex-wrap   gap-4'>
            {categories.map(({ name }, i) => (
              <Button
                key={i}
                onClick={() => router.push(`/${name}`)}
                className={`/${name}` === pathname ? 'active' : ''}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <section className='md:w-[80%] flex flex-col mx-auto xxs:w-full'>
        <form className='flex  self-end my-3 rounded-md overflow-hidden border border-slate-100'>
          <input
            className='input-search'
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button onClick={onSearch} className='search_btn'>
            search
          </Button>
        </form>

        <div className='wrapper'>
          {filtered.length < 1 && searchValue ? (
            <div className='pl-2.5'>No result Found</div>
          ) : (
            filtered.map(({ pokemon }, i) => (
              <article
                key={i}
                role='button'
                className='card'
                onClick={() => router.push(`/pokemon/${pokemon?.name}`)}
              >
                {pokemon?.name}
              </article>
            ))
          )}
        </div>
      </section>
      <div className='pgnt_wrapper'>
        <ReactPaginate
          breakLabel='...'
          nextLabel='Next  >'
          onPageChange={onChangePage}
          pageRangeDisplayed={2}
          pageCount={noOfPage}
          activeClassName={'activepagelink'}
          previousLabel='<  Prev'
          disabledClassName='dizabled'
          nextLinkClassName={'prev_next'}
          previousLinkClassName={'prev_next'}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
