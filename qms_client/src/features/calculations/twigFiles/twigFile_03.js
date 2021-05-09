import {
} from './twigFile_01';



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


export function itemOfElemental(index){
  return getCyclicItemFromList(elementalOrder, index);
}

export const isValidBranch = branch => {
  return R.includes(branch, branchOrder);
}

export function isValidTrunk(trunk){
  return R.includes(trunk, trunkOrder);
}

export function isValidElem(elemental){
  return R.includes(elemental, elementalOrder);
}

export const indexOfElemental = elemental => {
  return getIndexFromString(elemental, elementalOrder)
}

export const indexOfBranch = branch => {
  return getIndexFromString(branch, branchOrder)
}

export const indexOfTrunk = trunk => {
  return getIndexFromString(trunk, trunkOrder)
}
