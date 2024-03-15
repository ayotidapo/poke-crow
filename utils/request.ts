import axios from '@/utils/axios';
import { error } from 'console';

const getPokemonCategories = async () => {
  try {
    const response = await axios.get(`/type`);

    return { ...response, error: null };
  } catch (error) {
    throw error;
  }
};

const getPokemonByType = async (type: string) => {
  try {
    const response = await axios.get(`/type/${type}?limit=20&offset=0`);

    return { ...response, error: null };
  } catch (error) {
    throw error;
  }
};

const getPokemonByName = async (name: string) => {
  console.log(name);
  try {
    const response = await axios.get(`/pokemon/${name}`);

    return { ...response, error: null };
  } catch (error) {
    return { error, data: null };
  }
};

export { getPokemonCategories, getPokemonByType, getPokemonByName };
