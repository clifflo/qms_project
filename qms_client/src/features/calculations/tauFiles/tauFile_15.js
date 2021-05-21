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
import {
  getTauDayContextForAugmentedMonth
} from './tauFile_14';
import {
  getTauDayContextForCleanMonth
} from './tauFile_13';

export const getTauDayContextFromIso =
  sourceDateInISO => {

  try{

    const sourceLuxonCar =
      DateTime.fromISO(sourceDateInISO);

    const loadedTauDateMatchInTauMonthGlobalContext_2 =
      R.curry
      (tauDateMatchInTauMonthGlobalContext_2)
      (sourceLuxonCar);

    const matchedTauMonthGlobalContext_2 =
      R.find(
        loadedTauDateMatchInTauMonthGlobalContext_2,
        tauMonthGlobalContextSet_2);

    checkNilWithTypedObject(
      matchedTauMonthGlobalContext_2,
      'matchedTauMonthGlobalContext_2',
      'TauMonthGlobalContext_2');

    const matchedTauMonthActiveContext =
      getGenericTauMonthActiveContext(
        matchedTauMonthGlobalContext_2);

    checkNilWithTypedObject(
      matchedTauMonthActiveContext,
      'matchedTauMonthActiveContext',
      'TauMonthActiveContext');

    if(matchedTauMonthActiveContext
      .tauMonthIsAugmented){

      const tauDayContextForAugmentedMonth =
        getTauDayContextForAugmentedMonth(
          sourceDateInISO,
          matchedTauMonthActiveContext);

      return tauDayContextForAugmentedMonth;
    }
    else {

      const tauDayContextForCleanMonth =
        getTauDayContextForCleanMonth(
          sourceDateInISO,
          matchedTauMonthActiveContext);

      return tauDayContextForCleanMonth;
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError('getTauDayContext');
  }
}
