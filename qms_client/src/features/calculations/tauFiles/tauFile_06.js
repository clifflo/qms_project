import * as R from 'ramda';
import {
  mapFunctionOfBuiltTauMonthContext_2
} from './tauFile_05';

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

  const finalLeapSolarStartDateMonth =
    matchedLeapTauMonthStartDateInMiddleDetail[1];

  const finalLeapSolarStartDateDayOfMonth =
    matchedLeapTauMonthStartDateInMiddleDetail[2];

  const payloadForMapFunctionOfBuiltTauMonthContext_2 =
  {
    leapTauMonthChinese,
    finalLeapSolarStartDateMonth,
    finalLeapSolarStartDateDayOfMonth
  };

  const loadedForMapFunctionOfBuiltTauMonthContext_2 =
    R.curry(mapFunctionOfBuiltTauMonthContext_2)
    (payloadForMapFunctionOfBuiltTauMonthContext_2);

  
}
