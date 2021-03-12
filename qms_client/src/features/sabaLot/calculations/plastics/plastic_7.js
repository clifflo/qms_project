import {
  isValidBranch,
  idxOfBranch,
  itemOfElem,
  itemOfBranch,
  elemOfPla,
  idxOfElem
} from './plastic_1';
import * as R from 'ramda';

// Branch Small Compound
const getBscSet = () => {

  const mapFn = (i) => {
    const sBranch = itemOfBranch(i);
    const tBranchIdx =  (13 - i) % 12;
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
