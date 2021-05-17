import { tauContext_1 } from './tauFile_01';

const tauMonthContextSet = [
  {
    tauMonthChinese: '正月',
    tauMonthEnglish: 'Tau january',
    tauMonthIndex: 0
  },
  {
    tauMonthChinese: '二月',
    tauMonthEnglish: 'Tau february',
    tauMonthIndex: 0
  },
  {
    tauMonthChinese: '三月',
    tauMonthEnglish: 'Tau march'
  },
  {
    tauMonthChinese: '四月',
    tauMonthEnglish: 'Tau april'
  },
  {
    tauMonthChinese: '五月',
    tauMonthEnglish: 'Tau may'
  },
  {
    tauMonthChinese: '六月',
    tauMonthEnglish: 'Tau june'
  },
  {

  }
]

const mapFunctionForTauMonthStartDate =
  (rawSolarYear,
  tauMonthStartDate) => {

  const rawSolarMonth =
    R.slice(0, 2, tauMonthStartDate);

  const solarDay =
    R.slice(3, 5, tauMonthStartDate);

  let finalSolarYear;
  let finalSolorMonth;

  if(rawSolorMonth == '13'){
    finalSolarYear =
      (parseInt(rawSolarYear) + 1).toString();
    finalSolarMonth = '01';
  }
  else {
    finalSolorMonth = rawSolorMonth;
    finalSolorYear = rawSolorYear;
  }


  if(rawWesternMonth == '13'){
    yr_2 = (parseInt(yr_1) + 1).toString();
    mo_3 = '01'
  }
}
