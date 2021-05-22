import * as R from 'ramda';

export const sigmaPlainMonthRegex =
  '[正二三四五六七八九十子丑]|十一|十二';

export const sigmaPlainBranchRegex =
  '[子丑寅卯辰巳午未申酉戌亥鼠牛虎兔龍蛇馬羊猴雞狗犬豬]';

export const sigmaPlainTrunkRegex =
  '[甲乙丙丁戊己庚辛壬癸]';

export const sigmaPlainSeasonRegex =
  '[春夏秋冬]';

export const getSigmaCombinedRegex =
  (sigmaPlainRegex_1,
  sigmaPlainRegex_2) => {

  checkNilWithString(
  	sigmaPlainRegex_1,
  	'sigmaPlainRegex_1');

  checkNilWithString(
  	sigmaPlainRegex_2,
  	'sigmaPlainRegex_2');

  const sigmaCombinedRegex =
    `(${sigmaPlainRegex_1}+)(?:.*?)`
    + `(${sigmaPlainRegex_2}+)`;

  return sigmaCombinedRegex;
}
