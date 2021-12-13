const initialState = {
  items: [
    {
      id: 0,
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      id: 1,
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      id: 2,
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      id: 3,
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      id: 4,
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      id: 5,
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ],
  newId: 6,
};

const places = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_PLACES_DATA":
      let newPlace = {
        id: state.newId++,
        name: action.name,
        link: action.link,
      };
      return {
        ...state,
        items: [newPlace, ...state.items],
      };
    case "REMOVE_PLACES_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default places;
