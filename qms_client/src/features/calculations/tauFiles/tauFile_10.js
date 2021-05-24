import * as R from 'ramda';
import {
  tauDateMatchInTauMonthGlobalContext_2
} from './tauFile_09';
import {
  getTwigFullComboChineseByIndex
} from './_twigHubByTau';
import {
  checkNilWithNumber
} from './_utilityHubByTau';

export const getTauDayChineseByIndex =
  tauDayIndex => {

  checkNilWithNumber(
    tauDayIndex,
    'tauDayIndex');

  const chineseNumericalCharacters =
    '一二三四五六七八九十';

  if(tauDayIndex <= 9){
    return '初' +
      chineseNumericalCharacters[
        tauDayIndex];
  }
  else if(tauDayIndex <= 18){
    return '十' +
      chineseNumericalCharacters[
        tauDayIndex - 10];
  }
  else if(tauDayIndex == 19){
    return '二十';
  }
  else if(tauDayIndex <= 28){
    return '廿' +
      chineseNumericalCharacters[
        tauDayIndex - 20]
  }
  else if(tauDayIndex == 29){
    return '三十';
  }
  else {
    throw new Error(
      'Tau day index must be between 1 and 30 inclusive.');
  }
}
