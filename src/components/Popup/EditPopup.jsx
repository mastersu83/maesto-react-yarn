import React from "react";
import closeIcon from "../../assets/img/close-icon.svg";
import { Field, reduxForm } from "redux-form";

const EditPopup = ({ newProfileData, openEditPopup, editPopup }) => {
  let newProfileDataLocal = (value) => {
    newProfileData(value.newName, value.newPost);
    openEditPopup();
  };
  return (
    <div className={`popup ${editPopup ? "open" : ""}`}>
      <div className="popup__body">
        <div className="popup__content">
          <img
            onClick={openEditPopup}
            className="popup__close-img"
            src={closeIcon}
            alt=""
          />
          <div className="popup__inner">
            <div className="popup__formEdit">
              <div className="popup__title">Редактировать профиль</div>
              <EditProfileFormRedux onSubmit={newProfileDataLocal} />
            </div>
          </div>
        </div>
      </div>
      <div onClick={openEditPopup} className="overlay" />
    </div>
  );
};

const EditProfileForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Введите Имя"}
          name={"newName"}
          component={"input"}
          className="popup__input"
        />
        <Field
          placeholder={"Раскажите о себе"}
          name={"newPost"}
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

const EditProfileFormRedux = reduxForm({
  form: "editProfileDataForm",
})(EditProfileForm);

export default EditPopup;
