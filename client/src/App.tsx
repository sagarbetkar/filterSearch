import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { FilterContainer } from "./components/FilterFormContainer";
import "./App.css";
import { UserContainer } from "components/UserContainer";

const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <FilterContainer />
          </div>
          <div className="col-9">
            <UserContainer />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};
