import {
  getTrunkFromIndex,
  getBranchFromIndex
} from './plastics';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';


export const rawChiefGuardSet = {
  '甲戊庚': '丑未',
  '乙己': '子申',
  '丙丁': '亥酉',
  '壬癸': '巳卯',
  '辛': '午寅',
}

export const getChiefGuardSet = () => {

  const mapFn1 = (rawChiefGuard) => {
    return {
      dayTrunks: rawChiefGuard[0],
      morningStart: rawChiefGuard[1][0],
      eveningStart: rawChiefGuard[1][1]
    }
  }

  const mapFn2 = (chiefGuard) => {

    const trunks = R.split('', chiefGuard.dayTrunks);

    const mapFn3 = (trunk) => {
      return {
        dayTrunk: trunk,
        morningStart: chiefGuard.morningStart,
        eveningStart: chiefGuard.eveningStart
      }
    }

    return R.map(mapFn3, trunks);
  }

  const fullMapFn = R.compose(
    RA.concatAll,
    R.map(mapFn2),
    R.map(mapFn1),
    R.toPairs);

  const result = fullMapFn(rawChiefGuardSet);
  console.log(result);
  return result;
}

export const chiefGuardSet = getChiefGuardSet();

export const crabFarmSentences = [
  '甲祿在寅',
  '丙祿在巳',
  '戊祿在巳',
  '庚祿在申',
  '壬祿在亥'
];

export const getCrabFarm = () => {

  const mapFn = sentence => {
    return {
      crabBody: sentence[0],
      crabShell: sentence[3]
    }
  }

  return R.map(mapFn, crabFarmSentences);
}

export const crabFarm = getCrabFarm();
