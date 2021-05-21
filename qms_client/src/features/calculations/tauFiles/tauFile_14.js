import * as R from 'ramda';
import {
  DateTime
} from 'luxon';
import {
  getIntervalWithEndInclusive,
  throwFunctionalError,
  checkNilWithString
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
      tauMonthChinese
    } = tauMonthActiveContext;

    const flatMonthStartLuxonBox = {
      day: flatMonthStartDateDay,
      month: flatMonthStartDateMonth,
      year: flatMonthStartDateYear
    };

    const flatMonthStartLuxonCar =
      DateTime.fromObject(flatMonthStartLuxonBox);

    const flatMonthStartDateInISO =
      flatMonthStartLuxonCar.toISODate();

    checkNilWithString(
      flatMonthStartDateInISO,
      'flatMonthStartDateInISO');

    const flatMonthEndLuxonBox = {
      day: flatMonthEndDateDay,
      month: flatMonthEndDateMonth,
      year: flatMonthEndDateYear
    };

    const flatMonthEndLuxonCar =
      DateTime.fromObject(flatMonthEndLuxonBox);

    const flatMonthEndDateInISO =
      flatMonthEndLuxonCar.toISODate();

    checkNilWithString(
      flatMonthEndDateInISO,
      'flatMonthEndDateInISO');

    const flatMonthInterval =
      getIntervalWithEndInclusive(
        flatMonthStartLuxonBox,
        flatMonthEndLuxonBox);

    const leapMonthStartLuxonBox = {
      day: leapMonthStartDateDay,
      month: leapMonthStartDateMonth,
      year: leapMonthStartDateYear
    };

    const leapMonthStartLuxonCar =
      DateTime.fromObject(leapMonthStartLuxonBox);

    const leapMonthStartDateInISO =
      leapMonthStartLuxonCar.toISODate();

    checkNilWithString(
      leapMonthStartDateInISO,
      'leapMonthStartDateInISO');

    const leapMonthEndLuxonBox = {
      day: leapMonthEndDateDay,
      month: leapMonthEndDateMonth,
      year: leapMonthEndDateYear
    };

    const leapMonthEndLuxonCar =
      DateTime.fromObject(leapMonthEndLuxonBox);

    const leapMonthEndDateInISO =
      leapMonthEndLuxonCar.toISODate();

    checkNilWithString(
      leapMonthEndDateInISO,
      'leapMonthEndDateInISO');

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

    let finalTauMonthChineseForDay;

    if(dayWithinLeapMonth){
      finalTauMonthChineseForDay =
        '閏' + tauMonthChinese;
    }
    else {
      finalTauMonthChineseForDay =
        '平' + tauMonthChinese;
    }

    const tauDayContext = {
      ...tauMonthActiveContext,
      tauDayChinese,
      tauDayTwigFullComboChinese,
      sourceDateInISO,
      dayWithinLeapMonth,
      leapMonthStartDateInISO,
      leapMonthEndDateInISO,
      flatMonthStartDateInISO,
      flatMonthEndDateInISO,
      finalTauMonthChineseForDay,
      _type: 'TauDayContext',
      _subType: 'AugmentedMonthTauDayContext'
    };

    return tauDayContext;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getTauDayContextForAugmentedMonth');
  }
}
