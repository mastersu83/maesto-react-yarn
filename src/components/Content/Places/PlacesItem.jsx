import React from "react";
import ImgPopup from "../../Popup/ImgPopup";

const PlacesItem = (props) => {
  const [popupImg, setPopup] = React.useState(false);

  let openPopupImg = () => {
    setPopup(!popupImg);
  };

  const [like, setLike] = React.useState(true);
  const likeToggle = () => {
    setLike(!like);
  };

  let removeItem = () => {
    props.removePlacesItem(props.id);
  };

  return (
    <div className="places__item">
      <img
        onClick={openPopupImg}
        src={props.link}
        alt=""
        className="places__item-img"
      />
      <div className="places__data">
        <h2 className="places__item-title">{props.name}</h2>
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
        link={props.link}
        name={props.name}
        openImagePopup={openPopupImg}
      />
    </div>
  );
};

export default PlacesItem;
