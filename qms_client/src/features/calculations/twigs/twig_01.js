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

export const elemOrder = '金水木火土';

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

export const branchOrder =
  '子丑寅卯辰巳午未申酉戌亥';

export const idxOfTrunk = trunk => {
  return utGetIdx(trunk, trunkOrder)
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

export const idxOfBranch = (branch) => {
  return utGetIdx(branch, branchOrder)
}

const getBelem = branch => {

  const belemOrder = '水土木木土火火土金金土水';
  const bridx = idxOfBranch(branch);
  return belemOrder[bridx];
}

const getTelem = trunk => {
  const tki = idxOfTrunk(trunk);
  const elei = Math.floor(tki / 2) + 2;
  return itemOfElem(elei);
}

export function getElem(twig){
  if(R.isNil(twig)){
    throw new Error(
      'The input is nil for twig.');
  }
  if(isValidTrunk(twig)){
    const trunk = twig;
    return getTelem(trunk);
  }
  else if(isValidBranch(twig)){
    const branch = twig;
    return getBelem(branch);
  }
  else {
    throw new Error(
      `'${twig}' is not a valid twig.`);
  }
}

export function itemOfTrunk(index){
  return utItem(trunkOrder, index);
}

export function itemOfBranch(index){
  return utItem(branchOrder, index);
}

export function itemOfElem(index){
  return utItem(elemOrder, index);
}

export function isValidBranch(branch){
  return R.includes(branch, branchOrder);
}

export function isValidTrunk(trunk){
  return R.includes(trunk, trunkOrder);
}

export function isValidElem(elemental){
  return R.includes(elemental, elemOrder);
}

export function idxOfElem(elemental){
  return utGetIdx(elemental, elemOrder)
}

export const elrs = [
  'Draw',
  'Fruit',
  'Bank',
  'Hacker',
  'Seed'
];

export const getElre = (source, target) => {

  if(R.isNil(source)){
    throw new Error(
      'Source elemental cannot be nil.');
  }

  if(R.isNil(target)){
    throw new Error(
      'Target elemental cannot be nil.');
  }

  if(!RA.isString(source)){
    throw new Error('Source elemental must be string.');
  }

  if(!RA.isString(target)){
    throw new Error('Target elemental must be string.');
  }

  if(!isValidElem(source)){
    throw new Error(
      `${source} is not a valid source elemental.`);
  }

  if(!isValidElem(target)){
    throw new Error(
      `${target} is not a valid target elemental.`);
  }

  const sourceIndex = utGetIdx(
    source, elemOrder);

  const targetIndex = utGetIdx(
    target, elemOrder);

  if(sourceIndex == -1){
    throw new Error(
      `'${source}' is not a valid source elemental.`);
  }

  if(targetIndex == -1){
    throw new Error(
      `'${target}' is not a valid target elemental.`);
  }

  const difference = targetIndex - sourceIndex;
  const relation = utItem(elrs, difference);
  return relation;
}

export const isValidElrl = elrl => {
  return R.includes(elrl, elrs);
}
