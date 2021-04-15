import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const monthRegex =
  '(十二|十一|[正二三四五六七八九十])';

export const branchRegex =
  RA.concatAll([
    '([子丑寅卯辰巳午未申酉戌亥]',
    '|[鼠牛虎兔龍蛇馬羊猴雞狗豬])'
  ]);

export const trunkRegex =
  '[甲乙丙丁戊己庚申壬癸]';

// Branch combo regex
export const brcboRegex =
  '申子辰|亥卯未|寅午戌|巳酉丑';

export const mocboRegex =
  '正五九|二六十|三七十一|四八十二';

export const tknbrRegex =
  `(${trunkRegex})+(${branchRegex})`;
