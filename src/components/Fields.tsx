import React from "react";

interface FieldProps {
  label: string;
  onChange: (value: string) => void;
  value?: string | number;
}

interface FormFieldProps extends FieldProps {
  type: string;
}

const FormField: React.FC<FormFieldProps> = props => (
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
        style={{
          border: "1px solid #d5d5d5",
          borderRadius: "3px",
          fontFamily: "Arial, sans-serif",
          fontSize: "18px",
          padding: "0.5em",
          width: "13em"
        }}
      />
    </div>
  </label>
);

export const PhoneField: React.FC<FieldProps> = props => <FormField {...props} type="tel" />;

export const TextField: React.FC<FieldProps> = props => <FormField {...props} type="text" />;
