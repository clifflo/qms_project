import * as R from 'ramda';
import {
  findItemByStringFromList,
  filterItemByStringFromList,
  throwFunctionalError,
  checkNilWithString
} from './_utilityHubBySigma';
import {
  sigmaClutchContextSetOfGenericMonth
} from './sigmaMiniHub_01';
import {
  twigBranchChineseSet
} from './_twigHubBySigma';
import {
  getTauMonthOriginalChineseFromBranch
} from './_tauHubBySigma';

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
        coatedSigmaSourceMonthNut + '月',
        'sigmaSourceNutOfMonthBranch');

    if(!R.isNil(sigmaBoltContext)){
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

const getCoatedCrunchOfMonth =
  (coatedSigmaSourceMonthBranchNut) => {

  const loadedGetCoatedBoltOfMonth =
    R.curry
    (getCoatedBoltOfMonth)
    (coatedSigmaSourceMonthBranchNut);

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
    R.reject(
      R.isNil,
      R.map(
        loadedGetCoatedBoltOfMonth,
        sigmaClutchContextCrossTrunkSubsetOfMonth));

  const coatedBoltCrossBranchSubsetOfMonth =
    R.reject(
      R.isNil,
      R.map(
        loadedGetCoatedBoltOfMonth,
        sigmaClutchContextCrossBranchSubsetOfMonth));

  const coatedSigmaSourceMonthOriginalNut =
    getTauMonthOriginalChineseFromBranch(
      coatedSigmaSourceMonthBranchNut + '月');

  checkNilWithString(
    coatedSigmaSourceMonthOriginalNut,
    'coatedSigmaSourceMonthOriginalNut');

  const coatedCrunchOfMonth = {
    _type: 'CoatedCrunchOfMonth',
    coatedSigmaSourceMonthBranchNut,
    coatedSigmaSourceMonthOriginalNut,
    coatedBoltCrossTrunkSubsetOfMonth,
    coatedBoltCrossBranchSubsetOfMonth
  };

  return coatedCrunchOfMonth;
}

export const coatedCrunchSetOfMonth =
  R.map(
    getCoatedCrunchOfMonth,
    twigBranchChineseSet);
