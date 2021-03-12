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


// Get Chosen for Element with Element and Brh
export const getChoe = (elem, brh) => {

  if(!isValidBrh(brh)){
    throw new Error(`${brh} is not a valid brh.`);
  }

  if(!isValidElemental(elem)){
    throw new Error(`${elem} is not a valid elemental.`);
  }

  const elemIndex_1 = idxOfElem(elem);
  const elemIndex_2 = elemIndex_1 == 4 ? 3 : elemIndex;
  const brhIndex = idxOfBrh(brh);
  const chosenIndex = -(elemIndex_2 * 3) - 5 + brhIndex;
  const chosen = item(chosenOrder, chosenIndex);
  return chosen;
}

// Chosen for brh
export const chobOrder =　
  '亥午寅酉寅酉巳子申卯';

export const getTwigSeries = (trk, brh) => {

  const difference = idxOfBrh(brh) - idxOfTrk(trk);

  if(difference % 2 == 0){
    const twigSeriesBrh = itemOfBrh(difference);
    const adjustedDifference = adjust(difference, 12);
    const brhNumber = (12 - adjustedDifference) / 2;
    const trkNumber = idxOfTrk(trk);
    const twigPosition = (brhNumber * 10 + trkNumber);
    const twigSeriesOrder = brhNumber;
    const twigSeriesVoid =
      R.map(itemOfBrh,
        [adjustedDifference - 1, adjustedDifference - 2]);
    return {
      inputTrk: trk,
      inputBrh: brh,
      twigPosition,
      twigSeries: `甲${twigSeriesBrh}旬`,
      twigSeriesVoid,
      twigSeriesOrder
    }
  }
  else {
    throw 'Wrong plastic for twig.';
  }
}
