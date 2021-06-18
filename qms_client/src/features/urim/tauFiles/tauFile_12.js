import * as R from 'ramda';
import {
  checkNilWithNumber,
  throwFunctionalError
} from './_utilityHubByTau';
import {
  DateTime
} from 'luxon';
import {
  getAugmentedTauMonthActiveContext
} from './tauFile_11';

export const
  getGenericTauMonthActiveContext =
  tauMonthGlobalContext_2 => {

  try{
    const { tauMonthIsAugmented } =
      tauMonthGlobalContext_2;

    if(tauMonthIsAugmented){

      const augmentedTauMonthActiveContext =
        getAugmentedTauMonthActiveContext(
          tauMonthGlobalContext_2);

      return augmentedTauMonthActiveContext;
    }
    else {

      const cleanTauMonthActiveContext = {
        ...tauMonthGlobalContext_2,
        _type: 'TauMonthActiveContext',
        _subType: 'CleanTauMonthActiveContext'
      };

      return cleanTauMonthActiveContext;
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'buildTauMonthActiveContext');
  }
}
