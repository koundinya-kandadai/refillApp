/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRefillLocation = /* GraphQL */ `
  query GetRefillLocation($id: ID!) {
    getRefillLocation(id: $id) {
      id
      name
      description
      streetAddress
      city
      stateProvinceOrRegion
      zipCode
      countryCode
      createdAt
      updatedAt
    }
  }
`;
export const listRefillLocations = /* GraphQL */ `
  query ListRefillLocations(
    $filter: ModelRefillLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRefillLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        streetAddress
        city
        stateProvinceOrRegion
        zipCode
        countryCode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
