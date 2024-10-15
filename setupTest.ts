import '@testing-library/jest-dom';

beforeAll(() => {
  Object.defineProperty(global, 'importMeta', {
    value: {
      env: {
        VITE_COUNTRIES_GRAPHQL_API: 'https://mocked-graphql-api-url',
        WEATHER_API_KEY: 'testapikey',
      },
    },
  });
});
