import { createContext, useState } from 'react';

interface PokemonContextType {
  state: {
    allpokemons: Record<string, any>[];
    filtered: Record<string, any>[];
  };
  setState: React.Dispatch<
    React.SetStateAction<{ allpokemons: any[]; filtered: any[] }>
  >;
}

export const PokemonContext = createContext<PokemonContextType>({
  state: { allpokemons: [{}], filtered: [{}] },
  setState: () => {},
});

interface Props {
  children: React.ReactNode;
}
const PokemonProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState({ allpokemons: [{}], filtered: [{}] });
  return (
    <PokemonContext.Provider value={{ state, setState }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
