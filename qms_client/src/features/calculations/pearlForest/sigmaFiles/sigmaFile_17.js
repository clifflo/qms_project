import * as R from 'ramda';
import {
  filterItemByStringFromList,
  throwFunctionalError,
  checkNilWithString
} from './_utilityHubBySigma';
import {
  getCoatedBoltOfMonth
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

export const getCoatedCrunchOfMonth =
  (coatedSigmaSourceMonthBranchNut) => {

  try{
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
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getCoatedCrunchOfMonth');
  }
}

export const coatedCrunchSetOfMonth =
  R.map(
    getCoatedCrunchOfMonth,
    twigBranchChineseSet);
