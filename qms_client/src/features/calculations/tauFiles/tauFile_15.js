import * as R from 'ramda';
import {
  DateTime
} from 'luxon';
import {
  getTauDayChineseByIndex,
  tauDateMatchInTauMonthGlobalContext_2,
  tauMonthGlobalContextSet_2
} from './tauMiniHub_02';
import {
  getTwigFullComboChineseByIndex
} from './twigHubCloneOfTau';
import {
  checkNilWithNumber,
  checkNilWithTypedObject,
  throwFunctionalError,
  getIntervalWithEndInclusive
} from './utilityHubCloneOfTau';
import {
  getGenericTauMonthActiveContext
} from './tauFile_12';

export const getTauDayContextFromIso =
  sourceDateInIso => {

  try{

    const loadedTauDateMatchInTauMonthGlobalContext_2 =
     R.curry
     (tauDateMatchInTauMonthGlobalContext_2)
     (sourceLuxonCar);

    const matchedTauMonthGlobalContext_2 =
    R.find(
      loadedTauDateMatchInTauMonthGlobalContext_2,
      tauMonthGlobalContextSet_2);

    const matchedTauMonthActiveContext =
      getGenericTauMonthActiveContext(
        matchedTauMonthActiveContext);

    checkNilWithTypedObject(
      matchedTauMonthActiveContext,
      'matchedTauMonthActiveContext',
      'TauMonthActiveContext');

    if(matchedTauMonthActiveContext
      .tauMonthIsAugmented){

      const tauDayContextForAugmentedMonth =
        getTauDayContextForAugmentedMonth(
          sourceDateInIso,
          matchedTauMonthActiveContext);

      return tauDayContextForAugmentedMonth;
    }
    else {

      const tauDayContextForCleanMonth =
        getTauDayContextForCleanMonth(
          sourceDateInIso,
          matchedTauMonthActiveContext);

      return tauDayContextForCleanMonth;
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError('getTauDayContext_1');
  }
}
