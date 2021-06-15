import * as R from 'ramda';
import {
  filterItemByStringFromList,
  throwFunctionalError,
  checkNilWithString
} from './_utilityHubBySigma';
import {
  getQuenchedBoltOfMonth
} from './sigmaFile_16';
import {
  sigmaClutchContextSetOfGenericMonth
} from './sigmaMiniHub_01';
import {
  twigBranchChineseSet
} from './_twigHubBySigma';
import {
  getTauMonthOriginalChineseFromBranch
} from './_tauHubBySigma';

export const getQuenchedCrunchOfMonth =
  (quenchedSigmaSourceMonthBranchNut) => {

  try{
    const loadedGetQuenchedBoltOfMonth =
      R.curry
      (getQuenchedBoltOfMonth)
      (quenchedSigmaSourceMonthBranchNut);

    const sigmaClutchContextCrossTrunkSubsetOfMonth =
      filterItemByStringFromList(
        sigmaClutchContextSetOfGenericMonth,
        'SigmaBrakeTargetCrossTrunk',
        'sigmaBrakeTarget');

    const sigmaClutchContextCrossBranchSubsetOfMonth =
      filterItemByStringFromList(
        sigmaClutchContextSetOfGenericMonth,
        'SigmaBrakeTargetCrossBranch',
        'sigmaBrakeTarget');

    const quenchedBoltCrossTrunkSubsetOfMonth =
      R.reject(
        R.isNil,
        R.map(
          loadedGetQuenchedBoltOfMonth,
          sigmaClutchContextCrossTrunkSubsetOfMonth));

    const quenchedBoltCrossBranchSubsetOfMonth =
      R.reject(
        R.isNil,
        R.map(
          loadedGetQuenchedBoltOfMonth,
          sigmaClutchContextCrossBranchSubsetOfMonth));

    const quenchedSigmaSourceMonthOriginalNut =
      getTauMonthOriginalChineseFromBranch(
        quenchedSigmaSourceMonthBranchNut + '月');

    checkNilWithString(
      quenchedSigmaSourceMonthOriginalNut,
      'quenchedSigmaSourceMonthOriginalNut');

    const quenchedCrunchOfMonth = {
      _type: 'QuenchedCrunchOfMonth',
      quenchedSigmaSourceMonthBranchNut,
      quenchedSigmaSourceMonthOriginalNut,
      quenchedBoltCrossTrunkSubsetOfMonth,
      quenchedBoltCrossBranchSubsetOfMonth
    };

    return quenchedCrunchOfMonth;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getQuenchedCrunchOfMonth');
  }
}

export const quenchedCrunchSetOfMonth =
  R.map(
    getQuenchedCrunchOfMonth,
    twigBranchChineseSet);
