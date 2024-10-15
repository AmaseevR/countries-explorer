import React from 'react';
import { useCountries } from '../../../shared/hooks';
import CardDetails from './CountryDetails';
import CardDropdown from './CountryDropdownCard';
import { Loader } from '../../../shared/ui';
import { Country } from '../../../shared/types';

const CountriesList: React.FC = () => {
	const { countries, loading, error, loadMoreCountries, search } = useCountries();  // Access the context values correctly

	if (loading) return <Loader />;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<div className="countries-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
				{countries.map((country: Country) => (
					<div
						key={country.alpha2Code}
						className="country-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
					>
						<CardDetails
							name={country.name}
							capital={country.capital}
							population={country.population}
							area={country.area}
							subregion={country.subregion}
							flag={country.flag}
						/>
						<CardDropdown
							languages={country.languages.edges.map((lang: { node: { name: string } }) => lang.node.name)}
							currencies={country.currencies.edges.map((curr: { node: { name: string } }) => curr.node.name)}
						/>
					</div>
				))}
			</div>
			{!!search &&
				<div className="text-center mt-6">
					<button
						onClick={loadMoreCountries}
						className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
					>
						Load More
					</button>
				</div>
			}

		</div>
	);
};

export default CountriesList;
