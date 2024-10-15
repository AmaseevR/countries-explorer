import { ChangeEvent, } from 'react';

import { useCountries } from '../../../shared/hooks';



const CountrySortButton = () => {
  const { sort, setSort } = useCountries();
  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }
  return (
    <div className="flex items-center">
      <select
        value={sort}
        onChange={(e) => { handleSort(e) }}
        className="border px-8 rounded  w-full md:w-auto"
      >
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
    </div>
  );
};

export default CountrySortButton;
