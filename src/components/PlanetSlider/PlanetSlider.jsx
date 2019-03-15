import React, { Component } from "react";
import { showImage } from "../../utils/callApi";
import Spinner from "../Spinner";
class PlanetSlider extends Component {
  state = {
    planets: this.props.planets,
    intervalId: null,
    randomId: 0,
    imageUrl: ""
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      planets: nextProps.planets
    };
  }
  componentDidMount() {
    const intervalId = setInterval(this.timer, 20000);
    this.getRandomPlanet();
    this.setState({
      intervalId
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  timer = () => {
    this.getRandomPlanet();
  };
  getRandomPlanet = async () => {
    const randomId = Math.floor(Math.random() * this.state.planets.length);
    const imageUrl = await showImage("/planets", randomId + 2);
    this.setState({
      randomId,
      imageUrl
    });
  };
  render() {
    const { planets, imageUrl, randomId } = this.state;
    return (
      <React.Fragment>
        {planets.length === 0 ? (
          <Spinner />
        ) : (
          <div className="card bg-secondary text-white">
            <div className="row my-row no-gutters">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <img src={imageUrl} className="p-2 card-img " alt="..." />
              </div>
              <div className=" col-sm-6 col-md-8 col-lg-9 pl-4">
                <div className="card-body">
                  <h3 className="card-title">{planets[randomId].name}</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Population:{planets[randomId].population}
                    </li>
                    <li className="list-group-item">
                      Rotation Period:{planets[randomId].rotation_period}
                    </li>
                    <li className="list-group-item">
                      Diameter: {planets[randomId].diameter}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default PlanetSlider;
