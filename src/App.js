import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PlanetSlider from "./components/PlanetSlider/PlanetSlider";
import { getData } from "./utils/callApi";
import MainContainer from "./components/MainContainer";

class App extends Component {
  state = {
    planets: []
  };
  async componentDidMount() {
    const data = await getData("/planets");
    this.setState({
      planets: data.results
    });
  }
  render() {
    return (
      <React.Fragment>
        <main className="container p-3">
          <NavBar />
          <PlanetSlider planets={this.state.planets} />

          <Switch>
            {["/people", "/planets", "/starships"].map((path, index) => (
              <Route
                path={path}
                render={props => <MainContainer {...props} />}
                key={index}
              />
            ))}
            <Redirect from="/" exact to="/people" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
