import * as R from 'ramda';
import {
  DateTime
} from 'luxon';

export const
  getTauDayContextForAugmentedMonth =
  (sourceLuxonCar,
  tauMonthActiveContext) => {

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
  } = tauMonthActiveContext;

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




}
