import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  branchSentence,
  trunkSentence,
  isValidBranch
} from './plastic_1';
import {
  slider,
  move
} from '../utils';

export const branchSlider = (sourceBranch, targetBranch) =>{
  if(!isValidBranch(sourceBranch)){
    throw new Error(
      `${sourceBranch} is not a valid source branch.`);
  }

  if(!isValidBranch(targetBranch)){
    throw new Error(
      `${targetBranch} is not a valid target branch.`)
  }

  try{
    return slider(
      branchSentence,
      sourceBranch,
      targetBranch);
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

  return move(branchSentence, branch, distance, direction);
}
