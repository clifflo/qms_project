import {
  getTrunkFromIndex,
  getBranchFromIndex
} from './plastics';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const rawMetroSet = {
  '甲戊庚': '丑未',
  '乙己': '子申',
  '丙丁': '亥酉',
  '壬癸': '巳卯',
  '辛': '午寅',
}

export const getMetroSet = () => {

  const mapFn1 = (rawMetro) => {
    return {
      metroDayTrunks: rawMetro[0],
      metroMorningStart: rawMetro[1][0],
      metroEveningStart: rawMetro[1][1]
    }
  }

  const mapFn2 = (metro) => {

    const trunks = R.split('', metro.metroDayTrunks);

    const mapFn3 = (trunk) => {
      return {
        metroDayTrunk: trunk,
        metroMorningStart: metro.metroMorningStart,
        metroEveningStart: metro.metroEveningStart
      }
    }

    return R.map(mapFn3, trunks);
  }

  const fullMapFn = R.compose(
    RA.concatAll,
    R.map(mapFn2),
    R.map(mapFn1),
    R.toPairs);

  const result = fullMapFn(rawMetroSet);
  console.log(result);
  return result;
}

export const metroSet = getMetroSet();

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
