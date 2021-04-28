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
} from './rho_02'
import {
  rhocs_5,
  rfcis
} from './rho_06';

export const rpldo =
  R.compose(
    R.reverse,
    R.map(R.concat('丙')),
    R.split(','))
  ('青龍,朱雀,勾陳,螣蛇,白虎,玄武');

// Rho Paladin Start Position Map
const rpspm = {
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

// Rho Paladin Cross Set List
const getRpcsl = () => {

  const mapFn_1n = (startIdx, distance) => {

    // Rho paladin in cross
    const rpicr = utItem(
      rpldo, startIdx + distance);

    return rpicr;
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = idx => {

    // Rho paladin day trunk
    const rpdtr = utItem(trkod, idx);

    if(R.isNil(rpdtr)){
      throw new Error(
        'RPDTR should not be nil.')
    }

    const rpstp = rpspm[rpdtr];

    // Rho Paladin Index
    const rpdix = utGetIdx(rpstp, rpldo) + 1;

    if(R.isNil(rpdix)){
      throw new Error(
        'RPDIX should not be nil.');
    }

    // Rho paladin cross set
    const rpcst = R.map(
      mapFn_1c(rpdix),
      R.range(0, 6));

    return {
      rpdtr,
      rpcst
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

export const rpcsl = getRpcsl();

export const getRpcstByRdtr = rdtr => {

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
    R.propEq('rpdtr', rdtr),
    rpcsl);

  const rpcst = rpcbd.rpcst;

  if(R.isNil(rpcst)){
    throw new Error(
      'RPCST should not be nil.');
  }

  if(!RA.isArray(rpcst)){
    throw new Error(
      'RPCST must be an array.');
  }

  return rpcst;
}
