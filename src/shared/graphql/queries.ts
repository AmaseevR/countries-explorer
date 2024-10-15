import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
    query GetCountries($first: Int!, $name: String) {
    countries(first: $first,  name: $name ) {
      edges {
        node {
          alpha2Code
          name
          nativeName
          capital
          population
          area
          flag
          subregion
          languages {
            edges {
              node {
                name
              }
            }
          }
          currencies {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }`;