import * as R from 'ramda';
import { pflat } from '../../utils/util_4';
import { utItem } from '../../utils/util_1';
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

// Rho Paladin Cross List
const getRpcl = () => {
  const mapFn = idx => {
    // Rho paladin in cross
    const rpicr = utItem(idx, ropldOrder);
    return rpicr;
  }

  try {

    return R.map(mapFn, R.range(0, 6));
  }
}
