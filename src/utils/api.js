import axios from 'axios';
import useSWR from 'swr';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export function useFetch(url) {
  const {data, error, mutate} = useSWR(url, async (url) => {
    const response = await api.get(url);
    const {data} = response;

    return data;
  });

  return {data, error, mutate};
}

export default api;
