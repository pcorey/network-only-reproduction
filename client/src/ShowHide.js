import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import _ from "lodash";

export default class extends React.Component {
  state = {
    show: true
  };

  toggle = () => {
    this.state.show ? console.log("Hiding...") : console.log("Showing...");
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    console.log("Re-rendering query:");
    return this.state.show ? (
      <div>
        <h1>Open your console! 🧐</h1>
        <p>
          The Query component eventually settled on the above value, which comes
          from the network. Click "Hide" to remove the Query component from the
          virtual DOM.
        </p>
        <button onClick={this.toggle}>Hide</button>
        <Query
          fetchPolicy="network-only"
          query={gql`
            {
              random {
                id
                value
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            console.log(
              "data received from Query:",
              _.get(data, "random.value"),
              data
            );
            return <p>{_.get(data, "random.value")}</p>;
          }}
        </Query>
      </div>
    ) : (
      <div>
        <h1>Open your console! 🧐</h1>
        <p>
          Now that we've hidden the Query component, showing it again will cause
          it to re-fetch a value for our `random` query. We have `fetchPolicy`
          set to `"network-only"`, so it shouldn't return values from the cache,
          but watch the values passed into our Query component's render prop. It
          will recieve the cached value first, and then receive the value from
          the server.
        </p>
        <button onClick={this.toggle}>Show</button>
      </div>
    );
  }
}
