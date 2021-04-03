import * as R from 'ramda';
import { pflat } from '../../utils/util_4';
import { utItem, utGetIdx } from '../../utils/util_1';
import { trunkOrder } from '../../twigs/twig_1';

const ropldOrder =
  R.compose(
    R.reverse,
    R.map(R.concat('丙')),
    R.split(','))
  ('青龍,朱雀,勾陳,螣蛇,白虎,玄武');

// Rho Paladin Start Position Map
const rpspm_1 = {
  '甲乙': '丙青龍',
  '丙丁': '丙朱雀',
  '戊': '丙勾陳',
  '己': '丙螣蛇',
  '庚辛': '丙白虎',
  '壬癸': '丙玄武'
}

export const rpspm_2 = pflat(rpspm_1);

// Rho Paladin Cross Set List
const getRpcsl = () => {

  const mapFn_1n = (startIdx, distance) => {

    // Rho paladin in cross
    const rpicr = utItem(
      ropldOrder, startIdx + distance);

    return rpicr;
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = idx => {

    // Rho paladin day trunk
    const rpdtr = utItem(trunkOrder, idx);

    if(R.isNil(rpdtr)){
      throw new Error(
        'RPDTR should not be nil.')
    }

    const rpstp  = rpspm_2[rpdtr];

    // Rho Paladin Index
    const rpdix = utGetIdx(rpstp, ropldOrder) + 1;

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
