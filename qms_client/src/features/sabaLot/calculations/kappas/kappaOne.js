import {
  getTrunkFromIndex,
  getBranchFromIndex,
  getIndexOfBranch,
  getIndexOfTrunk,
  getIndexFromList,
  isValidBranch,
  comparePlastic
} from '../plastics/plasticOne';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';


export const rawChiefPaladinSet = {
  '甲戊庚': '丑未',
  '乙己': '子申',
  '丙丁': '亥酉',
  '壬癸': '巳卯',
  '辛': '午寅',
}

export const getChiefPaladinSet = () => {

  const mapFn1 = (rawChiefPaladin) => {
    return {
      dayTrunks: rawChiefPaladin[0],
      morningStart: rawChiefPaladin[1][0],
      eveningStart: rawChiefPaladin[1][1]
    }
  }

  const mapFn2 = (chiefPaladin) => {

    const trunks = R.split('', chiefPaladin.dayTrunks);

    const mapFn3 = (trunk) => {
      return {
        dayTrunk: trunk,
        morningStart: chiefPaladin.morningStart,
        eveningStart: chiefPaladin.eveningStart
      }
    }

    return R.map(mapFn3, trunks);
  }

  const fullMapFn = R.compose(
    RA.concatAll,
    R.map(mapFn2),
    R.map(mapFn1),
    R.toPairs);

  const result = fullMapFn(rawChiefPaladinSet);
  return result;
}

export const chiefPaladinSet = getChiefPaladinSet();

export const isMorningPaladinHour = (branch) => {
  const morningPaladinHours = '卯辰巳午未申';
  if(!isValidBranch(branch))
    throw 'Wrong branch for hour.';

  return R.includes(morningPaladinHours, branch);
}

export const getChiefPaladinContext = (dayTrunk, hourBranch) => {

  const morningPaladinHour = isMorningPaladinHour(hourBranch)
  const startProp = morningPaladinHour ? 'morningStart': 'eveningStart';

  const chiefPaladinStart = R.find(
    R.propEq('dayTrunk', dayTrunk))[startProp];

  return {
    morningPaladinHour,
    chiefPaladinStart
  }
}

export const isClockwisePaladinHour = (branch) => {}

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
  const hourBranch = kappaSentence[3];
  const hourSay = kappaSentence[4];
  const rangerBranch = kappaSentence[5];
  const rangerSay = kappaSentence[6];

  const dayTrunkIndex = getIndexOfTrunk(dayTrunk);
  if (dayTrunkIndex == -1)
    throw 'Wrong day trunk.';

  const dayBranchIndex = getIndexOfBranch(dayBranch);
  if (dayBranchIndex == -1)
    throw 'Wrong day branch.';

  if (daySay != '日')
    throw 'Wrong day say.';

  const hourBranchIndex = getIndexOfBranch(hourBranch);

  if (hourBranchIndex == -1)
    throw 'Wrong hour branch.';

  if (hourSay != '時')
    throw 'Wrong hour say.';

  const rangerBranchIndex = getIndexOfBranch(rangerBranch);

  if (rangerBranchIndex == -1)
    throw 'Wrong ranger branch.';

  if (rangerSay != '將')
    throw 'Wrong ranger say.';

  return {
    dayTrunk,
    dayTrunkIndex,
    dayBranch,
    dayBranchIndex,
    hourBranch,
    hourBranchIndex,
    rangerBranch,
    rangerBranchIndex
  }

}

export const buildKappaTable = (kappaInput) => {

  const distance = kappaInput.rangerBranchIndex -
    kappaInput.hourBranchIndex;

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

export const paladinSentence =
  '貴人,青龍,六合,勾陳,騰蛇,朱雀,'
  + '太常,白虎,太陰,天空,玄武,天后';

export const paladinList = R.split(',', paladinSentence);
