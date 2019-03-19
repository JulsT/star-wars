import React from "react";
import "./Error.css";
import icon from "./../Error/death-star.png";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    // if (this.state.hasError) {
    // }
    // return this.props.children;
    return (
      <div className="text-white text-center">
        <img className="error-image" src={icon} alt="death-star" />
        <h1>Something went wrong...</h1>
      </div>
    );
  }
}

export default ErrorBoundary;
