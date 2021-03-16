import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  branchOrder,
  trunkOrder,
  isValidBranch
} from './plastic_1';
import {
  slider,
  move
} from '../utils';

export const branchSlider = (sBranch, tBranch) =>{
  if(!isValidBranch(sBranch)){
    throw new Error(
      `${sBranch} is not a valid source branch.`);
  }

  if(!isValidBranch(tBranch)){
    throw new Error(
      `${tBranch} is not a valid target branch.`)
  }

  try{
    return slider(
      branchOrder,
      sBranch,
      tBranch);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Branch silder failed.');
  }

}

export const moveBranch =
  (branch, distance, direction) => {

  if(!isValidBranch(branch)){
    throw new Error(`${branch} is not a valid branch.`);
  }

  return move(branchOrder, branch, distance, direction);
}
