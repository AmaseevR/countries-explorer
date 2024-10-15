import { createContext, useState, useEffect, ReactNode } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/queries';  // Use one query for both search and fetch all
import { Country } from '../types/CountryTypes';

interface CountriesContextProps {
  countries: Country[];
  loading: boolean;
  error: string | null;
  region: string;
  setRegion: (value: string) => void;
  language: string;
  setLanguage: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
  searchCountries: (name: string) => void;
  loadMoreCountries: () => void;
}

export const CountriesContext = createContext<CountriesContextProps | undefined>(undefined);

const CountriesProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [region, setRegion] = useState('');
  const [language, setLanguage] = useState('');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [first, setFirst] = useState(12);

  // Single query to handle both search and fetch all
  const { loading, error, data, refetch } = useQuery(GET_COUNTRIES, {
    variables: { first, name: search || undefined },  // Pass search term or undefined
  });

  useEffect(() => {
    if (data && data.countries) {
      setCountries(data.countries.edges.map(({ node }: { node: Country }) => node));
    }
  }, [data]);

  const searchCountries = (name: string) => {
    setSearch(name);  // Set search term
    refetch({ name: name || undefined });  // Refetch with the search term or undefined for all
  };

  const loadMoreCountries = () => {
    setFirst(first + 12);
    refetch({ first: first + 12 });
  };

  return (
    <CountriesContext.Provider
      value={{
        countries,
        loading,
        error: error ? error.message : null,
        region,
        setRegion,
        language,
        setLanguage,
        sort,
        setSort,
        search,
        setSearch,
        searchCountries,
        loadMoreCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
export default CountriesProvider;