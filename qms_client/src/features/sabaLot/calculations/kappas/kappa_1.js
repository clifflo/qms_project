import {
  getTrunkFromIndex,
  getBranchFromIndex,
  getIndexOfBranch,
  getIndexOfTrunk,
  getIndexFromList,
  isValidBranch,
  comparePelem
} from '../plastics/plastic_1';
import {
  moveBranch
} from '../plastics/plastic_3';
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
  '甲寄寅',
  '乙寄辰',
  '丙寄巳',
  '丁寄未',
  '戊寄巳',
  '己寄未',
  '庚寄申',
  '辛寄戌',
  '壬寄亥',
  '癸寄丑'
];

export const getCrabFarm = () => {

  const mapFn = sentence => {
    return {
      crabBody: sentence[0],
      crabShell: sentence[2]
    }
  }

  return R.map(mapFn, crabFarmSentences);
}

export const crabFarm = getCrabFarm();

export const getCrabShell = (crabBody) => {

  try{
    const crab = R.find(
      R.propEq('crabBody', crabBody), crabFarm);

    if (!crab){
      throw new Error(
        `${crabBody} is not a valid crab body.`);
    }

    return crab.crabShell;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get crab shell.');
  }
}

export const getCrabBody = (crabShell) => {

  try{
    const crab = R.find(
      R.propEq('crabShell', crabShell), crabFarm);

    if (!crab){
      throw new Error(
        `${crabShell} is not a valid crab shell.`);
    }

    return crab.crabBody;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get crab body.');
  }
}

export const parseKappaSentence = kappaSentence => {

  if (kappaSentence.length != 7){
    throw new Error('Wrong Kappa sentence length');
  }

  const dayTrunk = kappaSentence[0];
  const dayBranch = kappaSentence[1];
  const daySay = kappaSentence[2];
  const hourBranch = kappaSentence[3];
  const hourSay = kappaSentence[4];
  const rangerBranch = kappaSentence[5];
  const rangerSay = kappaSentence[6];

  const dayTrunkIndex = getIndexOfTrunk(dayTrunk);
  if (dayTrunkIndex == -1){
    throw new Error(`'${dayTrunk}' is not a valid trunk.`);
  }

  const dayBranchIndex = getIndexOfBranch(dayBranch);
  if (dayBranchIndex == -1){
    throw new Error(`'${dayBranch}' is not a valid branch.`);
  }

  if (daySay != '日')
    throw new Error('Wrong day say.');

  const hourBranchIndex = getIndexOfBranch(hourBranch);

  if (hourBranchIndex == -1){
    throw new Error('Wrong hour branch.');
  }

  if (hourSay != '時'){
    throw new Error('Wrong hour say.')
  }

  const rangerBranchIndex = getIndexOfBranch(rangerBranch);

  if (rangerBranchIndex == -1){
    throw new Error('Wrong ranger branch.');
  }

  if (rangerSay != '將')
    throw new Error('Wrong ranger say.');

  return {
    dayTrunk,
    dayTrunkIndex,
    dayBranch,
    dayBranchIndex,
    hourBranch,
    hourBranchIndex,
    rangerBranch,
    rangerBranchIndex,
    kappaSentence
  }

}

export const initializeKappaTable = (kappaInput) => {

  const gap = kappaInput.rangerBranchIndex -
    kappaInput.hourBranchIndex;

  const columnFn = (branch) =>{
    return moveBranch(branch, gap, 'Forward');
  }

  const trunkAlphaFn = R.compose(columnFn, getCrabShell);
  const trunkAlpha = trunkAlphaFn(kappaInput.dayTrunk);
  const trunkOmega = columnFn(trunkAlpha);

  const branchAlpha = columnFn(kappaInput.dayBranch);
  const branchOmega = columnFn(branchAlpha);

  return {
    ...kappaInput,
    trunkAlpha,
    trunkOmega,
    branchAlpha,
    branchOmega,
    gap
  }
}

export const paladinSentence =
  '貴人,青龍,六合,勾陳,騰蛇,朱雀,'
  + '太常,白虎,太陰,天空,玄武,天后';

export const paladinList = R.split(',', paladinSentence);

export const moveStandardForward = (kappaTable, branch) => {
  return moveBranch(branch, kappaTable.gap, 'Forward');
}

export const moveStandardBackward = (kappaTable, branch) => {
  return moveBranch(branch, kappaTable.gap, 'Backward');
}
