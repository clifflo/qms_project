import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const rawNattoSet =
  R.join(',', [
    '乾金甲子壬順佈,坎水戊寅戊順佈',
    '艮土丙辰丙順佈,震木庚子庚順佈',
    '巽木辛丑辛逆佈,離火己卯己逆佈',
    '坤土乙未癸逆佈,兌金丁巳丁逆佈',
  ]);

const snapPeaMapFunction = (
  beginningSnapPea,
  snapPeasRunClockwise,
  crossDownwardIndex)  => {

  const rawAdjustment = crossDownwardIndex * 2;

  const finalAdjustment = snapPeasRunClockwise ?
    rawAdjustment : (-rawAdjustment);

  return itemOfBranch(
    beginningSnapPeaBranchIndex
    + finalAdjustment);
}

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

    const fullSnapPeas =
      R.map(
        R.curry(snapPeaMapFunction)
        (beginningSnapPea)
        (snapPeasRunClockwise),
        R.range(0, 6));

    return fullSnapPeas;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Full Snap Peas.');
  }
}

export const getBakedNattoSet = () => {

  const bakedNattoMapFunction = sentence => {

    const genericShortHookOriginal = sentence[0];
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
      _type: 'Baked Natto',
      genericShortHookOriginal,
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
    (rawNattoSet);
}

export const bakedNattoSet = getBakedNattoSet();
