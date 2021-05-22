import {
  sigmaBrakeRawContextSet
} from './sigmaFile_01';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const sigmaMonthChineseSet =
  '正二三四五六七八九十霜臘';

export const sigmaBoardBranchChineseSet =
  '子丑寅卯辰巳午未申酉戌亥鼠牛虎兔龍蛇馬羊猴雞狗豬';

export const sigmaTrunkChineseSet =
  '甲乙丙丁戊己庚辛壬癸';

export const sigmaSeasonChineseSet =
  '春夏秋冬';

const getSigmaBrakeBuiltContext_1 =
  sigmaBrakeRawContext => {

  const sigmaBrakeRawName =
    sigmaBrakeRawContext[0];

  const sigmaBrakeRawSentence =
    sigmaBrakeRawContext[1];

  const sigmaBrakeReplacedSentence =
    R.compose(
      R.replace('十二', '臘'),
      R.replace('十一', '霜'),
    (sigmaBrakeRawSentence);

  const relevantCharacterSet =
    sigmaMonthChineseSet
    + sigmaBosigmaBoardBranchChineseSetardBranchChineseSet
    + sigmaTrunkChineseSet
    + sigmaSeasonChineseSet
    + '月，'

  const sigmaBrakeBuiltSentence =
    R.compose(
      RA.concatAll,
      R.filter(R.flip(R.includes)(relevantCharacterSet)))
    (sigmaBrakeReplacedSentence)

  return {
    _type: 'SigmaBrakeBuiltContext_1',
    sigmaBrakeRawName,
    sigmaBrakeBuiltSentence
  };
}

export const sigmaBrakeBuiltContextSet_1 =
  R.map(
    getSigmaBrakeBuiltContext_1,
    R.toPairs(sigmaBrakeRawContextSet));
