import React from "react";
import { Address } from "./types";

interface BusinessCardProps {
  address: Address;
  phoneNumber?: string;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ address, phoneNumber }) => (
  <section
    style={{
      backgroundColor: "#fef5f0",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "30px",
      width: "530px",
      height: "317px"
    }}
  >
    <h1>Business Card</h1>
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",

        color: "darkgray",

        fontFamily: "sans-serif",
        fontSize: "11pt",
        fontWeight: "bold",
      }}
    >
      <div>Call: {phoneNumber}</div>
      <div>Visit: {address.street.concat(address.suburb, address.state, String(address.postcode)).join(", ")}</div>
    </div>
  </section>
);
