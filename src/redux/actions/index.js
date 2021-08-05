import * as types from "./types";

export const selectDriver = (drivers) => {
  return {
    type: types.GET_DRIVERS,
    payload: drivers,
  };
};

export const addDriver = (driver) => {
  return {
    type: types.ADD_DRIVER,
    payload: driver,
  };
};
