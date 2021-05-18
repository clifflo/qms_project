import * as R from 'ramda';
import {
  getTwigFullComboChineseByIndex
} from './utilityHubCloneOfTwig';

const mapFunctionOfTauYearContext_1 =
  tauYearContext_1 => {

  // Ground here stands for non leap
  // month start date
  const groundTauMonthStartDates =
    R.init(
      tauYearContext_1
      .tauMonthStartDates);

  const leapTauMonthStartDate =
    R.last(
      tauYearContext_1
      .tauMonthStartDates);

  const solarYear = tauYearContext_1.solarYear;

  const twigComboIndex = (solarYear - 1984) % 60;

  const twigFullComboChinese =
    getTwigFullComboChineseByIndex(
      twigComboIndex);

  const months_1 = RA.mapIndexed(
    mapFn_1c(yrContext.year)(wybp),
    mswl);

  let months_2;
  let leap_2;

  if(leap_1 != '—'){
    const leapSplit = R.split(':', leap_1);
    leap_2 = year + '-' +
      R.drop(1, R.take(6, leapSplit[1]));
  }
  else {
    leap_2 = '---'
  }

  return {
    year,
    wybp,
    months: months_1,
    leap: leap_2
  }
}
