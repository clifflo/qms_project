import * as R from 'ramda';
import {
  checkNilWithArray,
  checkNilWithNumber
} from './utilityHubCloneOfTau';

export const getSolarStartDateUnwrappedContext =
  (solarStartDateWrappedYear,
  groundTauMonthStartDateMonthdaySet,
  tauMonthIndex) => {

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

  checkNilWithNumber(
    rawSolarStartDateMonth,
    'rawSolarStartDateMonth');

  const solarStartDateDay =
    parseInt(
      R.takeLast(
        2, tauMonthStartDateMonthday));

  checkNilWithNumber(
    solarStartDateDay,
    'solarStartDateDay');

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
    _type: 'SolarStartDateUnwrappedContext',
    solarStartDateYear,
    solarStartDateMonth,
    solarStartDateDay
  };

  return solarStartDateUnwrappedContext;
}
