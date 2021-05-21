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
        _type: 'TauMonthGlobalContext_3',
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
