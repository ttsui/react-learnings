import React, { useEffect, useState } from "react";
import { PhoneField } from "./Fields";

enum ValidationErrors {
  OnlyNumericValue = "Postcode must only contain numbers",
  MustBeFourDigits = "Postcode must be four digits"
}

export const PostcodeField: React.FC<{ value?: number; onChange: (value: number) => void }> = props => {
  const [value, setValue] = useState<number | string>("");
  const [validationMessage, setValidationMessage] = useState();

  useEffect(
    () => {
      setValue(props.value || "");
    },
    [props.value]
  );

  return (
    <div>
      <PhoneField
        label="Postcode"
        value={value}
        validationMessage={validationMessage}
        onChange={value => {
          setValue(value);

          const postcode = Number(value);
          let message;
          if (Number.isNaN(postcode)) {
            message = ValidationErrors.OnlyNumericValue;
          } else if (value.length !== 4) {
            message = ValidationErrors.MustBeFourDigits;
          }
          setValidationMessage(message);

          if (message === undefined) {
            props.onChange(postcode);
          }
        }}
      />
    </div>
  );
};
