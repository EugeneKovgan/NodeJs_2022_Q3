import { rm } from './rm.js';
import { cp } from './cp.js';
import { errorMessage } from './common/errorMessage.js';

export const mv = async (pathFrom, pathTo) => {
  try {
    cp(pathFrom, pathTo).then(rm(pathFrom));
  } catch (err) {
    errorMessage(err);
  }
};
