import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  adjust,
  item,
  getIndexFromList
} from '../utils';

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

export const trunkSentence = '甲乙丙丁戊己庚辛壬癸';

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

export const branchSentence = '子丑寅卯辰巳午未申酉戌亥';

export const branchelemOrder = '水土木木土火火土金金土水';

export const trunkelemOrder = '木木火火土土金金水水';

export const getIndexOfTrunk = (trunk) => {
  return getIndexFromList(trunk, trunkSentence)
}

export const getTrunkLiturgy = (trunk) => {
  return (getIndexOfTrunk(trunk) % 2) == 0 ?
    'Alpha': 'Omega';
}

export const getBranchLiturgy = (branch) => {
  return (getIndexOfBranch(branch) % 2) == 0 ?
    'Alpha': 'Omega';
}

export const getPlasticLiturgy = (plastic) => {

  if(isValidTrunk(plastic)){
    const trunk = plastic;
    return getTrunkLiturgy(trunk);
  }
  else if(isValidBranch(plastic)){
    const branch = plastic;
    return getBranchLiturgy(branch);
  }
  else {
    throw new Error(`${plastic} is not a valid plastic.`);
  }
}

export const getIndexOfBranch = (branch) => {
  return getIndexFromList(branch, branchSentence)
}

export function getElemOfPlastic(plastic){
  if(R.isNil(plastic)){
    throw new Error(
      'The input is nil for plastic.');
  }
  if(isValidTrunk(plastic)){
    const trunk = plastic;
    return trunkelemOrder[getIndexOfTrunk(trunk)];
  }
  else if(isValidBranch(plastic)){
    const branch = plastic;
    return branchelemOrder[getIndexOfBranch(branch)];
  }
  else {
    throw new Error(`'${plastic}' is not plastic.`);
  }
}

export const comparePelem = (source, target) => {
  try {
    const sourceElemental = getElemOfPlastic(source);
    const targetElemental = getElemOfPlastic(target);

    const relation = getElemRel(
      sourceElemental, targetElemental)
    return relation;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot compare elemental.')
  }

}

export function comparePlasticLiturgy(source, target){
  try {
    if(R.isNil(source)){
      throw 'Source is nil for plastic liturgy.'
    }

    if(R.isNil(target)){
      throw 'Target is nil for plastic liturgy.'
    }

    const sourceLiturgy = getPlasticLiturgy(source);
    const targetLiturgy = getPlasticLiturgy(target);
    const isSameLiturgy = sourceLiturgy == targetLiturgy;
    return {
      isSameLiturgy,
      sourceLiturgy,
      targetLiturgy
    }
  }
  catch(err){
    throw 'Cannot get plastic liturgy due to: ' + err;
  }
}

export function getTrunkFromIndex(index){
  return item(trunkSentence, index);
}

export function getBranchFromIndex(index){
  return item(branchSentence, index);
}

export function isValidBranch(branch){
  return R.includes(branch, branchSentence);
}

export function isValidTrunk(trunk){
  return R.includes(trunk, trunkSentence);
}

export function isValidElemental(elemental){
  return R.includes(elemental, elemOrder);
}

export function getIndexOfElem(elemental){
  return getIndexFromList(elemental, elemOrder)
}

export const elemRels = [
  'Draw',
  'Fruit',
  'Bank',
  'Hacker',
  'Root'
];

export function getElemRel(source, target){

  if(!RA.isString(source)){
    throw new Error('Source elemental must be string.');
  }

  if(!RA.isString(target)){
    throw new Error('Target elemental must be string.');
  }

  if(R.isNil(source)){
    throw new Error('Source elemental cannot be nil.');
  }

  if(R.isNil(target)){
    throw new Error('Target elemental cannot be nil.');
  }

  if(!isValidElemental(source)){
    throw new Error(
      `${source} is not a valid source elemental.`);
  }

  if(!isValidElemental(target)){
    throw new Error(
      `${target} is not a valid target elemental.`);
  }

  const sourceIndex = getIndexFromList(
    source, elemOrder);

  const targetIndex = getIndexFromList(
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
  const relation = item(elemRels, difference);
  return relation;
}
