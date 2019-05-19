import React, { Component } from "react";
import "./App.css";

interface Address {
  street: string[];
  suburb: string;
  postcode?: number;
  state: string;
}

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

interface BusinessCardProps {
  address: Address;
  phoneNumber?: number;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ address, phoneNumber }) => (
  <section>
    <h1>Business Card</h1>
    {address.street.map((line, idx) => <div key={idx}>{line}</div>)}
    {address.suburb} {address.state} {address.postcode}
    <p>{phoneNumber}</p>
  </section>
);

class App extends Component<{}, { address: Address; phoneNumber: number | undefined }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      address: {
        street: ["1 John St"],
        suburb: "",
        state: "",
        postcode: 0,
      },
      phoneNumber: undefined
    };
  }

  render() {
    return (
      <div className="App">
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
          onChange={value => this.setState({ phoneNumber: parseInt(value, 10) || undefined })}
        />
      </div>
    );
  }
}

export default App;
