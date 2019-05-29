import React from "react";
import { render } from "react-testing-library";
import TestRenderer from "react-test-renderer";
import { BusinessCardForm, BusinessCardFormChangeEventHandler } from "../BusinessCardForm";
import { PhoneField, TextField } from "../Fields";
import { BusinessCardInfo } from "../../types";
import { AddressForm } from "../AddressForm";

it("renders", () => {
  const businessCardInfo = {
    name: "Mariana Napolitani",
    title: "Broker",
    address: {
      street: ["Unit 5", "23 Market St"],
      suburb: "Sydney",
      state: "NSW",
      postcode: 2000
    },
    phoneNumber: "(02) 9804 11234",
    email: "mariana@myestate.com",
    website: "www.myestate.com"
  };

  const { container } = render(<BusinessCardForm {...businessCardInfo} onChange={() => {}} />);

  expect(container.querySelector("form")).toHaveFormValues({
    name: "Mariana Napolitani",
    title: "Broker",
    "phone-number": "(02) 9804 11234",
    email: "mariana@myestate.com",
    website: "www.myestate.com",
    "street-line-1": "Unit 5",
    "street-line-2": "23 Market St",
    suburb: "Sydney",
    postcode: "2000",
    state: "NSW"
  });
});

it("calls onChange prop", () => {
  const businessCard: BusinessCardInfo = {
    name: "",
    title: "",
    address: {
      street: [],
      suburb: "",
      state: ""
    },
    phoneNumber: "",
    email: "",
    website: ""
  };

  const handleChange: BusinessCardFormChangeEventHandler = (field, value) => {
    businessCard[field] = value;
  };
  const testRenderer = TestRenderer.create(<BusinessCardForm {...businessCard} onChange={handleChange} />);
  const testInstance = testRenderer.root;

  let callChangeHandler = (field: any) => {
    field.props.onChange(`A ${field.props.label} value`.toLowerCase());
  };
  testInstance.findAllByType(TextField).forEach(callChangeHandler);
  testInstance.findAllByType(PhoneField).forEach(callChangeHandler);
  testInstance.findByType(AddressForm) .props.onChange("street", ["Unit 5", "23 Market St"]);

  expect(businessCard.name).toEqual("a name value");
  expect(businessCard.title).toEqual("a title value");
  expect(businessCard.email).toEqual("a email value");
  expect(businessCard.website).toEqual("a website value");
  expect(businessCard.phoneNumber).toEqual("a phone number value");
  expect(businessCard.address.street).toEqual(["Unit 5", "23 Market St"]);
});
