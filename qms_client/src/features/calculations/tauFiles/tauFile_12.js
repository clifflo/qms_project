import * as R from 'ramda';

export const buildTauMonthContext_3 =
  tauMonthGlobalContext_2 => {

  const { tauMonthHasLeap } = tauMonthGlobalContext_2;

  if(tauMonthHasLeap){

    const {
      solarStartDateDayOfTauMonth,
      solarStartDateMonthOfTauMonth,
      solarStartDateYearOfTauMonth,
      solarEndDateDayOfTauMonth,
      solarEndDateYearOfTauMonth,
      solarEndDateMonthOfTauMonth,
      leapMooncakeStartDateMonthOTauMonth,
      leapMooncakeStartDateDayOfTauMonth,
    } = tauMonthGlobalContext_2;

    const flatMooncakeStartDateLuxonBox = {
      day: solarStartDateDayOfTauMonth,
      month: solarStartDateMonthOfTauMonth,
      year: solarStartDateYearOfTauMonth
    };

    const flatMooncakeStartDateLuxonCar =
      DateTime.fromObject(
        flatMooncakeStartDateLuxonBox);

    const leapMooncakeStartDateLuxonBox = {
      day: leapMooncakeStartDateDayOfTauMonth,
      month: leapMooncakeStartDateMonthOTauMonth,
      year: solarStartDateYearOfTauMonth
    };

    const leapMooncakeStartDateLuxonCar =
      DateTime.fromObject(
        leapMooncakeStartDateLuxonBox);

    const flatMooncakeEndDateLuxonBox =
       leapMooncakeStartDateLuxonCar
       .minus({ days: 1 });

    const flatMooncakeStartDateDay =
      solarStartDateDayOfTauMonth;

    const flatMooncakeStartDateMonth =
      solarStartDateMonthOfTauMonth;

    const flatMooncakeStartDateYear =
      solarStartDateYearOfTauMonth;

    const flatMooncakeEndDateDay =
      flatMooncakeEndDateDay.day;

    const flatMooncakeEndDateMonth =
      flatMooncakeEndDateDay.month;

    const flatMooncakeEndDateYear =
      flatMooncakeEndDateDay.year;

    const leapMooncakeEndDateDay =
      solarEndDateDayOfTauMonth;

    const leapMooncakeEndDateMonth =
      solarEndDateMonthOfTauMonth;

    const leapMooncakeEndDateYear =
      solarEndDateYearOfTauMonth;





  }
}
