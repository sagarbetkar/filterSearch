import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { SEARCHUSER_QUERY } from "../graphql/Queries";
import { Card, Pagination } from "antd";
import queryString from "query-string";

export class UserContainer extends Component {
  state = {
    limit: 9,
    offset: undefined,
    current: 1
  };

  onChange = async (current, pageSize) => {
    await this.setState({
      limit: pageSize,
      offset: (current - 1) * pageSize,
      current: current
    });
    setTimeout(() => {
      console.log(this.state);
    }, 300);
  };

  render() {
    const { country, price, age, shirtSize, gender }: any = queryString.parse(
      window.location.search
    );
    console.log(age);
    const Nage = age ? [Number(age["0"]), Number(age["1"])] : null;
    const Nprice = price ? [Number(price["0"]), Number(price["1"])] : null;
    const { limit, offset } = this.state;
    console.log(Nage);
    const UserQuery = () => (
      <Query
        query={SEARCHUSER_QUERY}
        variables={{ country, Nprice, Nage, shirtSize, gender, limit, offset }}
      >
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          return (
            <Fragment>
              {data.searchUsers.user ? (
                data.searchUsers.user.map((userDetails: any) => (
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
                ))
              ) : (
                <h1>No record found</h1>
              )}
              <div className="col-12 antd-pagination">
                <Pagination
                  onChange={this.onChange}
                  defaultCurrent={this.state.current}
                  defaultPageSize={9}
                  total={data.searchUsers.count}
                />
              </div>
            </Fragment>
          );
        }}
      </Query>
    );
    return (
      <div className="container">
        <div className="row">
          <UserQuery />
        </div>
      </div>
    );
  }
}
