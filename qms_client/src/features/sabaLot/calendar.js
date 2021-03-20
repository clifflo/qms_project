import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { item } from './calculations/utils/util_1';
import { itemOfBtp } from './calculations/plastics/plastic_3';

const calr_1 =
[
  {
    "year": "2021",
    "months": [
      "02-12辛卯",
      "03-13庚申",
      "04-12庚寅",
      "05-12庚申",
      "06-10己丑",
      "07-10己未",
      "08-08戊子",
      "09-07戊午",
      "10-06丁亥",
      "11-05丁巳",
      "12-04丙戌",
      "13-03丙辰",
      "—"
    ]
  },
  {
    "year": "2022",
    "months": [
      "02-01乙酉",
      "03-03乙卯",
      "04-01甲申",
      "05-01甲寅",
      "05-30癸未",
      "06-29癸丑",
      "07-29癸未",
      "08-27壬子",
      "09-26壬午",
      "10-25辛亥",
      "11-24辛巳",
      "12-23庚戌",
      "—"
    ]
  },
  {
    "year": "2023",
    "months": [
      "01-22庚辰",
      "02-20己酉",
      "04-20戊申",
      "05-19丁丑",
      "06-18丁未",
      "07-18丁丑",
      "08-16丙午",
      "09-15丙子",
      "10-15丙午",
      "11-13乙亥",
      "12-13乙巳",
      "13-11甲戌",
      "二: 03-22己卯"
    ]
  },
  {
    "year": "2024",
    "months": [
      "02-10甲辰",
      "03-10癸酉",
      "04-09癸卯",
      "05-08壬申",
      "06-06辛丑",
      "07-06辛未",
      "08-04庚子",
      "09-03庚午",
      "10-03庚子",
      "11-01己巳",
      "12-01己亥",
      "12-31己巳",
      "—"
    ]
  },
  {
    "year": "2025",
    "months": [
      "01-29戊戌",
      "02-28戊辰",
      "03-29丁酉",
      "04-28丁卯",
      "05-27丙申",
      "06-25乙丑",
      "08-23甲子",
      "09-22甲午",
      "10-21癸亥",
      "11-20癸巳",
      "12-20癸亥",
      "13-19癸巳",
      "六: 07-25乙未"
    ]
  },
  {
    "year": "2026",
    "months": [
      "02-17壬戌",
      "03-19壬辰",
      "04-17辛酉",
      "05-17辛卯",
      "06-15庚申",
      "07-14己丑",
      "08-13己未",
      "09-11戊子",
      "10-10丁巳",
      "11-09丁亥",
      "12-09丁巳",
      "13-08丁亥",
      "—"
    ]
  },
  {
    "year": "2027",
    "months": [
      "02-06丙辰",
      "03-08丙戌",
      "04-07丙辰",
      "05-06乙酉",
      "06-05乙卯",
      "07-04甲申",
      "08-02癸丑",
      "09-01癸未",
      "09-30壬子",
      "10-29辛巳",
      "11-28辛亥",
      "12-28辛巳",
      "—"
    ]
  },
  {
    "year": "2028",
    "months": [
      "01-26庚戌",
      "02-25庚辰",
      "03-26庚戌",
      "04-25庚辰",
      "05-24己酉",
      "07-22戊申",
      "08-20丁丑",
      "09-19丁未",
      "10-18丙子",
      "11-16乙巳",
      "12-16乙亥",
      "13-15乙巳",
      "五: 06-23己卯"
    ]
  },
  {
    "year": "2029",
    "months": [
      "02-13甲戌",
      "03-15甲辰",
      "04-14甲戌",
      "05-13癸卯",
      "06-12癸酉",
      "07-11壬寅",
      "08-10壬申",
      "09-08辛丑",
      "10-08辛未",
      "11-06庚子",
      "12-05己巳",
      "13-04己亥",
      "—"
    ]
  },
  {
    "year": "2030",
    "months": [
      "02-03己巳",
      "03-04戊戌",
      "04-03戊辰",
      "05-02丁酉",
      "06-01丁卯",
      "07-01丁酉",
      "07-30丙寅",
      "08-29丙申",
      "09-27乙丑",
      "10-27乙未",
      "11-25甲子",
      "12-25甲午",
      "—"
    ]
  }
]

export const calr_2 = () => {

  const moNames_1 =
    '正,二,三,四,五,六,七,八,九,十,十一,十二';

  const moNames_2 = R.split(',', moNames_1);

  const mapFn_1n = (yr_1, betapsi, mo_1, idx) => {

    const mo_2 = R.slice(0, 2, mo_1);
    let yr_2;
    let mo_3;
    const day = R.slice(3, 5, mo_1);
    if(mo_2 == '13'){
      yr_2 = (parseInt(yr_1) + 1).toString();
      mo_3 = '01'
    }
    else {
      yr_2 = yr_1;
      mo_3 = mo_2;
    }

    const moStart = `${yr_2}-${mo_3}-${day}`;
    const moName = item(moNames_2, idx);
    return {
      year: yr_1,
      betapsi,
      moName,
      moStart
    }
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = (yrContext) => {

    // Months without leaps
    const mswl = R.dropLast(1, yrContext.months);

    const leap = R.takeLast(1, yrContext.months)[0];

    const year = parseInt(yrContext.year);

    // Betapsi Index
    const bpix = (year - 1984) % 60;
    const betapsi = itemOfBtp(bpix);

    const months_1 = RA.mapIndexed(
      mapFn_1c(yrContext.year)(betapsi),
      mswl);




    return {
      year,
      betapsi,
      months_1,
      leap
    }
  }

  return R.map(mapFn_2, calr_1);

}
