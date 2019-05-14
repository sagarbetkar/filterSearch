import { gql } from "apollo-boost";

export const SEARCHUSER_QUERY = gql`
  query SearchUserQuery(
    $limit: Int
    $offset: Int
    $country: String
    $gender: String
    $shirtSize: [String]
    $Nage: [Int]
    $Nprice: [Int]
  ) {
    searchUsers(
      limit: $limit
      offset: $offset
      country: $country
      gender: $gender
      shirtSize: $shirtSize
      age: $Nage
      price: $Nprice
    ) {
      count
      user {
        _id
        name
        age
        avatar
        gender
        shirtSize
        country
        price
      }
    }
  }
`;
