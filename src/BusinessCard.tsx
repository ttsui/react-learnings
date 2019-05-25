import React from "react";
import { BusinessCardInfo } from "./types";

export const BusinessCard: React.FC<BusinessCardInfo> = ({ address, phoneNumber }) => (
  <section
    style={{
      backgroundColor: "#fef5f0",
      color: "darkgray",

      fontFamily: "sans-serif",
      fontSize: "13pt",
      fontWeight: "bold",
      fontVariant: "all-small-caps",

      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",

      boxSizing: "border-box",
      padding: "30px",
      width: "530px",
      height: "317px"
    }}
  >
    <section
      style={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column"
      }}
    >
      <h1
        style={{
          color: "#59504b",
          fontSize: "25pt",
          marginBlockEnd: 0,
          marginBlockStart: 0
        }}
      />
    </section>

    <section
      style={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",

        color: "darkgray",

        fontFamily: "sans-serif",
        fontSize: "13pt",
        fontWeight: "bold",
        fontVariant: "all-small-caps"
      }}
    >
      <div>Call: {phoneNumber}</div>
      <div>Visit: {address.street.concat(address.suburb, address.state, String(address.postcode)).join(", ")}</div>
    </section>
  </section>
);
