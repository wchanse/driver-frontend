const defaultState = {
  name: null,
  licenseNumber: null,
  city: null,
  state: null,
  drivers: [],
};

const driverReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_DRIVERS":
      return { ...state, ...action.payload };

    case "ADD_DRIVER":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default driverReducer;
