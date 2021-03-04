import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  branchSentence,
  trunkSentence,
  isValidBranch
} from './plastic_1';
import {
  slider
} from '../utils';

export const branchSlider = (branch, distance) =>{
  if(!isValidBranch(branch)){
    throw new Error(`${branch} is not a valid branch.`);
  }
  try{
    return slider(1, branch, distance);
  }
  catch(err){
    console.error(err);
    throw new Error('Branch silder failed. See internal expection');
  }

}
