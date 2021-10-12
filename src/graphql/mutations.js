/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPersonnel = /* GraphQL */ `
  mutation CreatePersonnel(
    $input: CreatePersonnelInput!
    $condition: ModelPersonnelConditionInput
  ) {
    createPersonnel(input: $input, condition: $condition) {
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
export const updatePersonnel = /* GraphQL */ `
  mutation UpdatePersonnel(
    $input: UpdatePersonnelInput!
    $condition: ModelPersonnelConditionInput
  ) {
    updatePersonnel(input: $input, condition: $condition) {
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
export const deletePersonnel = /* GraphQL */ `
  mutation DeletePersonnel(
    $input: DeletePersonnelInput!
    $condition: ModelPersonnelConditionInput
  ) {
    deletePersonnel(input: $input, condition: $condition) {
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
