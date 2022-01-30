import React from "react";
import { PlacesItem } from "./PlacesItem";
import { useSelector } from "react-redux";
import { getPlacesItem } from "../../../redux/selectors/places_selectors";

export const Places = () => {
  const items = useSelector(getPlacesItem);

  let placesItem = items.map((i) => (
    <PlacesItem id={i.id} key={i.id} name={i.name} link={i.link} />
  ));
  return (
    <section className="places container">
      <div className="places__items">{placesItem}</div>
    </section>
  );
};
