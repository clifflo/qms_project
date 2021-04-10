import * as R from 'ramda';
import { propFlat } from '../../utils/util_4';
import { utItem, utGetIdx } from '../../utils/util_1';
import { trunkOrder } from '../../twigs/twig_1';
import {
  rhocs_5,
  rfcis
} from './rho_5';

const getRhocs_6 = () => {

  const mapFn = rhocxt => {

    // Non unique Rho focus Chinee set
    const ncfcs = R.map(
      R.prop('rofcs'), rhocxt.lhcres);

    if(R.isNil(ncfcs)){
      throw new Error(
        'NCFCS should not be nil.');
    }

    // Unique cross focus Chinese set
    const ucfcs = R.uniq(ncfcs);

    // Long Hook with hidden
    const isLhhd = ucfcs.length < 5;

    // Rho hidden hook focus Chinese set
    const rhhfcs = R.difference(rfcis, ucfcs);

    if(isLhhd){

      // Rho Head Long Hook
      const rhces = R.find(
        R.propEq('lhname', '純' + rhocxt.rhshn),
        rhocs_5).lhcres;

      if(R.isNil(rhces)){
        throw new Error(
          'Cannot find the Rho Head Long Hook. '
          + `${rhocxt.rhHook} may not be a valid `
          + 'Rho Head Hook Name.')
      }

      return {
        ...rhocxt,
        isLhhd,
        rhhfcs,
        rhces
      }
    }
    else {
      return {
        ...rhocxt,
        isLhhd
      }
    }

  }

  return R.map(mapFn, rhocs_5)
}

export const rhocs_6 = getRhocs_6();

const ropldOrder =
  R.compose(
    R.reverse,
    R.map(R.concat('丙')),
    R.split(','))
  ('青龍,朱雀,勾陳,螣蛇,白虎,玄武');

// Rho paladin code map
export const rplcm = {
  '丙青龍': 'dtp-ql',
  '丙朱雀': 'dtp-zj',
  '丙勾陳': 'dtp-gc',
  '丙螣蛇': 'dtp-ts',
  '丙白虎': 'dtp-bh',
  '丙玄武': 'dtp-xw'
}

// Rho paladin code map inverted
export const rpcmi = R.invertObj(rplcm);

// Rho paladin code set
const rpcds = R.values[rplcm];

// Rho Paladin Start Position Map
const rpspm_1 = {
  '甲乙': '丙青龍',
  '丙丁': '丙朱雀',
  '戊': '丙勾陳',
  '己': '丙螣蛇',
  '庚辛': '丙白虎',
  '壬癸': '丙玄武'
}

export const rpspm_2 = propFlat(rpspm_1);

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
