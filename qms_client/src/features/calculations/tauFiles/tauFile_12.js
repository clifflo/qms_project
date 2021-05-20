import * as R from 'ramda';

export const buildTauMonthContext_3 =
  tauMonthGlobalContext_2 => {

  const { tauMonthHasLeap } = tauMonthGlobalContext_2;

  if(tauMonthHasLeap){

    const {
      solarStartDateDay,
      solarStartDateMonth,
      solarStartDateYear,
      solarEndDateDay,
      solarEndDateYear,
      solarEndDateMonth,
      finalLeapMooncakeStartDateMonth,
      finalLeapMooncakeStartDateDay,
    } = tauMonthGlobalContext_2;

    const flatMooncakeStartDateLuxonBox = {
      day: solarStartDateDay,
      month: solarStartDateMonth,
      year: solarStartDateYear
    };

    const flatMooncakeStartDateLuxonCar =
      DateTime.fromObject(
        flatMooncakeStartDateLuxonBox);

    const leapMooncakeStartDateLuxonBox = {
      day: finalLeapMooncakeStartDateDay,
      month: finalLeapMooncakeStartDateMonth,
      year: solarStartDateYear
    };

    const leapMooncakeStartDateLuxonCar =
      DateTime.fromObject(
        leapMooncakeStartDateLuxonBox);

    const flatMooncakeEndDateLuxonBox =
       leapMooncakeStartDateLuxonCar
       .minus({ days: 1 });

    const flatMooncakeStartDateDay =
      solarStartDateDay;

    const flatMooncakeStartDateMonth =
      solarStartDateMonth;

    const flatMooncakeStartDateYear =
      solarStartDateYear;

    const flatMooncakeEndDateDay =
      flatMooncakeEndDateDay.day;

    const flatMooncakeEndDateMonth =
      flatMooncakeEndDateDay.month;

    const flatMooncakeEndDateYear =
      flatMooncakeEndDateDay.year;

    const leapMooncakeEndDateDay =
      solarEndDateDay;

    const leapMooncakeEndDateMonth =
      solarEndDateMonth;

    const leapMooncakeEndDateYear =
      solarEndDateYear;





  }
}
