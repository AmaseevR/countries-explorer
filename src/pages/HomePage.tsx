import { CountryList } from "../entities/Country";
import { CountryFilterDropdown } from "../features/FilterCountry";
import { CountrySearchBar } from "../features/SearchCountry";
import { CountrySortButton } from "../features/SortCountry";


const HomePage: React.FC = () => {


	return (
		<div className="p-4 md:p-8">
			{/* Title */}
			<h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">Country Explorer</h1>

			{/* Search Bar */}
			<div className="mb-6">
				<CountrySearchBar />
			</div>

			{/* Filters and Sort - Adjust for responsiveness */}
			<div className="mb-6 flex flex-col md:flex-row justify-between gap-4">
				<CountryFilterDropdown />
				<CountrySortButton />
			</div>

			{/* Country List */}
			<CountryList />
		</div>
	);
};

export default HomePage;
