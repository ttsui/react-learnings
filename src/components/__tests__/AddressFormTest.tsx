import React from "react";
import { render } from "react-testing-library";
import { AddressForm } from "../AddressForm";

it("renders", () => {
  const address = {
    street: ["Unit 5", "23 Market St"],
    suburb: "Sydney",
    state: "NSW",
    postcode: 2000
  };

  const { container } = render(<AddressForm address={address} onChange={() => {}} />);

  expect(container.querySelector('fieldset')).toHaveFormValues({
    "street-line-1": "Unit 5",
    "street-line-2": "23 Market St",
    "suburb": "Sydney",
    "postcode": "2000",
    "state": "NSW"
  });
});
