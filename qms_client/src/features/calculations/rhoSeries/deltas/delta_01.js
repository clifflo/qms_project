import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../egghead';
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

// Delta paladin chinese order
export const dplco =
  R.compose(
    R.reverse,
    R.split(','))
  ('丙青龍,丙朱雀,丙勾陳,丙螣蛇,丙白虎,丙玄武');

// [dplcn] is delta paladin chinese name.
// [dplnn] is delta paladin nickname.
// [dplfen] is delta paladin full english name.
// [dplsid] is delta paladin specification ID.
export const dpnnm = [
  {
    dplcn: '丙青龍',
    dplnn: 'Dragon',
    dplfen: 'Delta dragon',
    dplsid: 'dtp-ql'
  },
  {
    dplcn: '丙朱雀',
    dplnn: 'Phoenix',
    dplfen: 'Delta phoenix',
    dplsid: 'dtp-zj'
  },
  {
    dplcn: '丙勾陳',
    dplnn: 'Unicorn',
    dplfen: 'Delta unicorn',
    dplsid: 'dtp-gc'
  },
  {
    dplcn: '丙螣蛇',
    dplnn: 'Cobra',
    dplfen: 'Delta cobra',
    dplsid: 'dtp-ts'
  },
  {
    dplcn: '丙白虎',
    dplnn: 'Tiger',
    dplfen: 'Delta tiger',
    dplsid: 'dtp-bh'
  },
  {
    dplcn: '丙玄武',
    dplnn: 'Turtle',
    dplfen: 'Delta turtle',
    dplsid: 'dtp-xw'
  }
]

// Delta paladin start position map
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

// Delta paladin envelop ist
const getDpevl = () => {

  const mapFn_1n = (startIdx, distance) => {

    // Delta paladin in cross
    const dpicr = utItem(
      dplco, startIdx + distance);

    return dpicr;
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = idx => {

    // Delta paladin day trunk
    const dpdtr = utItem(trkod, idx);

    if(R.isNil(dpdtr)){
      throw new Error(
        '[dpdtr] should not be nil.')
    }

    // Delta paladin start position
    const dpstp = dpspm[dpdtr];

    // Delta Paladin Index
    const dpdix = utGetIdx(dpstp, dplco) + 1;

    if(R.isNil(dpdix)){
      throw new Error(
        'RPDIX should not be nil.');
    }

    // Delta paladin cross set
    const dpcst = R.map(
      mapFn_1c(dpdix),
      R.range(0, 6));

    return {
      _type: 'dpenv',
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

// Delta paladin cross set list
export const dpevl = getDpevl();

// Get delta paladin envelop by trunk
export const getDpebt = dpdtr => {

  E.cknws(dpdtr, 'dpdtr');

  if(!isValidTrunk(dpdtr)){
    throw new Error(
      `${dpdtr} is not a valid trunk.`);
  }

  // Delta paladin cross set by day
  const dpebt = R.find(
    R.propEq('dpdtr', dpdtr),
    dpevl);

  return dpebt;
}
