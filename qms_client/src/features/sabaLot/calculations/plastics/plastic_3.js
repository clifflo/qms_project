import {
  getBpse
} from './plastic_2';

// Get Betapsi Index
export const getBpidx = (betapsi) => {

  try{
    const bsfn = getBpse(betapsi).bsfn;
    const brix = idxOfBranch(bsfn[1]);
    const tkix = idxOfTrunk(betapsi[0]);

    const bpseIdx = ((12 - branchIdx) % 12) / 2;
    const bpix = (bpseIdx * 10) + tkix;
    return bpix;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get Betapsi Index.');
  }
}

export const testBpix = date => {
  
}
