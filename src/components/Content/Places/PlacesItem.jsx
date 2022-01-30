import React from "react";
import { useDispatch } from "react-redux";
import { removePlacesItem } from "../../../redux/actions/places";
import { ImgPopup } from "../../Popup/ImgPopup";

export const PlacesItem = ({ id, name, link }) => {
  const [popupImg, setPopup] = React.useState(false);

  let openPopupImg = () => {
    setPopup(!popupImg);
  };

  const [like, setLike] = React.useState(true);
  const likeToggle = () => {
    setLike(!like);
  };

  const dispatch = useDispatch();

  let removeItem = () => {
    dispatch(removePlacesItem(id));
  };

  return (
    <div className="places__item">
      <img
        onClick={openPopupImg}
        src={link}
        alt=""
        className="places__item-img"
      />
      <div className="places__data">
        <h2 className="places__item-title">{name}</h2>
        <button
          onClick={likeToggle}
          type="button"
          className={`places__item-like ${like ? "" : "darken"}`}
        />
      </div>
      <button
        onClick={removeItem}
        type="button"
        className="places__remove-button"
      />
      <ImgPopup
        imgPopup={popupImg}
        link={link}
        name={name}
        openImagePopup={openPopupImg}
      />
    </div>
  );
};
