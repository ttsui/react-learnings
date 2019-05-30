import React from "react";
import { PhoneField } from "./Fields";

export const PostcodeField: React.FC<{ value?: number; onChange: (value: number | string) => void }> = props => {
  return (
    <PhoneField
      label="Postcode"
      value={props.value}
      onChange={value => {
        const postcode = Number(value) || value;

        props.onChange(postcode);
      }}
    />
  );
};
