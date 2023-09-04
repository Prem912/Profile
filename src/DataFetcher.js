import React, { Component } from "react";

class DataFetcher extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/data")
      .then((response) => response.json())

      .then((data) => this.setState({ data }))

      .catch((error) => console.error("Error:", error));
  }

  componentWillUnmount() {}

  render() {
    const { data } = this.state;

    return (
      <div>
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}

export default DataFetcher;
