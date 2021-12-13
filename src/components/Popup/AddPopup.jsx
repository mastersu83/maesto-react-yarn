import React from "react";
import closeIcon from "../../assets/img/close-icon.svg";
import { Field, reduxForm } from "redux-form";

const AddPopup = ({ newPlacesData, openAddPopup, addPopup }) => {
  let newPlacesDataLocal = (value) => {
    newPlacesData(value.newPlace, value.newLink);
    openAddPopup();
  };
  return (
    <div className={`popup ${addPopup ? "open" : ""}`}>
      <div className="popup__body">
        <div className="popup__content">
          <img
            onClick={openAddPopup}
            src={closeIcon}
            alt=""
            className="popup__close-img"
          />
          <div className="popup__inner">
            <div className="popup__formAdd">
              <div className="popup__title">Новое место</div>
              <AddPlacesFormRedux onSubmit={newPlacesDataLocal} />
            </div>
          </div>
        </div>
      </div>
      <div onClick={openAddPopup} className="overlay" />
    </div>
  );
};

const AddPlacesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Название"}
          name={"newPlace"}
          component={"input"}
          className="popup__input"
        />
        <Field
          placeholder={"Сылка на картирку"}
          name={"newLink"}
          component={"input"}
          className="popup__input"
        />
      </div>
      <div>
        <button className="popup__submit">Сохранить</button>
      </div>
    </form>
  );
};

const AddPlacesFormRedux = reduxForm({
  form: "addPlacesForm",
})(AddPlacesForm);

export default AddPopup;
