import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const monthRegex =
  '((?:十一|十二|[正二三四五六七八九十])+)';

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

export const tknbrRegex =
  `${trunkRegex}${branchRegex}`;

export const snnbrRegex =
  `${seasonRegex}${branchRegex}`;

export const trcboRegex =
  '(甲己|乙庚|丙辛|丁壬|戊癸)';

export const regexGen_1 = (regex_1, regex_2) => {
  return `${regex_1}(?:.*?)${regex_2}`;
}

export const regexGen_2 = regn => {

  switch(regn){
    case 'm':
      return monthRegex;
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
    'mb',
    'mt',
    'bt',
    'tb',
    'sb',
    'st',
    'bb',
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

export const regexGen_6 = sentence => {

  const mapFn = regcxt => {
    const patt = new RegExp(regcxt.regex, 'g');
    const result =  [...sentence.matchAll(patt)]
    return {
      sentence,
      result,
      ...regcxt
    }
  }

  return R.map(mapFn, regexGen_5());
}

export const regexGen_7 = sen_1 => {

  const regg_6s = regexGen_6(sen_1);
  const maxFn = regg_6 => {
    return regg_6.result.length;
  }

  const regg_7 =
    R.reduce(R.maxBy(maxFn), { result: [] }, regg_6s);
  return regg_7;
}
