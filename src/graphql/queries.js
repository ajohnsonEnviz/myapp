/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPersonnelList = /* GraphQL */ `
  query GetPersonnelList($id: ID!) {
    getPersonnelList(id: $id) {
      id
      resource
      callOrder
      lcat
      rate
      campin
      approved
      transfer
      exitDate
      createdAt
      updatedAt
    }
  }
`;
export const listPersonnelLists = /* GraphQL */ `
  query ListPersonnelLists(
    $filter: ModelpersonnelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonnelLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        resource
        callOrder
        lcat
        rate
        campin
        approved
        transfer
        exitDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
