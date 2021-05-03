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

export const elemod = '金水木火土';

// Elemental context
export const elementContext = {
  '金': 'Metal',
  '水': 'Water',
  '木': 'Wood',
  '火': 'Fire',
  '土': 'Soil'
}

export const trkod
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
export const brhod =
  '子丑寅卯辰巳午未申酉戌亥';

// Item of trunk
export function itemotr(index){
  return utItem(trkod, index);
}

export function itemobr(index){
  return utItem(brhod, index);
}

export function itemOfElem(index){
  return utItem(elemod, index);
}

export function isValidBranch(branch){
  return R.includes(branch, brhod);
}

export function isValidTrunk(trunk){
  return R.includes(trunk, trkod);
}

export function isValidElem(elemental){
  return R.includes(elemental, elemod);
}

export function idxOfElem(elemental){
  return utGetIdx(elemental, elemod)
}

export const idxOfBranch = (branch) => {
  return utGetIdx(branch, brhod)
}

export const idxOfTrunk = trunk => {
  return utGetIdx(trunk, trkod)
}

export const getTrunkLiturgy = trunk => {
  return (idxOfTrunk(trunk) % 2) == 0 ?
    'Alpha': 'Omega';
}

export const getBranchLiturgy = (branch) => {
  return (idxOfBranch(branch) % 2) == 0 ?
    'Alpha': 'Omega';
}

export const getTwigLiturgy = (twig) => {

  if(isValidTrunk(twig)){
    const trunk = twig;
    return getTrunkLiturgy(trunk);
  }
  else if(isValidBranch(twig)){
    const branch = twig;
    return getBranchLiturgy(branch);
  }
  else {
    throw new Error(`${twig} is not a valid twig.`);
  }
}
