import React, { useState } from "react";
import "./App.css";
import { BusinessCard } from "./components/BusinessCard";
import { Address, BusinessCardInfo } from "./types";
import { BusinessCardForm } from "./components/BusinessCardForm";

const App: React.FC<{}> =  () => {
    const [state, setState] = useState({
      name: "Mariana Napolitani",
      title: "Broker",
      address: {
        street: ["Unit 5", "23 Market St"],
        suburb: "Sydney",
        state: "NSW",
        postcode: 2000
      },
      phoneNumber: "(02) 9804 11234",
      email: "mariana@myestate.com",
      website: "www.myestate.com"
    });

    const handleFormChange = <F extends keyof BusinessCardInfo>(field: F, value: string | Address) => {
      const newState: Pick<BusinessCardInfo, F> = { [field]: value };
      setState({...state, ...newState});
    };

    return (
      <div
        className="App"
        style={{
          backgroundColor: "rgb(235, 236, 237)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <BusinessCard {...state} />
        <hr />
        <BusinessCardForm {...state} onChange={handleFormChange} />
      </div>
    );
};

export default App;
