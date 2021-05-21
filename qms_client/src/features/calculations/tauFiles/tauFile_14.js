import * as R from 'ramda';
import {
  DateTime
} from 'luxon';
import {
  getIntervalWithEndInclusive,
  throwFunctionalError
} from './utilityHubCloneOfTau';
import {
  getTauDayChineseByIndex
} from './tauMiniHub_02';
import {
  getTwigFullComboChineseByIndex
} from './twigHubCloneOfTau';

export const
  getTauDayContextForAugmentedMonth =
  (sourceDateInISO,
  tauMonthActiveContext) => {

  try{

    const sourceLuxonCar =
      DateTime.fromISO(sourceDateInISO);

    const {
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
    } = tauMonthActiveContext;

    const flatMonthStartLuxonBox = {
      day: flatMonthStartDateDay,
      month: flatMonthStartDateMonth,
      year: flatMonthStartDateYear
    };

    const flatMonthEndLuxonBox = {
      day: flatMonthEndDateDay,
      month: flatMonthEndDateMonth,
      year: flatMonthEndDateYear
    };

    const flatMonthInterval =
      getIntervalWithEndInclusive(
        flatMonthStartLuxonBox,
        flatMonthEndLuxonBox);

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

    const leapMonthStartLuxonCar =
      DateTime.fromObject(leapMonthStartLuxonBox);

    const leapMonthStartDateInISO =
      leapMonthStartLuxonCar.toISO();

    const leapMonthInterval =
      getIntervalWithEndInclusive(
        leapMonthStartLuxonBox,
        leapMonthEndLuxonBox);

    const dayWithinLeapMonth =
      leapMonthInterval
      .contains(sourceLuxonCar);

    const dayWithinFlatMonth =
      flatMonthInterval
      .contains(sourceLuxonCar);

    if(dayWithinLeapMonth == dayWithinFlatMonth) {
      throw new Error(
        'The source day must be in either leap month '
        + 'or flat month.');
    }

    let differenceInDaysForDayOfMonth;

    if(dayWithinLeapMonth){

      differenceInDaysForDayOfMonth =
        sourceLuxonCar.diff(
          leapMonthStartLuxonCar, 'days').days;
    }
    else {

      const flatMonthStartLuxonCar =
        DateTime.fromObject(flatMonthStartLuxonBox);

      differenceInDaysForDayOfMonth =
        sourceLuxonCar.diff(
          flatMonthStartLuxonCar, 'days').days;
    }

    const referenceTauLuxonBox = {
      day: 16,
      month: 1,
      year: 2021
    };

    const referenceTauLuxonCar =
      DateTime.fromObject(referenceTauLuxonBox);

    const differenceInDaysForCombo =
      sourceLuxonCar.diff(
        referenceTauLuxonCar,
        'days').days;

    const tauDayChinese =
      getTauDayChineseByIndex(
        differenceInDaysForDayOfMonth);

    const tauDayTwigFullComboChinese =
      getTwigFullComboChineseByIndex(
        differenceInDaysForCombo % 60);

    const tauDayContext = {
      ...tauMonthActiveContext,
      tauDayChinese,
      tauDayTwigFullComboChinese,
      sourceDateInISO,
      dayWithinLeapMonth,
      _type: 'TauDayContext'
      };

    return tauDayContext;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getTauDayContextForAugmentedMonth');
  }



}
