import {
} from './twigFile_01';

export const itemOfTrunk = trunkIndex => {
  return getCyclicItemFromList(
    trunkOrder, trunkIndex);
}

export const itemOfBranch = branchIndex => {
  return getCyclicItemFromList(branchOrder, index);
}

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
