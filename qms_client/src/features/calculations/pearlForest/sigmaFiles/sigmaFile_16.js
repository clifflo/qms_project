import * as R from 'ramda';
import {
  findItemByStringFromList,
  filterItemByStringFromList,
  throwFunctionalError
} from './_utilityHubBySigma';
import {
  sigmaClutchContextSetOfGenericMonth
} from './sigmaMiniHub_01';
import {
  twigBranchChineseSet
} from './_twigHubBySigma';

const getCoatedBoltOfMonth =
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
        coatedSigmaSourceMonthNut,
        'sigmaSourceNutOfMonth');

    const {
      sigmaTargetCrossTrunkNutForMonth,
      sigmaTargetCrossBranchNutForMonth
    } = sigmaBoltContext;

    if(sigmaBrakeTarget ==
      'sigma-brake-target-cross-trunk'){

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
      'sigma-brake-target-cross-branch'){

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
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfCoatedBoltOfMonth');
  }
}

const getCoatedCrunchOfMonth =
  (coatedSigmaSourceMonthNut) => {

  const loadedGetCoatedBoltOfMonth =
    R.curry
    (getCoatedBoltOfMonth)
    (coatedSigmaSourceMonthNut);

  const sigmaClutchContextCrossTrunkSubsetOfMonth =
    filterItemByStringFromList(
      sigmaClutchContextSetOfGenericMonth,
      'sigma-brake-target-cross-trunk',
      'sigmaBrakeTarget');

  const sigmaClutchContextCrossBranchSubsetOfMonth =
    filterItemByStringFromList(
      sigmaClutchContextSetOfGenericMonth,
      'sigma-brake-target-cross-branch',
      'sigmaBrakeTarget');

  const coatedBoltCrossTrunkSubsetOfMonth =
    R.map(
      loadedGetCoatedBoltOfMonth,
      sigmaClutchContextCrossTrunkSubsetOfMonth);

  const coatedBoltCrossBranchSubsetOfMonth =
    R.map(
      loadedGetCoatedBoltOfMonth,
      sigmaClutchContextCrossBranchSubsetOfMonth);

  const coatedCrunchOfMonth = {
    _type: 'CoatedCrunchOfMonth',
    coatedSigmaSourceMonthNut,
    coatedBoltCrossTrunkSubsetOfMonth,
    coatedBoltCrossBranchSubsetOfMonth
  };

  return coatedCrunchOfMonth;
}

export const coatedCrunchSetOfMonth =
  R.map(
    getCoatedCrunchOfMonth,
    twigBranchChineseSet);
