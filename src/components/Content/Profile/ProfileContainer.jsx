import { connect } from "react-redux";
import Profile from "./Profile";
import { newProfileData } from "../../../redux/actions/profile";
import { newPlacesData } from "../../../redux/actions/places";

let mapStateToProps = (state) => {
  return {
    profile: state.profile,
    places: state.places,
  };
};

const PlacesContainer = connect(mapStateToProps, {
  newProfileData,
  newPlacesData,
})(Profile);

export default PlacesContainer;
