import React, { Component } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import PropTypes from "prop-types";

class Cards extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <div className="cards">
        <h1>Check out these discounts.</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={items[0].src}
                text={items[0].text}
                label={items[0].label}
                path={items[0].path}
              />
              <CardItem
                src={items[0].src}
                text={items[0].text}
                label={items[0].label}
                path={items[0].path}
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={items[0].src}
                text={items[0].text}
                label={items[0].label}
                path={items[0].path}
              />
              <CardItem
                src={items[2].src}
                text={items[0].text}
                label={items[0].label}
                path={items[0].path}
              />
              <CardItem
                src={items[1].src}
                text={items[0].text}
                label={items[0].label}
                path={items[0].path}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Cards.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(Cards);
