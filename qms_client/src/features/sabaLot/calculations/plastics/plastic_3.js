import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  brhOrder,
  trkOrder,
  isValidBrh
} from './plastic_1';
import {
  slider,
  move
} from '../utils';

export const brhSlider = (sBrh, tBrh) =>{
  if(!isValidBrh(sBrh)){
    throw new Error(
      `${sBrh} is not a valid source brh.`);
  }

  if(!isValidBrh(tBrh)){
    throw new Error(
      `${tBrh} is not a valid target brh.`)
  }

  try{
    return slider(
      brhOrder,
      sBrh,
      tBrh);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Brh silder failed.');
  }

}

export const moveBrh =
  (brh, distance, direction) => {

  if(!isValidBrh(brh)){
    throw new Error(`${brh} is not a valid brh.`);
  }

  return move(brhOrder, brh, distance, direction);
}
