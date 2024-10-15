import React, { useEffect, useState } from 'react';
import { getWeatherByCity } from '../../../shared/api';
import { WeatherData } from '../../../shared/api/WeatherApi';
import { Loader } from '../../../shared/ui';


interface CardDetailsProps {
	name: string;
	capital: string;
	population: number;
	area: number;
	subregion: string;
	flag: string;
}

const CardDetails: React.FC<CardDetailsProps> = ({ name, capital, population, area, subregion, flag }) => {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true)
		getWeatherByCity(capital).then(data => setWeather(data)).catch(() => setError(true))
		setLoading(false)
	}, [capital]);

	return (

		<div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto hover:shadow-xl transition-shadow">
			<img src={flag} alt={`${name} flag`} className="w-full h-40 object-cover rounded-t-lg" />
			<div className="text-center">
				<h2 className="text-2xl font-bold mt-4">{name}</h2>
				<p className="text-gray-600">Capital: {capital}</p>
				<p className="text-gray-600">Population: {population.toLocaleString()}</p>
				<p className="text-gray-600">Area: {area} km²</p>
				<p className="text-gray-600">Subregion: {subregion}</p>
				<h3 className="text-xl font-semibold mt-4">Weather in {capital}:</h3>
			</div>
			{loading && <Loader />}
			{weather && <WeatherView description={weather?.description} temperature={weather?.temperature} icon={weather?.icon} />}
			{error && <p className="text-red-500 text-center mt-4">Weather loading error!</p>}
		</div>

	);
};

export default CardDetails;


const WeatherView = ({ description, temperature, icon }: WeatherData) => {
	return (
		<div className="flex flex-col items-center justify-center mt-4">
			<img src={icon} alt="Weather icon" className="w-12 h-12" />
			<p className="text-lg font-medium text-gray-700">{description}</p>
			<p className="text-lg font-semibold text-gray-800">{temperature}°C</p>
		</div>
	)
}