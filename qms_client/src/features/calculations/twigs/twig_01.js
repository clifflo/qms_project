import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  utItem,
  utGetIdx
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

// Elemental context
export const elementalContext = {
  '金': 'Twig Metal',
  '水': 'Twig Water',
  '木': 'Twig Wood',
  '火': 'Twig Fire',
  '土': 'Twig Soil'
}

export const getTwigElele = elemc => {
  return elementalContext[elemc];
}

export const isTwigMetal = eleme => {
  return eleme == 'Twig Metal';
}

export const isTwigFire = eleme => {
  return eleme == 'Twig Fire';
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

// Item of trunk
export function itemOfTrunk(index){
  return utItem(trunkOrder, index);
}

export function itemOfBranch(index){
  return utItem(branchOrder, index);
}

export function itemOfElem(index){
  return utItem(elementalOrder, index);
}

export function isValidBranch(branch){
  return R.includes(branch, branchOrder);
}

export function isValidTrunk(trunk){
  return R.includes(trunk, trunkOrder);
}

export function isValidElem(elemental){
  return R.includes(elemental, elementalOrder);
}

export function idxOfElem(elemental){
  return utGetIdx(elemental, elementalOrder)
}

export const indexOfBranch = (branch) => {
  return utGetIdx(branch, branchOrder)
}

export const indexOfTrunk = trunk => {
  return utGetIdx(trunk, trunkOrder)
}
