import * as R from 'ramda';

export const buildTauMonthContext_3 =
  tauMonthGlobalContext_2 => {

  const { tauMonthHasLeap } = tauMonthGlobalContext_2;

  if(tauMonthHasLeap){

    const {
      finalSolarStartDateDay,
      finalSolarStartDateMonth,
      finalSolarStartDateYear,
      finalSolarEndDateDay,
      finalSolarEndDateYear,
      finalSolarEndDateMonth,
      finalLeapMooncakeStartDateMonth,
      finalLeapMooncakeStartDateDay,
    } = tauMonthGlobalContext_2;

    const flatMooncakeStartDateLuxonBox = {
      day: finalSolarStartDateDay,
      month: finalSolarStartDateMonth,
      year: finalSolarStartDateYear
    };

    const flatMooncakeStartDateLuxonCar =
      DateTime.fromObject(
        flatMooncakeStartDateLuxonBox);

    const leapMooncakeStartDateLuxonBox = {
      day: finalLeapMooncakeStartDateDay,
      month: finalLeapMooncakeStartDateMonth,
      year: finalSolarStartDateYear
    };

    const leapMooncakeStartDateLuxonCar =
      DateTime.fromObject(
        leapMooncakeStartDateLuxonBox);

    const flatMooncakeEndDateLuxonBox =
       leapMooncakeStartDateLuxonCar
       .minus({ days: 1 });

    const flatMooncakeStartDateDay =
      finalSolarStartDateDay;

    const flatMooncakeStartDateMonth =
      finalSolarStartDateMonth;

    const flatMooncakeStartDateYear =
      finalSolarStartDateYear;

    const flatMooncakeEndDateDay =
      flatMooncakeEndDateDay.day;

    const flatMooncakeEndDateMonth =
      flatMooncakeEndDateDay.month;

    const flatMooncakeEndDateYear =
      flatMooncakeEndDateDay.year;

    const leapMooncakeEndDateDay =
      finalSolarEndDateDay;

    const leapMooncakeEndDateMonth =
      finalSolarEndDateMonth;

    const leapMooncakeEndDateYear =
      finalSolarEndDateYear;





  }
}
