import * as R from 'ramda';
import {
  findItemByStringFromList,
  filterItemByStringFromList,
  throwFunctionalError,
  checkNilWithString
} from './_utilityHubBySigma';

export const getCoatedBoltOfMonth =
  (coatedSigmaSourceMonthNut,
  sigmaClutchContextOfGenericMonth) => {

  try{
    const {
      sigmaBoltContextSetOfMonth,
      sigmaBrakeName,
      sigmaBrakeTarget,
      sigmaBrakeTopics
    } = sigmaClutchContextOfGenericMonth;

    const sigmaBoltContext =
      findItemByStringFromList(
        sigmaBoltContextSetOfMonth,
        coatedSigmaSourceMonthNut + '月',
        'sigmaSourceNutOfMonthBranch');

    if(!R.isNil(sigmaBoltContext)){
      const {
        sigmaTargetCrossTrunkNutForMonth,
        sigmaTargetCrossBranchNutForMonth
      } = sigmaBoltContext;

      if(sigmaBrakeTarget ==
        'SigmaBrakeTargetCrossTrunk'){

        const sigmaCoatedBoltForMonthToCrossTrunk = {
          sigmaTargetCrossTrunkNutForMonth,
          sigmaBrakeName,
          sigmaBrakeTarget,
          sigmaBrakeTopics,
          _type: 'SigmaCoatedBoltForMonth',
          _subType: 'SigmaCoatedBoltForMonthToCrossTrunk'
        };

        return sigmaCoatedBoltForMonthToCrossTrunk;
      }
      else if(sigmaBrakeTarget ==
        'SigmaBrakeTargetCrossBranch'){

        const sigmaCoatedBoltForMonthToCrossBranch = {
          sigmaTargetCrossBranchNutForMonth,
          sigmaBrakeName,
          sigmaBrakeTarget,
          sigmaBrakeTopics,
          _type: 'SigmaCoatedBoltForMonth',
          _subType: 'SigmaCoatedBoltForMonthToCrossBranch'
        }
        return sigmaCoatedBoltForMonthToCrossBranch;
      }
    }
    else {
      return null;
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfCoatedBoltOfMonth');
  }
}
