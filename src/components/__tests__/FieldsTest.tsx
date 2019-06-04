import React from "react";
import { fireEvent, render } from "react-testing-library";
import { FormFieldForTesting, PhoneField, TextField } from "../Fields";

describe("FormField:", () => {
  it("calls onChange handler", () => {
    const changeHandler = jest.fn();
    const { getByLabelText } = render(<FormFieldForTesting type="text" label="Name" onChange={changeHandler} />);

    fireEvent.change(getByLabelText("Name"), { target: { value: "Joan" } });

    expect(changeHandler).toHaveBeenCalledWith("Joan");
  });

  it("renders validation error", () => {
    const { container } = render(
      <FormFieldForTesting type="text" label="Name" value="xxx" onChange={() => {}} validationMessage="Invalid value" />
    );

    expect(container).toMatchSnapshot();
  });

  describe("onBlur:", () => {
    it("calls onChange handler with value trimed of whitespace", () => {
      const changeHandler = jest.fn();
      const { getByLabelText } = render(
        <FormFieldForTesting type="text" label="Name" value="  Joan Doe  " onChange={changeHandler} />
      );

      let field = getByLabelText("Name");
      fireEvent.blur(field);

      expect(changeHandler).toHaveBeenCalledWith("Joan Doe");
    });
  });
});

describe("PhoneField:", () => {
  it("renders", () => {
    const { container } = render(<PhoneField label="Name" value="(02) 1234 5678" onChange={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  it("calls onChange handler", () => {
    const changeHandler = jest.fn();
    const { getByLabelText } = render(<PhoneField label="Name" onChange={changeHandler} />);

    fireEvent.change(getByLabelText("Name"), { target: { value: "(02) 1234 5678" } });

    expect(changeHandler).toHaveBeenCalledWith("(02) 1234 5678");
  });
});

describe("TextField:", () => {
  it("renders", () => {
    const { container } = render(<TextField label="Name" value="John Doe" onChange={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  it("calls onChange handler", () => {
    const changeHandler = jest.fn();
    const { getByLabelText } = render(<TextField label="Name" onChange={changeHandler} />);

    fireEvent.change(getByLabelText("Name"), { target: { value: "Joan" } });

    expect(changeHandler).toHaveBeenCalledWith("Joan");
  });
});
