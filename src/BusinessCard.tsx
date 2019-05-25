import React from "react";
import { BusinessCardInfo } from "./types";

export const BusinessCard: React.FC<BusinessCardInfo> = ({ address, email, name, phoneNumber, title, website }) => (
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
      width: "490px",
      height: "280px"
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
      >
        {name}
      </h1>
      <div>{title}</div>
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
      <div>
        Email: <span style={{ fontVariant: "unset" }}>{email}</span>
      </div>
      <div>Click: {website}</div>
    </section>
  </section>
);
