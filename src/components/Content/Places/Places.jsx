import React from "react";
import PlacesItem from "./PlacesItem";

const Places = (props) => {
  let placesItem = props.places.items.map((i, index) => (
    <PlacesItem
      items={props.places.items}
      removePlacesItem={props.removePlacesItem}
      index={index}
      id={i.id}
      key={i.id}
      name={i.name}
      link={i.link}
    />
  ));
  return (
    <section className="places container">
      <div className="places__items">{placesItem}</div>
    </section>
  );
};

export default Places;
