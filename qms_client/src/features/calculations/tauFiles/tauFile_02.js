import * as R from 'ramda';
import {
  checkNilWithArray
} from './utilityHubCloneOfTau';

export const getSolarStartDateUnwrappedContext =
  payloadForMapFunctionOfTauLocalMonthContext_1 => {

  const {
    solarStartDateWrappedYear,
    tauYearTwigFullComboChinese,
    groundTauMonthStartDateMonthdaySet
  } = payloadForMapFunctionOfTauLocalMonthContext_1;

  checkNilWithArray(
    groundTauMonthStartDateMonthdaySet,
    'groundTauMonthStartDateMonthdaySet');

  const tauMonthStartDateMonthday =
    groundTauMonthStartDateMonthdaySet[
      tauMonthIndex];

  const rawSolarStartDateMonth =
    parseInt(
      R.take(
        2, tauMonthStartDateMonthday));

  const solarStartDateDay =
    parseInt(
      R.takeLast(
        2, tauMonthStartDateMonthday));

  let solarStartDateYear;
  let solarStartDateMonth;

  if(rawSolarStartDateMonth == 13){
    solarStartDateYear =
      parseInt(solarStartDateWrappedYear) + 1;
    solarStartDateMonth = 1;
  }
  else {
    solarStartDateMonth =
      parseInt(rawSolarStartDateMonth);
    solarStartDateYear =
      parseInt(solarStartDateWrappedYear);
  }

  checkNilWithNumber(
    solarStartDateMonth,
    'solarStartDateMonth');

  checkNilWithNumber(
    solarStartDateYear,
    'solarStartDateYear');

  const solarStartDateUnwrappedContext = {
    _type: 'SolarStartDateUnwrappedContext'
    solarStartDateYear,
    solarStartDateMonth
  };

  return solarStartDateUnwrappedContext;
}
