let initialState = {
  name: "Жак-Ив Кусто",
  post: "Исследователь океана",
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_PROFILE_DATA":
      return {
        ...state,
        name: action.name,
        post: action.post,
      };

    default:
      return state;
  }
};

export default profile;
