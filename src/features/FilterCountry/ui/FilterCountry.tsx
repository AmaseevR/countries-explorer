import { useCountries } from '../../../shared/hooks/'; // Assuming you have this hook

let regionList = ['Southern Europe', 'Central America', 'Northern Africa', 'Southern Europe', 'Middle Africa', 'Caribbean', 'Caribbean', 'South America', 'Northern Europe', 'Western Europe', 'Western Asia']

const CountryFilterDropdown: React.FC = () => {

	const { region, setRegion, language, setLanguage } = useCountries();

	return (
		<div className="flex flex-col md:flex-row">

			<select
				value={region}
				onChange={(e) => setRegion(e.target.value)}
				className="border px-8 rounded mb-2 md:mb-0 md:mr-2"
			>
				<option value="">Select Region</option>
				{regionList.map((region, index) => {
					return (
						<option key={region + index} value={region}>{region}</option>
					)
				})}
			</select>

			{/* Language Filter */}
			<select
				value={language}
				onChange={(e) => setLanguage(e.target.value)}  // Update language in context
				className="border px-8 rounded mb-2 md:mb-0"
			>
				<option value="">Select Language</option>
				<option value="English">English</option>
				<option value="Spanish">Spanish</option>
				<option value="French">French</option>
				<option value="German">German</option>
				{/* Add more languages as needed */}
			</select>
		</div>
	);
};

export default CountryFilterDropdown;
