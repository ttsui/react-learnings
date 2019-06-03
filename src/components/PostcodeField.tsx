import React, { useEffect, useState } from "react";
import { PhoneField } from "./Fields";

export const PostcodeField: React.FC<{ value?: number; onChange: (value: number) => void }> = props => {
  const [value, setValue] = useState<number | string>("");
  const [isInvalid, setIsInvalid] = useState(false);

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
        onChange={value => {
          setValue(value);

          const postcode = Number(value);
          if (!Number.isNaN(postcode)) {
            props.onChange(postcode);
            setIsInvalid(false);
          } else {
            setIsInvalid(true);
          }
        }}
      />
      {isInvalid ? <div className="t-field-validation-error">Invalid postcode</div> : null}
    </div>
  );
};
