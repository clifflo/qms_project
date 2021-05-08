import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  utItem,
  utGetIdx
} from '../../utils/util_01';
import {
  indexOfBranch,
  itemOfBranch
} from '../../twigs/twig_01';

export const rawntos =
  R.join(',', [
    '乾金甲子壬順佈,坎水戊寅戊順佈',
    '艮土丙辰丙順佈,震木庚子庚順佈',
    '巽木辛丑辛逆佈,離火己卯己逆佈',
    '坤土乙未癸逆佈,兌金丁巳丁逆佈',
  ])

// Full bean branch series
export const getFullSnapPea = (bbssb, bbscw) => {

  try{

    E.cknws(bbssb, 'bbssb');

    const bbsbi = indexOfBranch(bbssb);
    E.cknwn(bbsbi, 'bbsbi');

    const mapFn = idx => {
      const rawAdjustment = idx * 2;
      const finalAdjustment = bbscw ?
        rawAdjustment : (-rawAdjustment);
      return itemOfBranch(bbsbi + finalAdjustment);
    }

    const fullSnapPea = R.map(mapFn, R.range(0, 6))
    return fullSnapPea;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Bean Branch Series.');
  }

}

// Baked nattos
export const getBakedNattos = () => {

  const mapFn = sentence => {

    const genericShortHookOriginal = sentence[0];
    const genericShortHookElemental = sentence[1];
    const externalShortHookTrunk = sentence[4];
    const internslShortHookTrunk = sentence[2];
    const bbssb = sentence[3];
    const bbscw = sentence[5] == '順';
    const fullSnapPea = getFullSnapPea(
      bbssb, bbscw);

    const ebbrs =
      R.reverse(R.takeLast(3, fullSnapPea));

    const ibbrs =
      R.reverse(R.take(3, fullSnapPea));

    return {
      _type: 'bkdnto',
      genericShortHookOriginal,
      genericShortHookElemental,
      externalShortHookTrunk,
      internslShortHookTrunk,
      ebbrs,
      ibbrs
    };
  }

  return R.compose(
    R.map(mapFn),
    R.split(','))
    (rawntos);
}

export const bakedNattos = getBakedNattos();

// Generic short hook alternative
export const gshalo = '地雷水澤山火風天';

// Generic short hook original
export const gshoro = '坤震坎兌艮離巽乾';

// Generic short hook english
export const gsheng = [
  'Earth',
  'Thunder',
  'Lake',
  'Swamp',
  'Mountain',
  'Lava',
  'Monsoon',
  'Sky'
]
