import { gql } from "apollo-boost";

export const SEARCHUSER_QUERY = gql`
  query SearchUserQuery(
    $country: String
    $gender: String
    $shirtSize: [String]
    $age: [Int]
    $price: [Int]
  ) {
    searchUsers(
      country: $country
      gender: $gender
      shirtSize: $shirtSize
      age: $age
      price: $price
    ) {
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
`;
