import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  utItem,
  utGetIdx
} from '../../utils/util_01';
import {
  trkod,
  isValidTrunk
} from '../../twigs/twig_01';
import {
  getRcxtvByLhn
} from '../rhos/rho_02'
import {
  rhocs_5,
  rfcis
} from '../rhos/rho_06';

export const dpldo =
  R.compose(
    R.reverse,
    R.map(R.concat('丙')),
    R.split(','))
  ('青龍,朱雀,勾陳,螣蛇,白虎,玄武');

// Delta Paladin Start Position Map
const dpspm = {
  '甲': '丙青龍',
  '乙': '丙青龍',
  '丙': '丙朱雀',
  '丁': '丙朱雀',
  '戊': '丙勾陳',
  '己': '丙螣蛇',
  '庚': '丙白虎',
  '辛': '丙白虎',
  '壬': '丙玄武',
  '癸': '丙玄武'
}

// Delta Paladin Cross Set List
const getDpcsl = () => {

  const mapFn_1n = (startIdx, distance) => {

    // Delta paladin in cross
    const dpicr = utItem(
      dpldo, startIdx + distance);

    return dpicr;
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = idx => {

    // Delta paladin day trunk
    const dpdtr = utItem(trkod, idx);

    if(R.isNil(dpdtr)){
      throw new Error(
        'RPDTR should not be nil.')
    }

    const rpstp = dpspm[dpdtr];

    // Rho Paladin Index
    const rpdix = utGetIdx(rpstp, dpldo) + 1;

    if(R.isNil(rpdix)){
      throw new Error(
        'RPDIX should not be nil.');
    }

    // Delta paladin cross set
    const dpcst = R.map(
      mapFn_1c(rpdix),
      R.range(0, 6));

    return {
      dpdtr,
      dpcst
    };
  }

  try {
    return R.map(mapFn_2, R.range(0, 10));
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get RPCSL');
  }
}

export const dpcsl = getDpcsl();

export const getDpcstByRdtr = rdtr => {

  if(R.isNil(rdtr)){
    throw new Error(
      'RDTR should not be nil.');
  }

  if(!RA.isString(rdtr)){
    throw new Error(
      'RDTR must be a string.');
  }

  if(!isValidTrunk(rdtr)){
    throw new Error(
      `${rdtr} is not a valid trunk for RDTR.`);
  }

  const rpcbd = R.find(
    R.propEq('dpdtr', rdtr),
    rpcsl);

  const dpcst = rpcbd.dpcst;

  if(R.isNil(dpcst)){
    throw new Error(
      'RPCST should not be nil.');
  }

  if(!RA.isArray(dpcst)){
    throw new Error(
      'RPCST must be an array.');
  }

  return dpcst;
}
