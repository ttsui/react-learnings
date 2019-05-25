import React from "react";
import { render } from "react-testing-library";
import { BusinessCard } from "../BusinessCard";
import { BusinessCardInfo } from "../../types";

it("renders", () => {
  const cardInfo: BusinessCardInfo = {
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

  const { container } = render(<BusinessCard {...cardInfo} />);

  expect(container).toMatchSnapshot();
});
