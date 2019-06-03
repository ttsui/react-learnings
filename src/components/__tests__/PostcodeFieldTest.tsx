import React from "react";
import { fireEvent, render } from "react-testing-library";
import { PostcodeField } from "../PostcodeField";

it("renders", () => {
  expect(render(<PostcodeField value={1234} onChange={() => {}} />).container).toMatchSnapshot();
});

it("calls onChange handler", () => {
  const changeHandler = jest.fn();
  const { getByLabelText } = render(<PostcodeField onChange={changeHandler} />);

  fireEvent.change(getByLabelText("Postcode"), { target: { value: "1234" } });

  expect(changeHandler).toHaveBeenCalledWith(1234);
});

describe("validation", () => {
  test.each`
    postcode    | validationMessage
    ${"abcd"}   | ${"Postcode must only contain numbers"}
    ${"123"}    | ${"Postcode must be four digits"}
    ${"12345"}  | ${"Postcode must be four digits"}
  `("validates $postcode as invalid", ({ postcode, validationMessage }) => {
    const { container, getByLabelText } = render(<PostcodeField onChange={() => {}} />);

    fireEvent.change(getByLabelText("Postcode"), { target: { value: postcode } });

    expect(container.querySelector(".t-field-validation-error")).toHaveTextContent(validationMessage);
  });
});
