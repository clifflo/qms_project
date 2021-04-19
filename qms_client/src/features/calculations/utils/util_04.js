import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

const monthRegexPart =
  '[正二三四五六七八九十子丑霜臘]';

export const singleMonthRegex =
  `(${monthRegexPart})`;

export const multipleMonthRegex =
  `((?:${monthRegexPart})+)`;

export const branchRegex =
  RA.concatAll([
    '([',
    '子丑寅卯辰巳午未申酉戌亥',
    '鼠牛虎兔龍蛇馬羊猴雞狗犬豬',
    ']+)'
  ]);

export const trunkRegex =
  '([甲乙丙丁戊己庚辛壬癸]+)';

export const seasonRegex =
  '([春夏秋冬]+)';

export const reggen_1 = (regex_1, regex_2) => {
  return `${regex_1}(?:.*?)${regex_2}`;
}

export const reggen_2 = regn => {

  switch(regn){
    case 'm':
      return singleMonthRegex;
    case 'M':
      return multipleMonthRegex;
    case 'b':
      return branchRegex;
    case 't':
      return trunkRegex;
    case 's':
      return seasonRegex;
  }
}

export const reggen_3 = regns => {
  return reggen_1(
    reggen_2(regns[0]), reggen_2(regns[1]));
}

export const reggen_4 = () => {

  return [
    'Mb',
    'Mt',
    'bt',
    'tb',
    'sb',
    'st',
    'bb',
    'bs',
    'mb'
  ]
}

export const reggen_5 = () => {

  const mapFn = regns => {
    return {
      regns,
      regex: reggen_3(regns)
    }
  };

  return R.map(mapFn, reggen_4());

}
