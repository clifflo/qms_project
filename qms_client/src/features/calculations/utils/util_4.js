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

export const regexGen_1 = (regex_1, regex_2) => {
  return `${regex_1}(?:.*?)${regex_2}`;
}

export const regexGen_2 = regn => {

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

export const regexGen_3 = regns => {
  return regexGen_1(
    regexGen_2(regns[0]), regexGen_2(regns[1]));
}

export const regexGen_4 = () => {

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

export const regexGen_5 = () => {

  const mapFn = regns => {
    return {
      regns,
      regex: regexGen_3(regns)
    }
  };

  return R.map(mapFn, regexGen_4());

}

export const regexGen_6 = rawStce => {

  const adjdStce = rawStce
    .replaceAll('犬', '狗')
    .replaceAll('十一', '霜')
    .replaceAll('十二', '臘')
    .replaceAll('、', '');

  const mapFn = regcxt => {
    const patt = new RegExp(regcxt.regex, 'g');

    // Brake matches
    const bkmhes =  [...adjdStce.matchAll(patt)]
    return {
      adjdStce,
      bkmhes,
      ...regcxt
    }
  }

  return R.map(mapFn, regexGen_5());
}

export const regexGen_7 = sen_1 => {

  const regg_6s = regexGen_6(sen_1);
  const maxFn = regg_6 => {
    return regg_6.bkmhes.length;
  }

  const regg_7 =
    R.reduce(
      R.maxBy(maxFn),
      { bkmhes: [] },
      regg_6s);

  return regg_7;
}
