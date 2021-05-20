import * as R from 'ramda';

export const
  getTauDayContextForAugmentedMonth =
  tauMonthGlobalContext_3 => {

  const {
    flatMonthStartDateDay,
    flatMonthStartDateMonth,
    flatMonthStartDateYear,
    leapMonthStartDateDay,
    leapMonthStartDateMonth,
    leapMonthStartDateYear,
    leapMonthEndDateDay,
    leapMonthEndDateMonth,
    leapMonthEndDateYear,
  } = tauMonthGlobalContext_3;

  const flatMonthStartLuxonBox = {
    day: flatMonthStartDateDay,
    month: flatMonthStartDateMonth,
    year: flatMonthStartDateYear
  };

  const flatMonthStartLuxonCar =
    DateTime.fromObject(
      flatMonthStartLuxonCar);

  const leapMonthStartLuxonBox = {
    day: leapMonthStartDateDay,
    month: leapMonthStartDateMonth,
    year: leapMonthStartDateYear
  };

  const leapMonthEndLuxonBox = {
    day: leapMonthEndDateDay,
    month: leapMonthEndDateMonth,
    year: leapMonthEndDateYear
  };

  const leapMonthEndLuxonCar =
    DateTime.fromObject(
      leapMonthEndLuxonBox);

  const nextSolarMonthStartLuxonCar =
    leapMonthEndLuxonCar
    .plus({ days: 1 });



}
