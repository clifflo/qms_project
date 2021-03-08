import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  item,
  getIndexFromList
} from '../utils/util_1';
import {
  getBranchFromIndex,
  getIndexOfBranch
} from '../plastics/plastic_1';

const nattoParagraph =
  '乾金甲子壬順佈,坎水戊寅戊順佈,艮土丙辰丙順佈,震木庚子庚順佈,' +
  '巽木辛丑辛逆佈,離火己卯己逆佈,坤土乙未癸逆佈,兌金丁巳丁逆佈';

const getFullMustardSeries =
  (startMustard, mustardSeriesIsClockwise) => {
  let fullMustardSeries = '';
  const mustardIndex = getIndexOfBranch(startMustard);

  for(let i = 0; i < 6; i++){
    const rawAdjustment = i * 2;
    const finalAdjustment = mustardSeriesIsClockwise ?
      rawAdjustment : (-rawAdjustment);
    fullMustardSeries += getBranchFromIndex(
      mustardIndex + finalAdjustment);
  }

  return fullMustardSeries;
}

const getNattos = () => {

  const mapFn = (sentence) => {
    const shortHook = sentence[0];
    const shortHookElemental = sentence[1];
    const trunkAtUpperSide = sentence[2];
    const trunkAtLowerSide = sentence[4];
    const startMustard = sentence[3];
    const mustardSeriesIsClockwise = sentence[5] == '順';
    const fullMustardSeries = getFullMustardSeries(
      startMustard, mustardSeriesIsClockwise);
    const upperMustardSeries =
      R.reverse(R.take(3, fullMustardSeries));
    const lowerMustardSeries =
      R.reverse(R.takeLast(3, fullMustardSeries));

    return {
      shortHook,
      shortHookElemental,
      trunkAtUpperSide,
      trunkAtLowerSide,
      startMustard,
      upperMustardSeries,
      lowerMustardSeries
    };
  }

  return R.compose(
    R.map(mapFn),
    R.split(','))
    (nattoParagraph);
}

export const nattos = getNattos();

const shortHookAlternateSentence = '地雷水澤山火風天';

const shortHookOriginalSentence = '坤震坎兌艮離巽乾';

const longHookParagraph = RA.concatAll([
  '乾為天,天風姤,天山遁,天地否,風地觀,山地剝,火地晉,火天大有,',
  '坎為水,水澤節,水雷屯,水火既濟,澤火革,雷火豐,地火明夷,地水師,',
  '艮為山,山火賁,山天大畜,山澤損,火澤睽,天澤履,風澤中孚,風山漸,',
  '震為雷,雷地豫,雷水解,雷風恒,地風升,水風井,澤風大過,澤雷隨,',
  '巽為風,風天小畜,風火家人,風雷益,天雷無妄,火雷噬嗑,山雷頤,山風蠱,',
  '離為火,火山旅,火風鼎,火水未濟,山水蒙,風水渙,天水訟,天火同人,',
  '坤為地,地雷覆,地澤臨,地天泰,雷天大壯,澤天夬,水天需,水地比,',
  '兌為澤,澤水困,澤地萃,澤山鹹,水山蹇,地山謙,雷山小過,雷澤歸妹'
]);

const getShortHookNumberAlternate =
  (shortHookAlternate) => {
  return getIndexFromList(
    shortHookAlternate,
    shortHookAlternateSentence);
}

export const getLongHooks_1 = () => {

  const mapFn = (sentence) => {

    let upperShortHookAlternate;
    let lowerShortHookAlternate;
    let longHookName;

    if(sentence[1] == '為'){
      upperShortHookAlternate = sentence[2];
      lowerShortHookAlternate = sentence[2];
      longHookName = '純' + sentence[0];
    }
    else {
      upperShortHookAlternate = sentence[0];
      lowerShortHookAlternate = sentence[1];
      longHookName = R.drop(2, sentence);
    }

    const upperShortHookNumber =
      getShortHookNumberAlternate(upperShortHookAlternate);

    const lowerShortHookNumber =
      getShortHookNumberAlternate(lowerShortHookAlternate);

    const upperShortHookOriginal =
      shortHookOriginalSentence[upperShortHookNumber];

    const lowerShortHookOriginal =
      shortHookOriginalSentence[lowerShortHookNumber];

    const longHookNumber =
      (upperShortHookNumber * 8) +
      lowerShortHookNumber;

    return {
      upperShortHookAlternate,
      lowerShortHookAlternate,
      upperShortHookOriginal,
      lowerShortHookOriginal,
      longHookName,
      upperShortHookNumber,
      lowerShortHookNumber,
      longHookNumber
    }
  }

  return R.compose(
    R.map(mapFn),
    R.split(',')
  )
  (longHookParagraph);

}

export const longHooks_1 = getLongHooks_1();
