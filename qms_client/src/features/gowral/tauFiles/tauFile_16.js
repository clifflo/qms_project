import {
  tauRawMonthContextSet
} from './tauMiniHub_01';
import {
  findItemByStringFromList,
  checkNilWithString,
  throwFunctionalError
} from './_utilityHubByTau';

export const
  getTauMonthOriginalChineseFromBranch =
  tauMonthBranchChinese => {

  try{

    checkNilWithString(
      tauMonthBranchChinese,
      'tauMonthBranchChinese');

    const tauRawMonthContext =
      findItemByStringFromList(
        tauRawMonthContextSet,
        tauMonthBranchChinese,
        'tauMonthBranchChinese');

    const tauMonthOriginalChinese =
      tauRawMonthContext.
      tauMonthOriginalChinese;

    checkNilWithString(
      tauMonthOriginalChinese,
      'tauMonthOriginalChinese');

    return tauMonthOriginalChinese;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getTauMonthOriginalChineseFromBranch');
  }
}

export const
  getTauMonthBranchChineseFromOriginal =
  tauMonthOriginalChinese => {

  try{
    const tauRawMonthContext =
      findItemByStringFromList(
        tauRawMonthContextSet,
        tauMonthOriginalChinese,
        'tauMonthOriginalChinese');

    const tauMonthBranchChinese =
      tauRawMonthContext.
      tauMonthBranchChinese;

    checkNilWithString(
      tauMonthBranchChinese,
      'tauMonthBranchChinese');

    return tauMonthBranchChinese;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      getTauMonthBranchChineseFromOriginal);
  }
}
