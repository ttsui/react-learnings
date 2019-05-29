import React, { Component } from "react";
import { Address, BusinessCardInfo } from "../types";
import { PhoneField, TextField } from "./Fields";
import { AddressForm } from "./AddressForm";

export type BusinessCardFormChangeEventHandler = <K extends keyof BusinessCardInfo>(
  field: K,
  value: string | Address
) => void;

interface BusinessCardFormProps extends BusinessCardInfo {
  onChange: BusinessCardFormChangeEventHandler;
}

export class BusinessCardForm extends Component<BusinessCardFormProps> {
  render() {
    const changeFieldHandlerFor = <K extends keyof BusinessCardInfo>(field: K) => (value: string | Address) =>
      this.props.onChange(field, value);

    return (
      <form
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%"
        }}
      >
        <div>
          <TextField label="Name" value={this.props.name} onChange={changeFieldHandlerFor("name")} />
          <TextField label="Title" value={this.props.title} onChange={changeFieldHandlerFor("title")} />
          <TextField label="Email" value={this.props.email} onChange={changeFieldHandlerFor("email")} />
          <TextField label="Website" value={this.props.website} onChange={changeFieldHandlerFor("website")} />
          <PhoneField label="Phone Number" value={this.props.phoneNumber} onChange={changeFieldHandlerFor("phoneNumber")} />
        </div>

        <AddressForm
          address={this.props.address}
          onChange={(field, value) => {
            this.props.address[field] = value;
            this.props.onChange("address", this.props.address);
          }}
        />
      </form>
    );
  }
}
