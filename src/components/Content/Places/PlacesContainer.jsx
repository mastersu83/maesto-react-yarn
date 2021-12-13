import { connect } from "react-redux";
import Places from "./Places";
import { removePlacesItem } from "../../../redux/actions/places";

let mapStateToProps = (state) => {
  return {
    places: state.places,
  };
};

const PlacesContainer = connect(mapStateToProps, {
  removePlacesItem,
})(Places);

export default PlacesContainer;
