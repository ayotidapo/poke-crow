'use client';

import React from 'react';
import PokemonProvider from './PokemanProvider';

const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <PokemonProvider>{children}</PokemonProvider>;
};

export default LayoutProvider;
