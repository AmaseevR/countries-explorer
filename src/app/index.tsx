import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/ApolloClient';
import '../assets/styles.css'
import { CountriesProvider } from '../shared/providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<CountriesProvider>
				<App />
			</CountriesProvider>
		</ApolloProvider>
	</React.StrictMode>
);
