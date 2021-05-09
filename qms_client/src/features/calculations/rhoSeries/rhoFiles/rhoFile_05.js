import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  longHookParagraph,
  bakedNattoSet
} from './rhoFile_03';
import {
  rhoContextMapFunction_1,
} from './rhoFile_04';
import {
  checkNilWithArray,
  checkNilWithString,
  checkNilWithTypedObject
} from '../../utilityFiles/utilityHub';
import {
  getTwigElementalContextByChinese,
  getTwigTrunkContextByChinese
} from '../../twigFiles/twigHub';

const buildRhoContextSet_1 = () => {

  try{
    return R.compose(
      R.map(rhoContextMapFunction_1),
      R.split(',')
    )
    (longHookParagraph);
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot build Rho Context Set 1.')
  }
}

export const rhoContextSet_1 =
  buildRhoContextSet_1();

export const buildLongHookCrossList = (
  fullSnapPeas,
  externalShortHookTrunk,
  internslShortHookTrunk,
  longHookCrossSign,
  longHookCrossDownwardIndex) => {

  const longHookCrossTrunk =
    longHookCrossDownwardIndex <= 2 ?
    externalShortHookTrunk :
    internslShortHookTrunk;

  const longHookCrossBranchChinese =
    fullSnapPeas[longHookCrossDownwardIndex];

  const longHookCrossElementalChinese =
    getTwigBranchContextByChinese(
      longHookCrossBranchChinese)
    .twigBranchElementalChinese;

  return {
    longHookCrossTrunk,
    longHookCrossBranchChinese,
    longHookCrossDownwardIndex
  }
}
