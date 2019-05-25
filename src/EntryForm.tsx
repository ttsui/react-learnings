import { Address, BusinessCardInfo } from "./types";
import React, { Component } from "react";

interface FieldProps {
  label: string;
  onChange: (value: string) => void;
  value?: string | number;
}

interface FormFieldProps extends FieldProps {
  type: string;
}

const TextField: React.FC<FieldProps> = props => <FormField {...props} type="text"/>;
const PhoneField: React.FC<FieldProps> = props => <FormField {...props} type="tel"/>;
const FormField: React.FC<FormFieldProps> = props => (
  <label>
    {props.label}{" "}
    <div>
      <input type={props.type} value={props.value} onChange={event => props.onChange(event.target.value)}/>
    </div>
  </label>
);
type AddressValueTypes = string | number | Array<any> | undefined;

interface AddressFormProps {
  address: Address;
  onChange: <K extends keyof Address>(field: K, value: AddressValueTypes) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({address, onChange}) => {
  const handleAddressChangeTo = <K extends keyof Address>(field: K) => (value: AddressValueTypes) =>
    onChange(field, value);
  const handleStreetChange = (lineIndex: number) => (value: string) => {
    const street = [...address.street];
    street[lineIndex] = value;
    onChange("street", street);
  };

  return (
    <form>
      <TextField label="Street line 1" value={address.street[0]} onChange={handleStreetChange(0)}/>

      <TextField label="Street line 2" value={address.street[1]} onChange={handleStreetChange(1)}/>

      <TextField label="Suburb" value={address.suburb} onChange={handleAddressChangeTo("suburb")}/>

      <TextField
        label="Postcode"
        value={address.postcode}
        onChange={value => {
          onChange("postcode", Number(value));
        }}
      />

      <TextField label="State" value={address.state} onChange={handleAddressChangeTo("state")}/>
    </form>
  );
};

export class EntryForm extends Component<{
  onChange: <K extends keyof BusinessCardInfo>(field: K, value: string | Address) => void;
} & BusinessCardInfo> {
  render() {
    return (
      <>
        <AddressForm
          address={this.props.address}
          onChange={(field, value) => {
            this.props.address[field] = value;
            this.props.onChange("address", this.props.address);
          }}
        />
        <PhoneField
          label="Phone Number"
          value={this.props.phoneNumber}
          onChange={value => {
            this.props.onChange("phoneNumber", value);
          }}
        />
      </>
    );
  }
}