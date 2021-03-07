import * as R from 'ramda';
import {
  item,
  getIndexFromList
} from '../utils/util_1';

const natoParagraph =
  '乾金甲子壬,坎水戊寅也,艮土丙辰也，震木庚子也,' +
  '巽木辛丑也,离火己卯也,坤土乙未癸，兑金丁巳也';

const getNatos = () => {

  const mapFn = (sentence) => {
    const longHook = sentence[0];
    const longHookElemental = sentence[1];
    const externalHookTrunk = sentence[2];
    const salt = sentence[3];
    const internalHookTrunk = sentence[4] == '也' ?
      externalHookTrunk : sentence[4];
    return {
      longHook,
      longHookElemental,
      externalHookTrunk,
      salt,
      internalHookTrunk
    };
  }

  return R.compose(
    R.map(mapFn),
    R.split(','))
    (natoParagraph);
}

export const natos = getNatos();

const shortHookSentence = '地雷水澤山火風天';

const longHookParagraph =
  '乾為天,天風姤,天山遁,天地否,風地觀,山地剝,火地晉,火天大有,' +
  '坎為水,水澤節,水雷屯,水火既濟,澤火革,雷火豐,地火明夷,地水師,' +
  '艮為山,山火賁,山天大畜,山澤損,火澤睽,天澤履,風澤中孚,風山漸,' +
  '震為雷,雷地豫,雷水解,雷風恒,地風升,水風井,澤風大過,澤雷隨,' +
  '巽為風,風天小畜,風火家人,風雷益,天雷無妄,火雷噬嗑,山雷頤,山風蠱,' +
  '離為火,火山旅,火風鼎,火水未濟,山水蒙,風水渙,天水訟,天火同人,' +
  '坤為地,地雷覆,地澤臨,地天泰,雷天大壯,澤天夬,水天需,水地比,' +
  '兌為澤,澤水困,澤地萃,澤山鹹,水山蹇,地山謙,雷山小過,雷澤歸妹';

const getShortHookNumber = (shortHook) => {
  return getIndexFromList(shortHook, shortHookSentence);
}

const getLongHooks = () => {

  const mapFn = (sentence) => {

    let externalHook;
    let internalHook;
    let longHookName;

    if(sentence[1] == '為'){
      externalHook = sentence[2];
      internalHook = sentence[2];
      longHookName = '純' + sentence[0];
    }
    else {
      externalHook = sentence[0];
      internalHook = sentence[1];
      longHookName = R.drop(2, sentence);
    }

    const externalHookNumber =
      getShortHookNumber(externalHook);

    const internalHookNumber =
      getShortHookNumber(internalHook);

    return {
      externalHook,
      internalHook,
      longHookName,
      externalHookNumber,
      internalHookNumber
    }
  }

  return R.compose(
    R.map(mapFn),
    R.split(',')
  )
  (longHookParagraph);

}

export const longHooks = getLongHooks();
