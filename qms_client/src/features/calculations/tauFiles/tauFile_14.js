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
  (sourceDateInIso,
  tauMonthActiveContext) => {

  try{

    const sourceLuxonCar =
      DateTime.fromISO(sourceDateInIso);

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
      _type: 'LuxonBox',
      day: flatMonthStartDateDay,
      month: flatMonthStartDateMonth,
      year: flatMonthStartDateYear
    };

    const flatMonthEndLuxonBox = {
      _type: 'LuxonBox',
      day: flatMonthEndDateDay,
      month: flatMonthEndDateMonth,
      year: flatMonthEndDateYear
    };

    const flatMonthInterval =
      getIntervalWithEndInclusive(
        flatMonthStartLuxonBox,
        flatMonthEndLuxonBox);

    const leapMonthStartLuxonBox = {
      _type: 'LuxonBox',
      day: leapMonthStartDateDay,
      month: leapMonthStartDateMonth,
      year: leapMonthStartDateYear
    };

    const leapMonthEndLuxonBox = {
      _type: 'LuxonBox',
      day: leapMonthEndDateDay,
      month: leapMonthEndDateMonth,
      year: leapMonthEndDateYear
    };

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

    if(!(dayWithinLeapMonth == dayWithinFlatMonth)) {
      throw new Error(
        'The source day must be in either leap month '
        + 'or flat month.');
    }

    let differenceInDaysForDayOfMonth;

    if(dayWithinLeapMonth){

      const leapMonthStartLuxonCar =
        DateTime.fromObject(leapMonthStartLuxonCar);

      differenceInDaysForDayOfMonth =
        sourceLuxonCar.diff(
          leapMonthStartLuxonCar, 'days');
    }
    else {

      const flatMonthStartLuxonCar =
        DateTime.fromObject(flatMonthStartLuxonCar);

      differenceInDaysForDayOfMonth =
        sourceLuxonCar.diff(
          flatMonthStartLuxonCar, 'days');
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
      sourceDateInIso,
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
