export const newProfileData = (name, post) => {
  return {
    type: "NEW_PROFILE_DATA",
    name,
    post,
  };
};
