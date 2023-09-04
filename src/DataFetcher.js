import React, { Component } from "react";

class DataFetcher extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json }); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  componentWillUnmount() {}

  render() {
    const { data } = this.state; // Get the data from the component state

    return (
      <div>
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p style={{ display: "grid", placeItems: "center" }}>Loading...</p>
        )}
      </div>
    );
  }
}

export default DataFetcher;
