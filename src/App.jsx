import CreateurPersonnage from "./containers/CreateurPersonnage/CreateurPersonnage";
import ListePersonnage from "./containers/ListesPersonnage/ListePersonnage";

import { Component } from "react";

class App extends Component {
  state = {
    refresh: false,
  };

  handleRefresh = () => {
    this.setState((oldState) => {
      return { refresh: !oldState.refresh };
    });
  };

  render() {
    return (
      <>
        <CreateurPersonnage refresh={this.handleRefresh} />
        <ListePersonnage refresh={this.state.refresh} />
      </>
    );
  }
}

export default App;
