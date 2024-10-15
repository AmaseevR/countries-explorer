import React, { useState } from 'react';
import { useCountries } from '../../../shared/hooks/useCountries';
import Loader from '../../../shared/ui/Loader';

const CountrySearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { searchCountries, loading } = useCountries();  // Get searchCountries and loading from context

	const handleSearch = () => {
		searchCountries(searchTerm);  // Pass searchTerm, even if it's empty
	};
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};
	return (
		<div className="mb-4">
			{/* Search Input */}
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder="Search for countries..."
				className="border p-2 rounded"
				onKeyDown={(e) => { handleKeyDown(e) }}
			/>
			{/* Search Button */}
			<button
				onClick={handleSearch}
				className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
			>
				Search
			</button>

			{/* Show Loader While Searching */}
			{loading && <Loader />}
		</div>
	);
};

export default CountrySearchBar;
