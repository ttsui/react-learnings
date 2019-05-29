import React from "react";
import TestRenderer from "react-test-renderer";
import { render } from "react-testing-library";
import { AddressChangeEventHandler, AddressForm } from "../AddressForm";
import { TextField } from "../Fields";
import { Address } from "../../types";

it("renders", () => {
  const address = {
    street: ["Unit 5", "23 Market St"],
    suburb: "Sydney",
    state: "NSW",
    postcode: 2000
  };

  const { container } = render(<AddressForm address={address} onChange={() => {}} />);

  expect(container.querySelector("fieldset")).toHaveFormValues({
    "street-line-1": "Unit 5",
    "street-line-2": "23 Market St",
    suburb: "Sydney",
    postcode: "2000",
    state: "NSW"
  });
});

it("calls onChange prop", () => {
  const address: Address = {
    street: [],
    suburb: "",
    state: ""
  };

  const handleChange: AddressChangeEventHandler =
    (field, value) => {
      address[field] = value;
    };

  const testRenderer = TestRenderer.create(<AddressForm address={address} onChange={handleChange} />);
  const testInstance = testRenderer.root;

  const fields = testInstance.findAllByType(TextField);
  fields.forEach(field => {
    if (field.props.label.toLowerCase() === "postcode") {
      field.props.onChange(1234);
    } else {
      field.props.onChange(`A ${field.props.label} value`.toLowerCase());
    }
  });

  expect(address.street).toEqual(["a street line 1 value", "a street line 2 value"]);
  expect(address.suburb).toEqual("a suburb value");
  expect(address.state).toEqual("a state value");
  expect(address.postcode).toEqual(1234);
});
