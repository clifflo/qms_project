import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  utGetIdx
} from '../../utils/util_01';
import {
  gshalo,
  gshoro
} from './rho_01';

const lhParagraph = R.join(',', [
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

// Generic short hook alternative index
const getGshalx = gshalt => {

  if(R.isNil(gshalt)){
    throw new Error(
      'SHALT should not be nil.');
  }

  if(!RA.isString(gshalt)){
    throw new Error(
      'SHALT must be a string.');
  }

  const gshalx = utGetIdx(
    gshalt,
    gshalo);

  if(gshalx == -1){
    throw new Error(
      `${gshalt} is not a valid SHALT.`);
  }

  return gshalx;
}

const getRhocs_1 = () => {

  const mapFn = sentence => {

    let eshalt;
    let ishalt;
    let lhname;

    if(sentence == ''){
      throw new Error(
        'Sentence should not be empty string.')
    }

    if(sentence[1] == '為'){
      eshalt = sentence[2];
      ishalt = sentence[2];
      lhname = '純' + sentence[0];
    }
    else {
      eshalt = sentence[0];
      ishalt = sentence[1];
      lhname = R.drop(2, sentence);
    }

    if(R.isNil(eshalt)){
      throw new Error(
        'ESHALT should not be nil.');
    }

    if(R.isNil(ishalt)){
      throw new Error(
        'ISHALT should not be nil.');
    }

    const eshidx =
      getGshalx(eshalt);

    const ishidx =
      getGshalx(ishalt);

    const eshori =
      gshoro[eshidx];

    const ishori =
      gshoro[ishidx];

    const lhidx =
      (eshidx * 8) +
      ishidx;

    return {
      eshalt,
      ishalt,
      eshori,
      ishori,
      lhname,
      eshidx,
      ishidx,
      lhidx
    }
  }

  return R.compose(
    R.map(mapFn),
    R.split(',')
  )
  (lhParagraph);

}

export const rhocs_1 = getRhocs_1();
