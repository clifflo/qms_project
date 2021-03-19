import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  item,
  getIdx
} from '../utils/util_1';
import {
  itemOfBranch,
  idxOfBranch
} from '../plastics/plastic_1';

const nattoParagraph =
  '乾金甲子壬順佈,坎水戊寅戊順佈,艮土丙辰丙順佈,震木庚子庚順佈,' +
  '巽木辛丑辛逆佈,離火己卯己逆佈,坤土乙未癸逆佈,兌金丁巳丁逆佈';

const getFullMustardSeries =
  (startMustard, mseIsCw) => {
  let fullMustardSeries = '';
  const mustardIndex = idxOfBranch(startMustard);

  for(let i = 0; i < 6; i++){
    const rawAdjustment = i * 2;
    const finalAdjustment = mseIsCw ?
      rawAdjustment : (-rawAdjustment);
    fullMustardSeries += itemOfBranch(
      mustardIndex + finalAdjustment);
  }

  return fullMustardSeries;
}

const getNattos = () => {

  const mapFn = (sentence) => {
    const shOri = sentence[0];
    const shEle = sentence[1];

    // External Soy Bean
    const esb = sentence[4];

    // Internal Soy Bean
    const isb = sentence[2];
    const startMustard = sentence[3];

    // Mustard Series is Clockwise
    const mseIsCw = sentence[5] == '順';
    const fullMustardSeries = getFullMustardSeries(
      startMustard, mseIsCw);

    // External Mustard Series
    const ems =
      R.reverse(R.takeLast(3, fullMustardSeries));

    // Internal Mustard Series
    const ims =
      R.reverse(R.take(3, fullMustardSeries));

    return {
      shOri,
      shEle,
      esb,
      isb,
      startMustard,
      ems,
      ims
    };
  }

  return R.compose(
    R.map(mapFn),
    R.split(','))
    (nattoParagraph);
}

export const nattos = getNattos();

// Short Hook Alternative
export const shAltSce = '地雷水澤山火風天';

// Short Hook Ori
export const shOriSce = '坤震坎兌艮離巽乾';

const lhParagraph = RA.concatAll([
  '乾為天,天風姤,天山遯,天地否,風地觀,山地剝,火地晉,火天大有,',
  '坎為水,水澤節,水雷屯,水火既濟,澤火革,雷火豐,地火明夷,地水師,',
  '艮為山,山火賁,山天大畜,山澤損,火澤睽,天澤履,風澤中孚,風山漸,',
  '震為雷,雷地豫,雷水解,雷風恒,地風升,水風井,澤風大過,澤雷隨,',
  '巽為風,風天小畜,風火家人,風雷益,天雷無妄,火雷噬嗑,山雷頤,山風蠱,',
  '離為火,火山旅,火風鼎,火水未濟,山水蒙,風水渙,天水訟,天火同人,',
  '坤為地,地雷復,地澤臨,地天泰,雷天大壯,澤天夬,水天需,水地比,',
  '兌為澤,澤水困,澤地萃,澤山咸,水山蹇,地山謙,雷山小過,雷澤歸妹'
]);

// Get Short Hook Number Alt Index
const getShNumAltIndex =
  (shAlt) => {
  return getIdx(
    shAlt,
    shAltSce);
}

export const getLhContexts_1 = () => {

  const mapFn = (sentence) => {

    let eshAlt;
    let ishAlt;
    let lhName;

    if(sentence[1] == '為'){
      eshAlt = sentence[2];
      ishAlt = sentence[2];
      lhName = '純' + sentence[0];
    }
    else {
      eshAlt = sentence[0];
      ishAlt = sentence[1];
      lhName = R.drop(2, sentence);
    }

    const eshIdx =
      getShNumAltIndex(eshAlt);

    const ishIdx =
      getShNumAltIndex(ishAlt);

    const eshOri =
      shOriSce[eshIdx];

    const ishOri =
      shOriSce[ishIdx];

    const lhn =
      (eshIdx * 8) +
      ishIdx;

    return {
      eshAlt,
      ishAlt,
      eshOri,
      ishOri,
      lhName,
      eshIdx,
      ishIdx,
      lhn
    }
  }

  return R.compose(
    R.map(mapFn),
    R.split(',')
  )
  (lhParagraph);

}

export const lhContexts_1 = getLhContexts_1();
