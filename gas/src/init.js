import { setData } from './data';
import { app } from './main';
import { createTrigger } from './trigger';

export const init = (data) => {
  setData(data);
  createTrigger();
  app();
};
