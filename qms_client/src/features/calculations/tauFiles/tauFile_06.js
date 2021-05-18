const mapFunctionOfBuiltTauYearContext_2 =
  builtTauMonthContext_2 => {

  const leapTauMonthStartDateInMiddleDetailPattern =
     /(.+): (.+)-(.+)/g;

  const matchedLeapTauMonthStartDateInMiddleDetail =
    leapTauMonthStartDateInMiddleDetail
    .match(leapTauMonthStartDateInMiddleDetailPattern);

  const leapTauMonthChinese =
    matchedLeapTauMonthStartDateInMiddleDetail[0]
    + '月';

  const rawLeapSolarStartDateMonth =
    matchedLeapTauMonthStartDateInMiddleDetail[1];

  const rawLeapSolarStartDateDayOfMonth =
    matchedLeapTauMonthStartDateInMiddleDetail[2];

  
}
