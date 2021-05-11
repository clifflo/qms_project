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

export const rawNattoContextSet =
  R.join(',', [
    '乾金甲子壬順佈,坎水戊寅戊順佈',
    '艮土丙辰丙順佈,震木庚子庚順佈',
    '巽木辛丑辛逆佈,離火己卯己逆佈',
    '坤土乙未癸逆佈,兌金丁巳丁逆佈',
  ])

export const getFullSnapPeas =
  (beginningSnapPea, snapPeasRunClockwise) => {

  try{

    E.checkNilWithString(
      beginningSnapPea,
      'Beginning Snap Pea');

    const beginningSnapPeaBranchIndex =
      indexOfBranch(beginningSnapPea);

    E.checkNilWithNumber(
      beginningSnapPeaBranchIndex,
      'Beginning Snap Pea Branch Index');

    const mapFn = idx => {

      const rawAdjustment = idx * 2;

      const finalAdjustment = snapPeasRunClockwise ?
        rawAdjustment : (-rawAdjustment);

      return itemOfBranch(
        beginningSnapPeaBranchIndex
        + finalAdjustment);
    }

    const fullSnapPeas = R.map(mapFn, R.range(0, 6))
    return fullSnapPeas;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Bean Branch Series.');
  }

}

// Baked nattos
export const getBakedNattoSet = () => {

  const bakedNattoMapFunction = sentence => {

    const genericShortHookComplexOriginal = sentence[0];
    const genericShortHookElemental = sentence[1];
    const externalShortHookTrunk = sentence[4];
    const internslShortHookTrunk = sentence[2];
    const beginningSnapPea = sentence[3];
    const snapPeasRunClockwise = sentence[5] == '順';
    const fullSnapPeas = getFullSnapPeas(
      beginningSnapPea, snapPeasRunClockwise);

    const externalSnapPeas =
      R.reverse(R.takeLast(3, fullSnapPeas));

    const internalSnapPeas =
      R.reverse(R.take(3, fullSnapPeas));

    return {
      _type: 'Baked Natto Context',
      genericShortHookComplexOriginal,
      genericShortHookElemental,
      externalShortHookTrunk,
      internslShortHookTrunk,
      externalSnapPeas,
      internalSnapPeas
    };
  }

  return R.compose(
    R.map(bakedNattoMapFunction),
    R.split(','))
    (rawNattoContextSet);
}

export const bakedNattoSet = getBakedNattoSet();

export const shortHookContextSet = [
  {
    _type: 'Short Hook Context.',
    genericShortHookIndex: 0,
    genericShortHookComplexOriginal: '地',
    genericShortHookAlternative: '坤',
    genericShortHookEnglish: 'Short Hook Earth'
  },
  {
    _type: 'Short Hook Context.',
    genericShortHookIndex: 1,
    genericShortHookComplexOriginal: '雷',
    genericShortHookAlternative: '震',
    genericShortHookEnglish: 'Short Hook Thunder'
  },
  {
    _type: 'Short Hook Context.',
    genericShortHookIndex: 2,
    genericShortHookComplexOriginal: '水',
    genericShortHookAlternative: '坎',
    genericShortHookEnglish: 'Short Hook Lake'
  },
  {
    _type: 'Short Hook Context.',
    genericShortHookIndex: 3,
    genericShortHookComplexOriginal: '澤',
    genericShortHookAlternative: '兌',
    genericShortHookEnglish: 'Short Hook Swamp'
  },
  {
    _type: 'Short Hook Context.',
    genericShortHookIndex: 4,
    genericShortHookComplexOriginal: '山',
    genericShortHookAlternative: '艮',
    genericShortHookEnglish: 'Short Hook Mountain'
  },
  {
    _type: 'Short Hook Context.',
    genericShortHookIndex: 5,
    genericShortHookComplexOriginal: '火',
    genericShortHookAlternative: '離',
    genericShortHookEnglish: 'Short Hook Flame'
  },
  {
    _type: 'Short Hook Context.',
    genericShortHookIndex: 6,
    genericShortHookComplexOriginal: '風',
    genericShortHookAlternative: '巽',
    genericShortHookEnglish: 'Short Hook Monsoon'
  },
  {
    _type: 'Short Hook Context.',
    genericShortHookIndex: 7,
    genericShortHookComplexOriginal: '天',
    genericShortHookAlternative: '乾',
    genericShortHookEnglish: 'Short Hook Sky'
  }
]
