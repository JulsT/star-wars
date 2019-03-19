import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PlanetSlider from "./components/PlanetSlider/PlanetSlider";
import { getData } from "./utils/callApi";
import MainContainer from "./components/MainContainer";
import ErrorBoundary from "./components/Error/Error";
class App extends Component {
  state = {
    planets: [],
    hasError: false
  };
  async componentDidMount() {
    try {
      const data = await getData("/planets");
      this.setState({
        planets: data.results
      });
    } catch (error) {
      console.log("Error", error);
      this.setState({
        hasError: true
      });
    }
  }
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    const { hasError } = this.state;

    return (
      <React.Fragment>
        <main className="container p-3">
          {hasError ? (
            <ErrorBoundary />
          ) : (
            <>
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
                <Redirect to="/" />
              </Switch>
            </>
          )}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
