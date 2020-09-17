import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
    const wrapper = shallow(<App />);
    const component = wrapper.find("[data-test='component-app']");
    expect(component.length).toBe(1);
});

test("increment button render", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find("[data-test='increment-button']");
    expect(button.length).toBe(1);
});

test("render counter display", () => {
    const wrapper = shallow(<App />);
    const displayCounter = wrapper.find("[data-test='display-counter']");
    expect(displayCounter.length).toBe(1);
});

test("counter starts at 0", () => {
    const wrapper = shallow(<App />);
    const initialCounterState = wrapper.state("counter");
    expect(initialCounterState).toBe(0);
});

test("checking if counter is increasing or not", () => {
    let counter = 8;
    const wrapper = shallow(<App />);
    wrapper.setState({ counter });
    const button = wrapper.find("[data-test='increment-button']");
    button.simulate("click");
    const displayCounter = wrapper.find("[data-test='display-counter']");
    expect(displayCounter.text()).toContain(counter + 1);
});

test("checking if counter is decreasing or not", () => {
    let counter = 8;
    const wrapper = shallow(<App />);
    wrapper.setState({ counter });
    const button = wrapper.find("[data-test='decrement-button']");
    button.simulate("click");
    const displayCounter = wrapper.find("[data-test='display-counter']");
    expect(displayCounter.text()).toContain(counter - 1);
});

test("checking if counter is increasing or not", () => {
    let counter = 0;
    const wrapper = shallow(<App />);
    wrapper.setState({ counter });
    const button = wrapper.find("[data-test='decrement-button']");
    button.simulate("click");
    const displayCounter = wrapper.find("[data-test='error-message']");
    expect(displayCounter.length).toBe(1);
});
