import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  adjust,
  item,
  getIndexFromSentence,
  compare
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

const elementalOrder = '金水木火土';

const trunkOrder = '甲乙丙丁戊己庚辛壬癸';

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

const branchOrder = '子丑寅卯辰巳午未申酉戌亥';

const branchElementalOrder = '水土木木土火火土金金土水';

const trunkElementalOrder = '木木火火土土金金水水';

export function getIndexOfTrunk(trunk){
  return getIndexFromSentence(trunk, trunkOrder)
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
  return getIndexFromSentence(branch, branchOrder)
}

export function getElementalOfPlastic(plastic){
  if(R.isNil(plastic)){
    throw 'The input is nil for plastic.'
  }
  if(isValidTrunk(plastic)){
    const trunk = plastic;
    return trunkElementalOrder[getIndexOfTrunk(trunk)];
  }
  else if(isValidBranch(plastic)){
    const branch = plastic;
    return branchElementalOrder[getIndexOfBranch(branch)];
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
    return relation;
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
    const comparison = sourceLiturgy == targetLiturgy ?
      'Same': 'Different';
    return {
      comparison,
      sourceLiturgy,
      targetLiturgy
    }
  }
  catch(err){
    throw 'Cannot get plastic liturgy due to: ' + err;
  }
}

export function getTrunkFromIndex(index){
  return item(trunkOrder, index);
}

export function getBranchFromIndex(index){
  return item(branchOrder, index);
}

export function isValidBranch(branch){
  return R.includes(branch, branchOrder);
}

export function isValidTrunk(trunk){
  return R.includes(trunk, trunkOrder);
}

export function isValidElemental(elemental){
  return R.includes(elemental, elementalOrder);
}

export function getIndexOfElemental(elemental){
  return getIndexFromSentence(elemental, elementalOrder)
}

export const elementalRelations = [
  'Draw',
  'Fruit',
  'Bank',
  'Hacker',
  'Root'
];

export function getElementalRelation(source, target){

  const relation = compare(
    source, target, elementalOrder, elementalRelations);
  return relation;
}
