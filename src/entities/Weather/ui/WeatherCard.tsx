import React from 'react';
import { Weather } from '../../../shared/types/WeatherTypes';

interface WeatherCardProps {
	weather: Weather;
	capital: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather, capital }) => {
	return (
		<div className="p-4 bg-gray-100 rounded-md">
			<h2 className="text-xl font-semibold">Current Weather in {capital}</h2>
			<p>Temperature: {weather.main.temp}°C</p>
			<p>Condition: {weather.weather[0].description}</p>
			<img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
		</div>
	);
};

export default WeatherCard;
