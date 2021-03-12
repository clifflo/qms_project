import {
  itemOfTrk,
  itemOfBrh,
  idxOfBrh,
  idxOfTrk,
  idxTool,
  isValidBrh,
  comparePelem
} from '../plastics/plastic_1';
import {
  moveBrh
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
      dayTrks: rawChiefPaladin[0],
      morningStart: rawChiefPaladin[1][0],
      eveningStart: rawChiefPaladin[1][1]
    }
  }

  const mapFn2 = (chiefPaladin) => {

    const trks = R.split('', chiefPaladin.dayTrks);

    const mapFn3 = (trk) => {
      return {
        dayTrk: trk,
        morningStart: chiefPaladin.morningStart,
        eveningStart: chiefPaladin.eveningStart
      }
    }

    return R.map(mapFn3, trks);
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

export const isMorningPaladinHour = (brh) => {
  const morningPaladinHours = '卯辰巳午未申';
  if(!isValidBrh(brh))
    throw 'Wrong brh for hour.';

  return R.includes(morningPaladinHours, brh);
}

export const getChiefPaladinContext = (dayTrk, hourBrh) => {

  const morningPaladinHour = isMorningPaladinHour(hourBrh)
  const startProp = morningPaladinHour ? 'morningStart': 'eveningStart';

  const chiefPaladinStart = R.find(
    R.propEq('dayTrk', dayTrk))[startProp];

  return {
    morningPaladinHour,
    chiefPaladinStart
  }
}

export const isClockwisePaladinHour = (brh) => {}

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

  const dayTrk = kappaSentence[0];
  const dayBrh = kappaSentence[1];
  const daySay = kappaSentence[2];
  const hourBrh = kappaSentence[3];
  const hourSay = kappaSentence[4];
  const rangerBrh = kappaSentence[5];
  const rangerSay = kappaSentence[6];

  const dayTrkIndex = idxOfTrk(dayTrk);
  if (dayTrkIndex == -1){
    throw new Error(`'${dayTrk}' is not a valid trk.`);
  }

  const dayBrhIndex = idxOfBrh(dayBrh);
  if (dayBrhIndex == -1){
    throw new Error(`'${dayBrh}' is not a valid brh.`);
  }

  if (daySay != '日')
    throw new Error('Wrong day say.');

  const hourBrhIndex = idxOfBrh(hourBrh);

  if (hourBrhIndex == -1){
    throw new Error('Wrong hour brh.');
  }

  if (hourSay != '時'){
    throw new Error('Wrong hour say.')
  }

  const rangerBrhIndex = idxOfBrh(rangerBrh);

  if (rangerBrhIndex == -1){
    throw new Error('Wrong ranger brh.');
  }

  if (rangerSay != '將')
    throw new Error('Wrong ranger say.');

  return {
    dayTrk,
    dayTrkIndex,
    dayBrh,
    dayBrhIndex,
    hourBrh,
    hourBrhIndex,
    rangerBrh,
    rangerBrhIndex,
    kappaSentence
  }

}

export const initializeKappaTable = (kappaInput) => {

  const gap = kappaInput.rangerBrhIndex -
    kappaInput.hourBrhIndex;

  const columnFn = (brh) =>{
    return moveBrh(brh, gap, 'Forward');
  }

  const trkAlphaFn = R.compose(columnFn, getCrabShell);
  const trkAlpha = trkAlphaFn(kappaInput.dayTrk);
  const trkOmega = columnFn(trkAlpha);

  const brhAlpha = columnFn(kappaInput.dayBrh);
  const brhOmega = columnFn(brhAlpha);

  return {
    ...kappaInput,
    trkAlpha,
    trkOmega,
    brhAlpha,
    brhOmega,
    gap
  }
}

export const paladinSentence =
  '貴人,青龍,六合,勾陳,騰蛇,朱雀,'
  + '太常,白虎,太陰,天空,玄武,天后';

export const paladinList = R.split(',', paladinSentence);

export const moveStandardForward = (kappaTable, brh) => {
  return moveBrh(brh, kappaTable.gap, 'Forward');
}

export const moveStandardBackward = (kappaTable, brh) => {
  return moveBrh(brh, kappaTable.gap, 'Backward');
}
