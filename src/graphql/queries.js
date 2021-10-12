/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPersonnel = /* GraphQL */ `
  query GetPersonnel($id: ID!) {
    getPersonnel(id: $id) {
      id
      resource
      callOrder
      lcat
      rate
      campin
      transfer
      approved
      exitDate
      birthCity
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPersonnel = /* GraphQL */ `
  query ListPersonnel(
    $filter: ModelPersonnelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonnel(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        resource
        callOrder
        lcat
        rate
        campin
        transfer
        approved
        exitDate
        birthCity
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPersonnel = /* GraphQL */ `
  query SyncPersonnel(
    $filter: ModelPersonnelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPersonnel(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        resource
        callOrder
        lcat
        rate
        campin
        transfer
        approved
        exitDate
        birthCity
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
