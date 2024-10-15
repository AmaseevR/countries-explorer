// Language Type
interface Language {
  name: string;
}

// Currency Type
interface Currency {
  name: string;
}

// Country Type
export interface Country {
  alpha2Code: string;
  name: string;
  nativeName: string;
  capital: string;
  population: number;
  area: number;
  flag: string;
  timezones: string[];
  subregion: string;
  languages: {
    edges: { node: Language }[];
  };
  currencies: {
    edges: { node: Currency }[];
  };
}

// Response Type for the `countries` query
export interface CountriesQueryResponse {
  countries: {
    edges: {
      node: Country;
    }[];
  };
}
