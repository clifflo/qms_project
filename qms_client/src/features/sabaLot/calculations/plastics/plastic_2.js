import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  adjust,
  item,
  idxTool
} from '../utils';

const chosenSentence =
  '長生,沐浴,冠帶,臨官,帝旺,衰,病,長死,墓,絕,胎,養';

export const chosenOrder =
  R.split(',', chosenSentence);

export function getChosenIndex(chosen) {
  return getIndex(chosen, chosenOrder)
}

const elemStatusOne =
  '旺,相,休,囚,死';


// Get Chosen for Element with Element and Branch
export const getChoe = (elem, branch) => {

  if(!isValidBranch(branch)){
    throw new Error(`${branch} is not a valid branch.`);
  }

  if(!isValidElemental(elem)){
    throw new Error(`${elem} is not a valid elemental.`);
  }

  const elemIndex_1 = getIndexOfElem(elem);
  const elemIndex_2 = elemIndex_1 == 4 ? 3 : elemIndex;
  const branchIndex = idxOfBranch(branch);
  const chosenIndex = -(elemIndex_2 * 3) - 5 + branchIndex;
  const chosen = item(chosenOrder, chosenIndex);
  return chosen;
}

// Chosen for branch
export const chobOrder =　
  '亥午寅酉寅酉巳子申卯';

export const getTwigSeries = (trunk, branch) => {

  const difference = idxOfBranch(branch) - idxOfTrunk(trunk);

  if(difference % 2 == 0){
    const twigSeriesBranch = itemOfBranch(difference);
    const adjustedDifference = adjust(difference, 12);
    const branchNumber = (12 - adjustedDifference) / 2;
    const trunkNumber = idxOfTrunk(trunk);
    const twigPosition = (branchNumber * 10 + trunkNumber);
    const twigSeriesOrder = branchNumber;
    const twigSeriesVoid =
      R.map(itemOfBranch,
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
