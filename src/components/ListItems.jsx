import React, { Component } from "react";
import { getData } from "../utils/callApi";
import { PropTypes } from "prop-types";
class ListItems extends Component {
  state = {
    data: [],
    next: "",
    previous: ""
  };
  async componentDidMount() {
    try {
      const data = await getData(this.props.match.path);
      this.setState({
        data: data.results,
        next: data.next,
        previous: data.previous
      });
    } catch (error) {
      console.log("error in ListItems", error);
    }
  }
  async componentDidUpdate(prevProps) {
    if (this.props.match.path !== prevProps.match.path) {
      const data = await getData(this.props.match.path);
      this.setState({
        data: data.results,
        next: data.next,
        previous: data.previous
      });
    }
  }
  handleChangePage = page => {
    if (page !== null) {
      fetch(page)
        .then(res => res.json())
        .then(data =>
          this.setState({
            data: data.results,
            next: data.next,
            previous: data.previous
          })
        );
    }
  };
  render() {
    const { data, next, previous } = this.state;
    const { getInfoCard } = this.props;
    return (
      <div className="col-md-6">
        <React.Fragment>
          <ul className="list-group pb-3 text-white">
            {data.map(el => (
              <li
                key={el.created}
                onClick={() => {
                  getInfoCard(el.url);
                }}
                className="list-group-item link-info"
              >
                {el.name}
              </li>
            ))}
          </ul>
          <nav aria-label="Page navigation example">
            <ul className="pagination ">
              <li
                className={
                  previous === null ? "page-item disabled" : "page-item"
                }
              >
                <button
                  onClick={() => this.handleChangePage(previous)}
                  className="page-link"
                >
                  Previous
                </button>
              </li>
              <li
                className={next === null ? "page-item disabled" : "page-item"}
              >
                <button
                  onClick={() => this.handleChangePage(next)}
                  className="page-link"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </React.Fragment>
      </div>
    );
  }
}

ListItems.propTypes = {
  getInfoCard: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  })
};
export default ListItems;
