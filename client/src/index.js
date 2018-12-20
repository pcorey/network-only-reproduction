import React from "react";
import ReactDOM from "react-dom";
import ShowHide from "./ShowHide";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ShowHide />
  </ApolloProvider>,
  document.getElementById("root")
);
