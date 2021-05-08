import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getIndexFromWordList
} from '../../utilityFiles/utilityFile_01';
import {
  shortHookContextSet
} from './rhoFile_01';

const longHookParagraph = R.join(',', [
  '乾為天,天風姤,天山遯,天地否,風地觀,山地剝,火地晉,地風升',
  '火天大有,坎為水,水澤節,水雷屯,水火既濟,澤火革,雷火豐',
  '地火明夷,地水師,艮為山,山火賁,山天大畜,山澤損,火澤睽',
  '天澤履,風澤中孚,風山漸,震為雷,雷地豫,雷水解,雷風恒',
  '水風井,澤風大過,澤雷隨,巽為風,風天小畜,風火家人,風雷益',
  '天雷無妄,火雷噬嗑,山雷頤,山風蠱,離為火,火山旅,火風鼎',
  '火水未濟,山水蒙,風水渙,天水訟,天火同人,坤為地,地雷復',
  '地澤臨,地天泰,雷天大壯,澤天夬,水天需,水地比,兌為澤',
  '澤水困,澤地萃,澤山咸,水山蹇,地山謙,雷山小過,雷澤歸妹'
]);

const getShortHookContextByGenericShortHookAlternative =
  genericShortHookAlternative => {

  checkNilWithString(
    genericShortHookAlternative,
    'Generic Short Hook Alternative'
  )

  const shortHookContext =
    R.find(
      R.prop('genericShortHookAlternative'),
      shortHookContextSet);

  return shortHookContext;
}

const getRhoContextSet_1 = () => {

  const rhoContextMapFunction_1 =
    longHookSentence => {

    let externalShortHookAlternative;
    let internalShortHookAlternative;
    let longHookName;

    if(longHookSentence == ''){
      throw new Error(
        'Sentence should not be empty string.')
    }

    if(longHookSentence[1] == '為'){

      externalShortHookAlternative =
        longHookSentence[2];

      internalShortHookAlternative =
        longHookSentence[2];

      longHookName = '純' + longHookSentence[0];
    }
    else {
      externalShortHookAlternative =
        longHookSentence[0];

      internalShortHookAlternative =
        longHookSentence[1];

      longHookName = R.drop(2, longHookSentence);
    }

    E.checkNilWithString(
      externalShortHookAlternative,
      'External short hook alternate'
    );

    E.checkNilWithString(
      internalShortHookAlternative,
      'Internal short hook alternate'
    )

    const externalShortHookIndex =
      getGenericShortHookIndexByAlternative(
        externalShortHookAlternative);

    const internalShortHookIndex =
      getGenericShortHookIndexByAlternative(
        internalShortHookAlternative);

    const eshori =
      gshoro[externalShortHookIndex];

    const ishori =
      gshoro[internalShortHookIndex];

    const lhidx =
      (externalShortHookIndex * 8) +
      internalShortHookIndex;

    return {
      externalShortHookAlternative,
      internalShortHookAlternative,
      eshori,
      ishori,
      longHookName,
      externalShortHookIndex,
      internalShortHookIndex,
      lhidx
    }
  }

  return R.compose(
    R.map(rhoContextMapFunction_1),
    R.split(',')
  )
  (longHookParagraph);

}

export const rhoContextSet_1 =
  getRhoContextSet_1();
