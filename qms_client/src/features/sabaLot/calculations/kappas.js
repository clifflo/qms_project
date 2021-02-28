import {
  getTrunkFromIndex,
  getBranchFromIndex,
  getIndexOfBranch,
  getIndexOfTrunk
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

export const getCrabShell = (crabBody) => {

  const crabBodyIndex = getIndexOfTrunk(crabBody);

  if(crabBodyIndex == -1)
    throw 'Wrong crab body due to wrong day trunk.';

  const crabShell =
    R.find(crab => crab.crabBody == crabBody, crabFarm).crabShell;

  return crabShell;

}

export const parseKappaSentence = kappaSentence => {

  if (kappaSentence.length != 7)
    throw 'Wrong Kappa sentence length';

  const dayTrunk = kappaSentence[0];
  const dayBranch = kappaSentence[1];
  const daySay = kappaSentence[2];
  const timeBranch = kappaSentence[3];
  const timeSay = kappaSentence[4];
  const admiralBranch = kappaSentence[5];
  const admiralSay = kappaSentence[6];

  const dayTrunkIndex = getIndexOfTrunk(dayTrunk);
  if (dayTrunkIndex == -1)
    throw 'Wrong day trunk.';

  const dayBranchIndex = getIndexOfBranch(dayBranch);
  if (dayBranchIndex == -1)
    throw 'Wrong day branch.';

  if (daySay != '日')
    throw 'Wrong day say.';

  const timeBranchIndex = getIndexOfBranch(timeBranch);

  if (timeBranchIndex == -1)
    throw 'Wrong time branch.';

  if (timeSay != '時')
    throw 'Wrong time say.';

  const admiralBranchIndex = getIndexOfBranch(admiralBranch);

  if (admiralBranchIndex == -1)
    throw 'Wrong admiral branch.';

  if (admiralSay != '將')
    throw 'Wrong admiral say.';

  return {
    dayTrunk,
    dayTrunkIndex,
    dayBranch,
    dayBranchIndex,
    timeBranch,
    timeBranchIndex,
    admiralBranch,
    admiralBranchIndex
  }

}

export const buildKappaTable = (kappaInput) => {

  const distance = kappaInput.admiralBranchIndex -
    kappaInput.timeBranchIndex;

  const moveForward = (source) => source + distance;
  const moveBackward = (source) => source - distance;

  const columnFn = R.compose(
    getBranchFromIndex,
    moveForward,
    getIndexOfBranch);

  const trunkAlphaFn = R.compose(columnFn, getCrabShell);
  const trunkAlpha = trunkAlphaFn (kappaInput.dayTrunk);
  const trunkOmega = columnFn(trunkAlpha);

  const branchAlpha = columnFn(kappaInput.dayBranch);
  const branchOmega = columnFn(branchAlpha);

  return {
    ...kappaInput,
    trunkAlpha,
    trunkOmega,
    branchAlpha,
    branchOmega
  }
}

export function check(kappaSentence){

  return buildKappaTable(parseKappaSentence(kappaSentence));
}
