
export const saveUserData = (userData) => ({
  type: "SAVE_USER_DATA",
  payload: userData,
});

const initialState = {
  userData: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
