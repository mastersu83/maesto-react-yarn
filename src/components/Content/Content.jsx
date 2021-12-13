import React from "react";
import PlacesContainer from "./Places/PlacesContainer";
import ProfileContainer from "./Profile/ProfileContainer";

const Content = () => {
  return (
    <main className="main wrapper">
      <ProfileContainer />
      <PlacesContainer />
    </main>
  );
};

export default Content;
