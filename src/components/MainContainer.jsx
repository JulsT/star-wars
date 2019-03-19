import React, { Component } from "react";
import ListItems from "./ListItems";
import InfoCard from "./InfoCard";
import { getData, showImage, getId, getDetails } from "../utils/callApi";
import { PropTypes } from "prop-types";
class MainContainer extends Component {
  state = { selectedItem: [], imageUrl: "" };

  getInfoCard = async url => {
    try {
      const id = getId(url);
      const data = await getData(this.props.match.url, `/${id}/`);
      console.log("Data", data);
      const imageUrl = await showImage(this.props.match.url, id);
      const tableDetail = getDetails(this.props.match.url, data);
      this.setState({
        selectedItem: tableDetail,
        imageUrl
      });
    } catch (error) {
      console.log("error in main container");
    }
  };
  render() {
    const { match } = this.props;
    return (
      <div className="row my-3">
        <ListItems match={match} getInfoCard={this.getInfoCard} />
        <InfoCard
          selectedItem={this.state.selectedItem}
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}
MainContainer.propTypes = {
  match: PropTypes.object.isRequired
};
export default MainContainer;
