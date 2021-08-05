const INITIAL_STATE = {
  selectedDriver: null,
};

const selectedDriverReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_DRIVER':
      return { ...state, selectedDriver: action.payload };
    default:
      return state;
  }
};

export default selectedDriverReducer;
