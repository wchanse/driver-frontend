import { SELECT_DRIVER } from './types';

export const selectDriver = (driver) => {
  return {
    type: SELECT_DRIVER,
    payload: driver,
  };
};
