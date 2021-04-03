import * as R from 'ramda';
import { pflat } from '../../utils/util_4';
import { utItem, utGetIdx } from '../../utils/util_1';
import { branchOrder } from '../../twigs/twig_1';

const ropldOrder =
  R.compose(
    R.reverse,
    R.concat('丙'),
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
      startIdx + distance,
      ropldOrder);

    return rpicr;
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = idx => {

    const branch = utItem(idx, branchOrder);
    const rpstp  = rpspm_2[branch];

    // Rho Paladin Index
    const rpdix = utGetIdx(rpstp, rpspm_2);

    // Rho paladin cross set
    const rpcst = R.map(
      mapFn_1c(rpdix),
      R.range(0, 6));

    return {
      branch,
      rpcst
    };
  }

  try {
    return R.map(mapFn, R.range(0, 10));
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get RPCSL');
  }
}
