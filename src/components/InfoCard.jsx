import React, { Component } from "react";
import { PropTypes } from "prop-types";

class InfoCard extends Component {
  render() {
    const { selectedItem, imageUrl } = this.props;
    return (
      <div className="col-md-6">
        {selectedItem.length === 0 ? (
          <p className="text-monospace text-white">
            {" "}
            Choose the item to know more
          </p>
        ) : (
          <div className="card bg-secondary text-white ">
            <div className="row my-row no-gutters">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <img src={imageUrl} className="card-img " alt="..." />
              </div>
              <div className=" col-sm-6 col-md-8 col-lg-9">
                <div className="card-body">
                  <h3 className="card-title">{selectedItem[0].value}</h3>
                  <ul className="list-group list-group-flush">
                    {selectedItem.map(
                      (item, index) =>
                        item.label && (
                          <li key={index} className="list-group-item">
                            {item.label} : {item.value}
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

InfoCard.propTypes = {
  selectedItem: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default InfoCard;
