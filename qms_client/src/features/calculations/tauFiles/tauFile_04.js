import * as R from 'ramda';

const mapFunctionForTauYearContext_1 =
  tauYearContext_1 => {

  // Ground here stands for non leap
  // month start date
  const groundTauMonthStartDates =
    R.init(1, yrContext.months);

  const leap_1 = R.takeLast(1, yrContext.months)[0];

  const year = parseInt(yrContext.year);

  // Betapsi Index
  const bpix = (year - 1984) % 60;
  const wybp = itemOfBtp(bpix);

  const months_1 = RA.mapIndexed(
    mapFn_1c(yrContext.year)(wybp),
    mswl);

  let months_2;
  let leap_2;

  if(leap_1 != '—'){
    const leapSplit = R.split(':', leap_1);
    leap_2 = year + '-' +
      R.drop(1, R.take(6, leapSplit[1]));
  }
  else {
    leap_2 = '---'
  }

  return {
    year,
    wybp,
    months: months_1,
    leap: leap_2
  }
}
