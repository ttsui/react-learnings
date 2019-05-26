import React from "react";
import { Address, AddressValueTypes } from "../types";
import { TextField } from "./Fields";

interface AddressFormProps {
  address: Address;
  onChange: <K extends keyof Address>(field: K, value: AddressValueTypes) => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({ address, onChange }) => {
  const handleAddressFieldChange = <K extends keyof Address>(field: K) => (value: AddressValueTypes) =>
    onChange(field, value);
  const handleStreetChange = (lineIndex: number) => (value: string) => {
    const street = [...address.street];
    street[lineIndex] = value;
    onChange("street", street);
  };

  return (
    <fieldset style={{ border: "none" }}>
      <TextField label="Street line 1" value={address.street[0]} onChange={handleStreetChange(0)} />

      <TextField label="Street line 2" value={address.street[1]} onChange={handleStreetChange(1)} />

      <TextField label="Suburb" value={address.suburb} onChange={handleAddressFieldChange("suburb")} />

      <TextField
        label="Postcode"
        value={address.postcode}
        onChange={value => {
          onChange("postcode", Number(value));
        }}
      />

      <TextField label="State" value={address.state} onChange={handleAddressFieldChange("state")} />
    </fieldset>
  );
};
