import React from "react";
import closeIcon from "../../assets/img/close-icon.svg";

export const ImgPopup = (props) => {
  return (
    <div className={`popup${props.imgPopup ? " open" : ""}`}>
      <div className="popup__body">
        <div className="popupImg__container">
          <img src={props.link} alt="" className="popupImg__image" />
          <h2 className="popupImg__name">{props.name}</h2>
          <img
            onClick={props.openImagePopup}
            src={closeIcon}
            alt=""
            className="popup__close-img"
          />
        </div>
      </div>
      <div onClick={props.openImagePopup} className="overlay" />
    </div>
  );
};
