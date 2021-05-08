import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getCyclicItemFromList,
  getIndexFromString
} from '../utils/util_01';

export const trunkContext = {
  '甲': 'Beta',
  '乙': 'Gamma',
  '丙': 'Delta',
  '丁': 'Epsilon',
  '戊': 'Zeta',
  '己': 'Eta',
  '庚': 'Theta',
  '辛': 'Iota',
  '壬': 'Kappa',
  '癸': 'Lamda'
}

export const elementalOrder = '金水木火土';

export const elementalContextSet = [
  {
    elementalIndex: 0,
    elementalChinese: '金',
    elementalEnglish: 'Twig Metal'
  },
  {}

]
export const getTwigElementalEnglish =
  elementalChinese => {
  return elementalContext[elementalChinese];
}

export const isTwigMetal =
  elementalEnglish => {
  return elementalEnglish == 'Twig Metal';
}

export const isTwigFire =
  elementalEnglish => {
  return elementalEnglish == 'Twig Fire';
}

export const isTwigWater =
  elementalEnglish => {
  return elementalEnglish == 'Twig Water';
}

export const isTwigEarth =
  elementalEnglish => {
  return elementalEnglish == 'Twig Earth';
}

export const isTwigWood =
  elementalEnglish => {
  return elementalEnglish == 'Twig Wood';
}

export const trunkOrder
  = '甲乙丙丁戊己庚辛壬癸';

export const branchContext = {
  '子': 'Psi',
  '丑': 'Chi',
  '寅': 'Phi',
  '卯': 'Upsilon',
  '辰': 'Tau',
  '巳': 'Sigma',
  '午': 'Rho',
  '未': 'Pi',
  '申': 'Omicron',
  '酉': 'Xi',
  '戌': 'Nu',
  '亥': 'Mu',
}

// Branch order
export const branchOrder =
  '子丑寅卯辰巳午未申酉戌亥';
