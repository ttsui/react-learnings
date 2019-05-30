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
