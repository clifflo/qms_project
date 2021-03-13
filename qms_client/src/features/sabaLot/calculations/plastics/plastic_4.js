import {
  isValidBranch,
  idxOfBranch,
  itemOfElem,
  itemOfBranch,
  elemOfPla,
  idxOfElem,
  itemOfTrunk
} from './plastic_1';
import * as R from 'ramda';

// Branch Small Compound
const getBscSet = () => {

  const mapFn = (i) => {
    const sBranch = itemOfBranch(i);
    const tBranchIdx =  13 - i;
    const tBranch = itemOfBranch(tBranchIdx);

    const sBelem = elemOfPla(sBranch);
    const sBelemIdx = idxOfElem(sBelem);

    // Compound Elemental
    const celemSet = '土木火金水火';
    const celem = celemSet[i - 1];
    return {
      branches: [sBranch, tBranch],
      celem
    }
  }

  try{
    const result = R.map(mapFn, R.range(1, 7));
    return result;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Branch Compound Set.');
  }
}

export const bscSet = getBscSet();

// Trunk Small Compound
const getTscSet = () => {

  const mapFn = (i) => {
    const celemIdx = i - 1;
    const celem = itemOfElem(celemIdx);
    const sTrunk = itemOfTrunk(i);
    const tTrunk = itemOfTrunk(i + 5);

    return {
      trunks: [sTrunk, tTrunk],
      celem
    }
  }

  return R.map(mapFn, R.range(0, 5));
}

export const tscSet = getTscSet();
