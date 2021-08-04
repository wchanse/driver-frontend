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
      state.drivers = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default driverReducer;
