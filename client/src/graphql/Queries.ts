import { gql } from "apollo-boost";

export const SEARCHUSER_QUERY = gql`
  query SearchUserQuery(
    $limit: Int
    $offset: Int
    $country: String
    $gender: String
    $shirtSize: [String]
    $age: [Int]
    $price: [Int]
  ) {
    searchUsers(
      limit: $limit
      offset: $offset
      country: $country
      gender: $gender
      shirtSize: $shirtSize
      age: $age
      price: $price
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
