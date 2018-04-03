import React, { Component, unstable_AsyncMode as AsyncMode } from "react";
import ReactDOM from "react-dom";
import { createFetcher, Placeholder } from "async-react-future";

import "./Spinner.css"; // you can import your own css later
const fetchdata = delay =>
  new Promise((res, rej) => {
    setTimeout(() => res([1, 2, 3]), delay); // simulate an API fetch
  });
const dataFetcher = createFetcher(fetchdata);

function DataComponent({ timeForAPItoResolve }) {
  const nums = dataFetcher.read(timeForAPItoResolve);
  return <div>{nums.map(num => <div key={num}>{num}</div>)}</div>;
}
class App extends Component {
  render() {
    return (
      <AsyncMode>
        <Placeholder delayMs={1000} fallback={<div className="Spinner" />}>
          <div>
            <h1>welcome to the async react future </h1>
            <DataComponent timeForAPItoResolve={2000} />
          </div>
        </Placeholder>
      </AsyncMode>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// import { fetchMovieReviews } from "./api"; // refactor to a separate api file later
