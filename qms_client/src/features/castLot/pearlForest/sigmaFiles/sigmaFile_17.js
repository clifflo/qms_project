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
  twigBranchChineseSet,
  isValidTwigBranchChinese
} from './_twigHubBySigma';
import {
  getTauMonthOriginalChineseFromBranch
} from './_tauHubBySigma';

export const getQuenchedCrunchOfMonth =
  quenchedSigmaSourceMonthBranchNut => {

  try{

    checkNilWithString(
      quenchedSigmaSourceMonthBranchNut,
      'quenchedSigmaSourceMonthBranchNut');

    const validTwigBranchChinese =
      isValidTwigBranchChinese(
        quenchedSigmaSourceMonthBranchNut);

    if(!validTwigBranchChinese){
      throw new Error(
        'Invalid quenched sigma source month branch.');
    }

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

    const quenchedBoltCrossTrunkNutSubsetOfMonth =
      R.reject(
        R.isNil,
        R.map(
          loadedGetQuenchedBoltOfMonth,
          sigmaClutchContextCrossTrunkSubsetOfMonth));

    const quenchedBoltCrossBranchNutSubsetOfMonth =
      R.reject(
        R.isNil,
        R.map(
          loadedGetQuenchedBoltOfMonth,
          sigmaClutchContextCrossBranchSubsetOfMonth));

    const quenchedSigmaSourceMonthOriginal =
      getTauMonthOriginalChineseFromBranch(
        quenchedSigmaSourceMonthBranchNut + '月');

    checkNilWithString(
      quenchedSigmaSourceMonthOriginal,
      'quenchedSigmaSourceMonthOriginal');

    const quenchedCrunchOfMonth = {
      _type: 'QuenchedCrunchOfMonth',
      quenchedSigmaSourceMonthBranchNut,
      quenchedSigmaSourceMonthOriginal,
      quenchedBoltCrossTrunkNutSubsetOfMonth,
      quenchedBoltCrossBranchNutSubsetOfMonth
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
