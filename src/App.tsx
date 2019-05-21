import React, { Component } from "react";
import "./App.css";
import { BusinessCard } from "./BusinessCard";
import { Address } from "./types";

interface FieldProps {
  label: string;
  onChange: (value: string) => void;
  value?: string | number;
}

interface FormFieldProps extends FieldProps {
  type: string;
}

const TextField: React.FC<FieldProps> = props => <FormField {...props} type="text" />;

const PhoneField: React.FC<FieldProps> = props => <FormField {...props} type="tel" />;

const FormField: React.FC<FormFieldProps> = props => (
  <label>
    {props.label}{" "}
    <div>
      <input type={props.type} value={props.value} onChange={event => props.onChange(event.target.value)} />
    </div>
  </label>
);

const AddressForm = ({ address, setAddress }: { address: Address; setAddress: (address: Address) => void }) => (
  <form>
    <TextField
      label="Street line 1"
      value={address.street[0]}
      onChange={value => {
        address.street[0] = value;
        setAddress({
          ...address
        });
      }}
    />

    <TextField
      label="Street line 2"
      value={address.street[1]}
      onChange={value => {
        address.street[1] = value;
        setAddress({
          ...address
        });
      }}
    />

    <TextField
      label="Suburb"
      value={address.suburb}
      onChange={value => {
        address.suburb = value;
        setAddress({
          ...address
        });
      }}
    />


    <TextField
      label="Postcode"
      value={address.postcode}
      onChange={value => {
        address.postcode = parseInt(value, 10) || undefined;
        setAddress({
          ...address
        });
      }}
    />

    <TextField
      label="State"
      value={address.state}
      onChange={value => {
        address.state = value;
        setAddress({
          ...address
        });
      }}
    />
  </form>
);

class App extends Component<{}, { address: Address; phoneNumber: string }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      address: {
        street: ["Unit 5", "23 Market St"],
        suburb: "Sydney",
        state: "NSW",
        postcode: 2000,
      },
      phoneNumber: "(02) 9804 11234"
    };
  }

  render() {
    return (
      <div className="App" style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
        <BusinessCard address={this.state.address} phoneNumber={this.state.phoneNumber} />
        <hr />
        <AddressForm
          address={this.state.address}
          setAddress={address => {
            this.setState({ address });
          }}
        />
        <PhoneField
          label="Phone Number"
          value={this.state.phoneNumber}
          onChange={value => this.setState({ phoneNumber: value })}
        />
      </div>
    );
  }
}

export default App;
