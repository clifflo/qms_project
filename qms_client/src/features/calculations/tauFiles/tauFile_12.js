import * as R from 'ramda';
import {
  checkNilWithNumber,
  throwFunctionalError
} from './utilityHubCloneOfTau';
import {
  DateTime
} from 'luxon';
import {
  getAugmentedTauMonthActiveContext
} from './tauFile_11';

export const buildTauMonthActiveContext =
  tauMonthGlobalContext_2 => {

  try{
    const { tauMonthHasLeap } =
      tauMonthGlobalContext_2;

    if(tauMonthHasLeap){

      const augmentedTauMonthActiveContext =
        getAugmentedTauMonthActiveContext(
          tauMonthGlobalContext_2);

      return augmentedTauMonthActiveContext;
    }
    else {
      return {
        ...tauMonthGlobalContext_2,
        _type: 'TauMonthGlobalContext_3'
      }
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getTauMonthGlobalContext_3');
  }
}
