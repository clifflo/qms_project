import * as R from 'ramda';
import {
  findItemByStringFromList,
  filterItemByStringFromList,
  throwFunctionalError,
  checkNilWithString
} from './_utilityHubBySigma';

export const getQuenchedBoltOfMonth =
  (quenchedSigmaSourceMonthNut,
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
        quenchedSigmaSourceMonthNut + '月',
        'sigmaSourceNutOfMonthBranch');

    if(!R.isNil(sigmaBoltContext)){
      const {
        sigmaTargetCrossTrunkNutForMonth,
        sigmaTargetCrossBranchNutForMonth
      } = sigmaBoltContext;

      if(sigmaBrakeTarget ==
        'SigmaBrakeTargetCrossTrunk'){

        const sigmaQuenchedBoltForMonthToCrossTrunk = {
          sigmaTargetCrossTrunkNutForMonth,
          sigmaBrakeName,
          sigmaBrakeTarget,
          sigmaBrakeTopics,
          _type: 'SigmaQuenchedBoltForMonth',
          _subType: 'SigmaQuenchedBoltForMonthToCrossTrunk'
        };

        return sigmaQuenchedBoltForMonthToCrossTrunk;
      }
      else if(sigmaBrakeTarget ==
        'SigmaBrakeTargetCrossBranch'){

        const sigmaQuenchedBoltForMonthToCrossBranch = {
          sigmaTargetCrossBranchNutForMonth,
          sigmaBrakeName,
          sigmaBrakeTarget,
          sigmaBrakeTopics,
          _type: 'SigmaQuenchedBoltForMonth',
          _subType: 'SigmaQuenchedBoltForMonthToCrossBranch'
        }
        return sigmaQuenchedBoltForMonthToCrossBranch;
      }
    }
    else {
      return null;
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfQuenchedBoltOfMonth');
  }
}
