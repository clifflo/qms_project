import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  item,
  getIdx
} from '../utils/util_1';
import {
  itemOfBranch,
  idxOfBranch
} from '../twigs/twig_1';

const nattoParagraph =
  '乾金甲子壬順佈,坎水戊寅戊順佈,艮土丙辰丙順佈,震木庚子庚順佈,' +
  '巽木辛丑辛逆佈,離火己卯己逆佈,坤土乙未癸逆佈,兌金丁巳丁逆佈';

// Bean Branch Series
// For example, as of 乾, we will have the branches
// starting from the bottom as 子寅辰午申戌
// 'Bbssb' is Bean Branch Series Start Branch.
const getFbbrs = (bbssb, mseIsCw) => {

  try{

    if(R.isNil(bbssb)){
      throw new Error(
        'Bean Branch Series Start Branch ',
        'should not be nil.');
    }

    // 'Bbsbi' is Bean Branch Series Start Branch
    const bbsbi = idxOfBranch(bbssb);

    const mapFn = idx => {
      const rawAdjustment = idx * 2;
      const finalAdjustment = mseIsCw ?
        rawAdjustment : (-rawAdjustment);
      return itemOfBranch(bbsbi + finalAdjustment);
    }

    const fbbrs = R.map(mapFn, R.range(0, 6))
    return fbbrs;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Bean Branch Series.');
  }

}

const getNattos = () => {

  const mapFn = (sentence) => {
    const shori = sentence[0];
    const shele = sentence[1];

    // External Short Hook Bean Trunk
    const eshbt = sentence[4];

    // Internal Short Hook Bean Trunk
    const ishbt = sentence[2];
    const bbssb = sentence[3];

    // Mustard Series is Clockwise
    const mseIsCw = sentence[5] == '順';
    const fbbrs = getFbbrs(
      bbssb, mseIsCw);

    // External Bean Branch Series
    const ebbrs =
      R.reverse(R.takeLast(3, fbbrs));

    // Internal Bean Branch Series
    const ibbrs =
      R.reverse(R.take(3, fbbrs));

    return {
      shori,
      shele,
      eshbt,
      ishbt,
      bbssb,
      ebbrs,
      ibbrs
    };
  }

  return R.compose(
    R.map(mapFn),
    R.split(','))
    (nattoParagraph);
}

export const nattos = getNattos();

// Short Hook Alternative
export const shaltSce = '地雷水澤山火風天';

// Short Hook Ori
export const shoriSce = '坤震坎兌艮離巽乾';

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
  (shalt) => {
  return getIdx(
    shalt,
    shaltSce);
}

export const getRhocxts_1 = () => {

  const mapFn = (sentence) => {

    let eshalt;
    let ishalt;
    let lhName;

    if(sentence[1] == '為'){
      eshalt = sentence[2];
      ishalt = sentence[2];
      lhName = '純' + sentence[0];
    }
    else {
      eshalt = sentence[0];
      ishalt = sentence[1];
      lhName = R.drop(2, sentence);
    }

    const eshIdx =
      getShNumAltIndex(eshalt);

    const ishIdx =
      getShNumAltIndex(ishalt);

    const eshori =
      shoriSce[eshIdx];

    const ishori =
      shoriSce[ishIdx];

    const lhIdx =
      (eshIdx * 8) +
      ishIdx;

    return {
      eshalt,
      ishalt,
      eshori,
      ishori,
      lhName,
      eshIdx,
      ishIdx,
      lhIdx
    }
  }

  return R.compose(
    R.map(mapFn),
    R.split(',')
  )
  (lhParagraph);

}

export const rhocxts_1 = getRhocxts_1();
