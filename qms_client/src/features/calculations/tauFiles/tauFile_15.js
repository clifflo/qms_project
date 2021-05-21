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
    const sourceLuxonCar =
      DateTime.fromISO(sourceDateInIso);


  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getTauDayContext_1');
  }
}
