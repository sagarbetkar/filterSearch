import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { SEARCHUSER_QUERY } from "../graphql/Queries";
import { Card } from "antd";
import queryString from "query-string";

export class UserContainer extends Component {
  render() {
    const { country, price, age, shirtSize, gender }: any = queryString.parse(
      window.location.search
    );
    const Nage = Number(age);
    const Nprice = Number(price);
    return (
      <div className="container">
        <div className="row">
          <Query
            query={SEARCHUSER_QUERY}
            variables={{ country, Nprice, Nage, shirtSize, gender }}
          >
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);
              return (
                <Fragment>
                  {data.searchUsers.map((userDetails: any) => (
                    <div className="col" key={userDetails["_id"]}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={
                          <img
                            alt={userDetails["_id"]}
                            src={userDetails["avatar"]}
                          />
                        }
                      >
                        <p>{userDetails["name"]}</p>
                        <p>{userDetails["age"]}</p>
                        <p>{userDetails["gender"]}</p>
                        <p>{userDetails["shirtSize"]}</p>
                        <p>{userDetails["price"]}</p>
                        <p>{userDetails["country"]}</p>
                      </Card>
                    </div>
                  ))}
                </Fragment>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}
