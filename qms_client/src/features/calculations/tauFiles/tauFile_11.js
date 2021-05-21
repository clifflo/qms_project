import * as R from 'ramda';
import {
  throwFunctionalError
} from './utilityHubCloneOfTau';
import {
  DateTime
} from 'luxon';
import {
  checkNilWithNumber
} from './utilityHubCloneOfTau';

export const
  getAugmentedTauMonthActiveContext =
  tauMonthGlobalContext_2 => {

  try{
    const {
      solarStartDateDay,
      solarStartDateMonth,
      solarStartDateYear,
      solarEndDateDay,
      solarEndDateYear,
      solarEndDateMonth,
      leapMonthStartDateMonth,
      leapMonthStartDateDay,
    } = tauMonthGlobalContext_2;

    const flatMonthStartLuxonBox = {
      day: solarStartDateDay,
      month: solarStartDateMonth,
      year: solarStartDateYear
    };

    const flatMonthStartLuxonCar =
      DateTime.fromObject(
        flatMonthStartLuxonBox);

    const leapMonthStartDateYear =
      solarStartDateYear;

    checkNilWithNumber(
      leapMonthStartDateYear,
      'leapMonthStartDateYear');

    const leapMonthStartLuxonBox = {
      day: leapMonthStartDateDay,
      month: leapMonthStartDateMonth,
      year: leapMonthStartDateYear
    };

    const leapMonthStartLuxonCar =
      DateTime.fromObject(
        leapMonthStartLuxonBox);

    const flatMonthEndLuxonBox =
       leapMonthStartLuxonCar
       .minus({ days: 1 });

    const flatMonthStartDateDay =
      solarStartDateDay;

    checkNilWithNumber(
      flatMonthStartDateDay,
      'flatMonthStartDateDay');

    const flatMonthStartDateMonth =
      solarStartDateMonth;

    checkNilWithNumber(
      flatMonthStartDateMonth,
      'flatMonthStartDateMonth');

    const flatMonthStartDateYear =
      solarStartDateYear;

    checkNilWithNumber(
      flatMonthStartDateYear,
      'flatMonthStartDateYear');

    const flatMonthEndDateDay =
      flatMonthEndLuxonBox
      .day;

    checkNilWithNumber(
      flatMonthEndDateDay,
      'flatMonthEndDateDay');

    const flatMonthEndDateMonth =
      flatMonthEndLuxonBox
      .month;

    checkNilWithNumber(
      flatMonthEndDateMonth,
      'flatMonthEndDateMonth');

    const flatMonthEndDateYear =
      solarStartDateYear;

    checkNilWithNumber(
      flatMonthEndDateYear,
      'flatMonthEndDateYear');

    const leapMonthEndDateDay =
      solarEndDateDay;

    checkNilWithNumber(
      leapMonthEndDateDay,
      'leapMonthEndDateDay');

    const leapMonthEndDateMonth =
      solarEndDateMonth;

    checkNilWithNumber(
      leapMonthEndDateMonth,
      'leapMonthEndDateMonth');

    const leapMonthEndDateYear =
      solarEndDateYear;

    checkNilWithNumber(
      leapMonthEndDateYear,
      'leapMonthEndDateYear');

    const tauMonthGlobalContext_3 = {
      ...tauMonthGlobalContext_2,
      flatMonthStartDateDay,
      flatMonthStartDateMonth,
      flatMonthStartDateYear,
      flatMonthEndDateDay,
      flatMonthEndDateMonth,
      flatMonthEndDateYear,
      leapMonthStartDateDay,
      leapMonthStartDateMonth,
      leapMonthStartDateYear,
      leapMonthEndDateDay,
      leapMonthEndDateMonth,
      leapMonthEndDateYear,
      _type: 'TauMonthGlobalContext_3',
      _subType: 'AugmentedTauMonthGlobalContext_3'
    };

    return tauMonthGlobalContext_3;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getAugmentedTauMonthGlobalContext_3');
  }
}
