export interface Weather {
	main: {
		temp: number;
	};
	weather: Array<{
		description: string;
		icon: string;
	}>;
}