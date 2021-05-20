import * as R from 'ramda';
import {
  tauDateMatchInTauMonthGlobalContext_2
} from './tauFile_09';
import {
  getTwigFullComboChineseByIndex
} from './twigHubCloneOfTau';

const getTauDayChineseByIndex =
  tauDayIndex => {

  const chineseNumericalCharacters =
    '一二三四五六七八九十';

  if(tauDayIndex <= 10){
    return '初' +
      chineseNumericalCharacters[tauDayIndex];
  }
  else if(tauDayIndex <= 19){
    return '十' +
      chineseNumericalCharacters[tauDayIndex - 10];
  }
  else if(tauDayIndex == 20){
    return '二十';
  }
  else if(tauDayIndex <= 29){
    return '廿' +
      chineseNumericalCharacters[tauDayIndex - 20]
  }
  else if(tauDayIndex == 30){
    return '三十';
  }
}

export const getTauDateContextFromIso =
  sourceDateInIso => {

  const sourceLuxonCar =
    DateTime.fromISO(sourceDateInIso);

  const loadedTauDateMatchInTauMonthGlobalContext_2 =
    R.curry
    (tauDateMatchInTauMonthGlobalContext_2)
    (sourceLuxonCar);

  const matchedTauMonthGlobalContext_2 =
    R.find(
      loadedTauDateMatchInTauMonthGlobalContext_2,
      tauMonthGlobalContextSet_2);

  const referenceTauLuxonBox = {
    day: 16,
    month: 1,
    year: 2021
  };

  const referenceTauLuxonCar =
    DateTime.fromObject(referenceTauLuxonBox);

  const differenceInDays =
    sourceLuxonCar.diff(
      referenceTauLuxonCar,
      'days');

  const tauDayTwigFullComboChinese =
    getTwigFullComboChineseByIndex(
      differenceInDays % 60);

  return matchedTauMonthGlobalContext_2;
}
