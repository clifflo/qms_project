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

export const elementalSentence = '金水木火土';

export const trunkSentence = '甲乙丙丁戊己庚辛壬癸';

const branchContext = {
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

export const branchElementalSentence = '水土木木土火火土金金土水';

export const trunkElementalSentence = '木木火火土土金金水水';

export function getIndexOfTrunk(trunk){
  return getIndexFromList(trunk, trunkSentence)
}

function getTrunkLiturgy(trunk) {
  return (getIndexOfTrunk(trunk) % 2) == 0 ?
    'Alpha': 'Omega';
}

function getBranchLiturgy(branch){
  return (getIndexOfBranch(branch) % 2) == 0 ?
    'Alpha': 'Omega';
}

export function getPlasticLiturgy(plastic){

  if(isValidTrunk(plastic)){
    const trunk = plastic;
    return getTrunkLiturgy(trunk);
  }
  else if(isValidBranch(plastic)){
    const branch = plastic;
    return getBranchLiturgy(branch);
  }
  else {
    throw 'Wrong plastic for liturgy.';
  }
}

export function getIndexOfBranch(branch){
  return getIndexFromList(branch, branchSentence)
}

export function getElementalOfPlastic(plastic){
  if(R.isNil(plastic)){
    throw 'The input is nil for plastic.'
  }
  if(isValidTrunk(plastic)){
    const trunk = plastic;
    return trunkElementalSentence[getIndexOfTrunk(trunk)];
  }
  else if(isValidBranch(plastic)){
    const branch = plastic;
    return branchElementalSentence[getIndexOfBranch(branch)];
  }
  else {
    throw `'${plastic}' is not plastic.`
  }
}

export function comparePlasticElemental(source, target){
  try {
    const sourceElemental = getElementalOfPlastic(source);
    const targetElemental = getElementalOfPlastic(target);
    const relation = getElementalRelation(
      sourceElemental, targetElemental)
    return {
      relation,
      sourceElemental,
      targetElemental
    }
  }
  catch(err){
    throw 'Cannot compare plastic elemental due to -> ' + err;
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
  return R.includes(elemental, elementalSentence);
}

export function getIndexOfElemental(elemental){
  return getIndexFromList(elemental, elementalSentence)
}

export const elementalRelations = [
  'Draw',
  'Fruit',
  'Bank',
  'Hacker',
  'Root'
];

export function getElementalRelation(source, target){

  const sourceIndex = getIndexFromList(source, elementalSentence);
  const targetIndex = getIndexFromList(target, elementalSentence);

  if(sourceIndex == -1){
    throw `'${source}' is not a valid source elemental.`;
  }

  if(targetIndex == -1){
    throw `'${target}' is not a valid target elemental.`;
  }

  const difference = targetIndex - sourceIndex;
  const relation = item(elementalRelations, difference);
  return relation;
}
