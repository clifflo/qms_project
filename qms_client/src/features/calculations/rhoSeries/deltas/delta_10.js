import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  getDpcba,
  getDfcba
} from './delta_09';

// [wbdfn] is wheat bowl delta focus nickname
// [chdfn] is cheese delta focus nickname
// [clbpm] is cross list by focus movement
export const getClbfm =
  (wbdfn, chdfn, slcrl) => {

  const mapFn = lhcdwi => {

    // Iso downward index cross list
    const idicl = utFilterByPropEq(
      'lhcdwi', lhcdwi, slcrl);

    if(idicl.length == 1){
      return null;
    }
    else if(idicl.length == 2){

      // Wheat bowl iso downward index cross
      const wbics = utFindByPropTrue(
        'isWbocr', idicl);

      const chics = utFindByPropFalse(
        'isWbocr', idicl);

      E.cknwo('wbics', wbics);
      E.cknwo('chics', chics);

      // Is wheat bowl match the requied focus
      const isWbmfc =
        wbics.dfccn == getDfcba(wbdfn);

      const isChmfc =
        chics.dfccn == getDfcba(chdfn);

      // Is matching focus movement
      const isMfcm = isWbmfc && isChmfc;

      if(isMfcm){
        return {
          wbics,
          chics
        };
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
      R.anyPass,
      R.map(mapFn))
    (R.range(0, 6));
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [clbfm].');
  }
}

// [cbfwp] is cross by focus with paladin.
// [crmst] is cross must strike.
export const getCbfwp =
  (dplal, dfcal, crmst, slcrl) => {

  E.cknws(dplal, 'dplal');
  E.cknws(dfcal, 'dfcal');

  const findFn = slcros => {

    const matchDplal =
      slcros.dplcn == getDpcba(dplal);

    const matchDfcal =
      slcros.dfccn == getDfcba(dfcal);

    const matchCrmst =
      !crmst || slcros.isStrike;

    return R.allPass([
      matchDplal,
      matchDfcal,
      matchStrike,
      slcros.isWbocr
    ]);
  }

  const result = R.find(findFn, slcrl);
  return result;
}
