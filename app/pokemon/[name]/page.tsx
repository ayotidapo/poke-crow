import React from 'react';
import PokemonDetailsPage from '@/components/PokemomDetailsPage';
import { ServerProps } from '@/utils/interfaces';
import { getPokemonByName } from '@/utils/request';
import { notFound } from 'next/navigation';
import { text } from '@/utils/constant';

const PokemonDetail: React.FC<ServerProps> = async ({ params }) => {
  const { name } = params;

  const { data, error } = await getPokemonByName(name);
  if (error) notFound();

  const stats = data?.stats?.map((datastat: Record<string, any>) => ({
    name: datastat?.stat.name,
    value: datastat?.base_stat,
    effort: datastat?.effort,
  }));

  const payload = {
    name: data?.name,
    height: data?.height,
    weight: data?.weight,
    image: data?.sprites?.other?.home?.front_default,
    description: text?.description,
    type: data?.types[0]?.type.name,
    ability: data?.abilities[0]?.ability.name,
    rank: data?.id,
    stats,
  };
  return <PokemonDetailsPage data={payload} />;
};

export default PokemonDetail;
