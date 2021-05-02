import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  utFilterByPropEq
} from '../../utils/util_05';
import {
  isValidDfccn
} from '../rhos/rho_08';

// Get cross list by focus
export const getClbfc = (dfccn, slcrl) => {

  E.cknwa(slcrl, 'slcrl');
  E.cknws(dfccn, 'dfccn');

  if(!isValidDfccn(dfccn)){
    throw new Error(
      `${dfccn} is not a valid [dfccn].`);
  }

  const clbfc = utFilterByPropEq(
    'dfccn', dfccn, slcrl);

  return clbfc;
}

export const getClbpl = (dplcn, slcrl) => {

  E.cknwa(slcrl, 'slcrl');
  E.cknws(dplcn, 'dplcn');

  if(!isValidDfccn(dplcn)){
    throw new Error(
      `${dplcn} is not a valid [dplcn].`);
  }

  const clbpl = utFilterByPropEq(
    'dplcn', dplcn, slcrl);

  return clbpl;
}

export const getRjkcr = slcrl => {

  try{
    return utFindByPropTrue(slcrl, 'isRjk');
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [rjkcr].');
  }
}

export const getRqncr = slcrl => {

  try{
    return utFindByPropTrue(slcrl, 'isRqn');
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [rqncr].');
  }
}

export const getRkgcr = slcrl => {

  try{
    return utFindByPropTrue(slcrl, 'isRkg');
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [rkgcr].');
  }
}

// [wbdfc] is wheat bowl delta focus chinese
// [chdfc] is cheese delta focus chinese
// [clbpm] is cross list by focus movement
export const getClbfm =
  (wbdfc, chdfc, slcrl) => {

  const mapFn = lhcdwi => {

    // Iso downward index cross list
    const idicl = utFilterByPropEq(
      'lhcdwi', lhcdwi, slcrl);

    if(idicl.length == 1){
      return null;
    }
    else if(crosses.length == 2){

      // Wheat bowl iso downward index cross
      const wbics = utFindByPropTrue(
        'isWbocr', idicl);

      const chics = utFindByPropFalse(
        'isWbocr', idicl);

      E.cknwo(wbics, 'wbics');
      E.cknwo(chics, 'chics');

      // Is wheat bowl match the requied focus
      const isWbmfc = wbics.dfccn == wbdfc;
      const isChmfc = chics.dfccn == chdfc;

      // Is matching focus movement
      const isMfcm = isWbmfc && isChmfc;
      if(isMfcm){
        return { wbics, chics };
      }
      else {
        return null;
      }
    }
    else {
      throw new Error(
        'It must be at least one cross'
        + 'matched for various [lhcdwi].');
    }
  }

  try{
    const clbfm = R.compose(
      RA.compact,
      R.map(mapFn))
    (R.range(0, 6));
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [clbfm].');
  }


}
