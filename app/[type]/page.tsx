import CategoryPage from '@/components/CategoryPage';
import { ServerProps } from '@/utils/interfaces';
import { getPokemonCategories, getPokemonByType } from '@/utils/request';
import { notFound } from 'next/navigation';

const Home: React.FC<ServerProps> = async ({ params }) => {
  const { type = 'normal' } = params;
  console.log(type, 'jgiuhtogu guhguhguhguhgu', params);
  try {
    const {
      data: { results },
    } = await getPokemonCategories();

    const { data } = await getPokemonByType(type);

    return <CategoryPage categories={results} pokemons={data} />;
  } catch (e) {
    console.log(e);
    notFound();
  }
};
export default Home;
