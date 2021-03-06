import React from "react";

interface FieldProps {
  label: string;
  onChange: (value: string) => void;
  validationMessage?: string;
  value?: string | number;
}

interface FormFieldProps extends FieldProps {
  type: string;
}

const FormField: React.FC<FormFieldProps> = props => {
  const callOnChangeWithValueTrimmed = () => {
    if (props.value === undefined) {
      return;
    }

    const trimedValue = ("" + props.value).trim();
    props.onChange(trimedValue);
  };

  return (
    <label
      style={{
        color: "#2c2c2c",
        display: "block",
        fontSize: "1.35rem",
        fontFamily: "'Arial Narrow', sans-serif, sans-serif-condensed",
        marginBottom: "1em"
      }}
    >
      <div style={{ float: "left", marginBottom: "0.25em" }}>{props.label}</div>

      <div>
        <input
          name={props.label.toLowerCase().replace(/ /g, "-")}
          type={props.type}
          value={props.value}
          onChange={event => props.onChange(event.target.value)}
          onBlur={callOnChangeWithValueTrimmed}
          style={{
            border: `1px solid ${props.validationMessage ? "orangered" : "#d5d5d5"}`,
            borderRadius: "3px",
            fontFamily: "Arial, sans-serif",
            fontSize: "18px",
            padding: "0.5em",
            width: "13em"
          }}
        />
      </div>

      {props.validationMessage ? (
        <div
          className="t-field-validation-error"
          style={{
            backgroundColor: "#fdf0f0",
            margin: "0 3px",
            color: "orangered",
            padding: "3px 0",
            fontSize: "initial"
          }}
        >
          {props.validationMessage}
        </div>
      ) : null}
    </label>
  );
};

export const FormFieldForTesting: React.FC<FormFieldProps> = props => {
  if (process.env.NODE_ENV === "production") {
    throw new Error("FormFieldForTesting is only for unit testing FormField behvaiour.");
  }

  return <FormField {...props} />;
};

export const PhoneField: React.FC<FieldProps> = props => <FormField {...props} type="tel" />;

export const TextField: React.FC<FieldProps> = props => <FormField {...props} type="text" />;
