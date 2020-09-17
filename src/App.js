import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    state = {
        counter: 0,
        error: "",
    };
    render() {
        const { counter, error } = this.state;
        return (
            <div className="App" data-test="component-app">
                <h1 data-test="display-counter">{counter}</h1>
                <button
                    data-test="increment-button"
                    onClick={() => {
                        this.setState({ counter: counter + 1, error: "" });
                    }}
                >
                    Increment Counter
                </button>
                <button
                    data-test="decrement-button"
                    onClick={() => {
                        if (counter > 0) {
                            this.setState({ counter: counter - 1 });
                        } else {
                            this.setState({
                                error: "Counter can't go below 0.",
                            });
                        }
                    }}
                >
                    Decrement Counter
                </button>
                <p data-test="error-message" style={{ color: "red" }}>
                    {error}
                </p>
            </div>
        );
    }
}

export default App;
