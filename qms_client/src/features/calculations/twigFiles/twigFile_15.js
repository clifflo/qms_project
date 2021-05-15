import * as R from 'ramda';
import {
  getTwigBranchContextByChinese
} from './twigMiniHub_02';

const rawTwigArrestmentDictionary = {
  '寅': '巳',
  '巳': '申',
  '申': '寅',
  '丑': '戌',
  '戌': '未',
  '未': '丑',
  '卯': '子',
  '子': '卯',
  '辰': '辰',
  '午': '午',
  '酉': '酉',
  '亥': '亥'
};

const pairedTwigArrestmentDictionary =
  R.toPairs(rawTwigArrestmentDictionary);

const mapFunctionForTwigArrestmentPair =
  twigArrestmentPair => {

  const twigPoliceBranchChinese =
    twigArrestmentPair[0];

  const twigSuspectBranchChinese =
    twigArrestmentPair[1];

  const twigPoliceBranchEnglish =
    getTwigBranchContextByChinese(
      twigPoliceBranchChinese)
    .twigBranchEnglish;

  const twigSuspectBranchEnglish =
    getTwigBranchContextByChinese(
      twigSuspectBranchChinese)
    .twigBranchEnglish;

  const twigArrestmentContext = {
    _type: 'Twig arrestment context',
    twigPoliceBranchChinese,
    twigSuspectBranchChinese,
    twigPoliceBranchEnglish,
    twigSuspectBranchEnglish
  };

  return twigArrestmentContext;
}
