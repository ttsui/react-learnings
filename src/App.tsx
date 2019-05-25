import React, { Component } from "react";
import "./App.css";
import { BusinessCard } from "./BusinessCard";
import { Address, BusinessCardInfo } from "./types";
import { EntryForm } from "./EntryForm";

class App extends Component<{}, BusinessCardInfo> {
  constructor(props: {}) {
    super(props);

    this.state = {
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
      website: "www.myestate.com",
    };
  }

  render() {
    const handleFormChange = <F extends keyof BusinessCardInfo>(field: F, value: string | Address) => {
      const newState: Pick<BusinessCardInfo, F> = { [field]: value };
      this.setState(newState);
    };

    return (
      <div className="App" style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
        <BusinessCard {...this.state} />
        <hr />
        <EntryForm {...this.state} onChange={handleFormChange} />
      </div>
    );
  }
}

export default App;
