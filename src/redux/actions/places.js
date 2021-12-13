export const newPlacesData = (name, link) => {
  return {
    type: "NEW_PLACES_DATA",
    name,
    link,
  };
};
export const removePlacesItem = (id) => {
  return {
    type: "REMOVE_PLACES_ITEM",
    id,
  };
};
