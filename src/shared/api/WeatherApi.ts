
import { WEATHER_API_KEY } from '../config';

const API_KEY = WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city: string) => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await response.json();

  return {
    description: data.weather[0].description,
    temperature: data.main.temp,
    icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
  };
};

export interface WeatherData {
	description: string;
	temperature: number;
	icon: string;
}
