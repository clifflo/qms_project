import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  adjust,
  item,
  getIndexFromList
} from '../utils';

// Plastic Reaction
export const plrSentences = [
  '子丑合土',
  '寅亥合木',
  '卯戌合火',
  '辰酉合金',
  '巳申合水',
  '午未合火',
  '子午沖',
  '丑未沖',
  '寅申沖',
  '卯酉沖',
  '辰戌沖',
  '巳亥沖',
  '子未害',
  '丑午害',
  '寅巳害',
  '卯辰害',
  '申亥害',
  '酉戌害',
  '子酉破',
  '寅亥破',
  '辰丑破',
  '午卯破',
  '申巳破',
  '戌未破',
  '申子辰合水',
  '亥卯未合木',
  '寅午戌合火',
  '巳酉丑合金',
  '寅卯辰會木',
  '巳午未會火',
  '申酉戌會金',
  '亥子丑會水',
  '甲己合土',
  '乙庚合金',
  '丙辛合水',
  '丁壬合木',
  '戊癸合火',
  '寅巳申為無恩之刑',
  '丑戌未為持勢之刑',
  '子卯為無禮之刑',
  '辰午酉亥為自刑',
]

export function plrFilter(filterFn) {
  return R.filter(filterFn, plrSentences);
}

const chosenSentence =
  '長生,沐浴,冠帶,臨官,帝旺,衰,病,長死,墓,絕,胎,養';

export const chosenOrder =
  R.split(',', chosenSentence);

export function getChosenIndex(chosen) {
  return getIndex(chosen, chosenOrder)
}

const elemStatusOne =
  '旺,相,休,囚,死';

export const getChosenTypeOne = (elem, branch) => {

  const elemIndex = getIndexOfElem(elem);
  const adjustedElemIndex = elemIndex == 4 ? 3 : elemIndex;
  const branchIndex = getIndexOfBranch(branch);
  const chosenIndex = -(adjustedElemIndex * 3) - 5 + branchIndex;
  const chosen = item(chosenOrder, chosenIndex);
  return chosen;
}

// 在大六壬１０３頁提及的十天干生旺死絕表天干和地支的關係
export const chosenTypeTwoOrder =　
  '亥午寅酉寅酉巳子申卯';

export const buildTwoSentence =
  (firstSentence,
  secondSentence,
  firstSentenceName,
  secondSentenceName,
  contextType) => {

  const sentenceFn = (character, index, list) => {
    return {
      contextType: contextType,
      [firstSentenceName]: character,
      [secondSentenceName]: secondSentence[index],
      order: index + 1
    }
  }

  const result = RA.mapIndexed(sentenceFn, firstSentence);
  return result;
}

export const chosenTypeTwoContext =
  buildTwoSentence(
    trunkOrder,
    chosenTypeTwoOrder,
    'trunk',
    'branch',
    'chosen_type_two');

export const getTwigSeries = (trunk, branch) => {

  const difference = getIndexOfBranch(branch) - getIndexOfTrunk(trunk);

  if(difference % 2 == 0){
    const twigSeriesBranch = getBranchFromIndex(difference);
    const adjustedDifference = adjust(difference, 12);
    const branchNumber = (12 - adjustedDifference) / 2;
    const trunkNumber = getIndexOfTrunk(trunk);
    const twigPosition = (branchNumber * 10 + trunkNumber);
    const twigSeriesOrder = branchNumber;
    const twigSeriesVoid =
      R.map(getBranchFromIndex,
        [adjustedDifference - 1, adjustedDifference - 2]);
    return {
      inputTrunk: trunk,
      inputBranch: branch,
      twigPosition,
      twigSeries: `甲${twigSeriesBranch}旬`,
      twigSeriesVoid,
      twigSeriesOrder
    }
  }
  else {
    throw 'Wrong plastic for twig.';
  }
}
