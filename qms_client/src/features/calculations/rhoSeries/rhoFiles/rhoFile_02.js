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

const bakedNattoMapFunction = rawNatto => {

  const genericShortHookOriginal = rawNatto[0];
  const genericShortHookElemental = rawNatto[1];
  const externalShortHookTrunk = rawNatto[4];
  const internslShortHookTrunk = rawNatto[2];
  const beginningSnapPea = rawNatto[3];
  const snapPeasRunClockwise = rawNatto[5] == '順';
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

const buildBakedNattoSet = () => {

  try{
    return R.compose(
      R.map(bakedNattoMapFunction),
      R.split(','))
      (rawNattoSet);
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot build Baked Natto Set.');
  }

}

export const bakedNattoSet = buildBakedNattoSet();

export const
  getBakedNattoBy
