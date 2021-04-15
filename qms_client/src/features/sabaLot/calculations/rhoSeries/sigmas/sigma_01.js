import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const sigmaParser = sentences => {

  const monthRegex = '(十二|十一|[正二三四五六七八九十])';

  const branchRegex =
    RA.concatAll([
      '([子丑寅卯辰巳午未申酉戌亥]',
      '|[鼠牛虎兔龍蛇馬羊猴雞狗豬])'
    ]);

  
}
