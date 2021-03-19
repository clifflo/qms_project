import {
  idxOfBranch,
  idxOfTrunk,
  itemOfTrunk,
  itemOfBranch
} from './plastic_1';
import {
  getBpse
} from './plastic_2';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

// Get Betapsi Index
export const idxOfBtp = (betapsi) => {

  try{
    const bsfn = getBpse(betapsi).bsfn;
    const bridx = idxOfBranch(bsfn[1]);
    const tkidx = idxOfTrunk(betapsi[0]);

    const bpseIdx = ((12 - bridx) % 12) / 2;
    const bpidx = (bpseIdx * 10) + tkidx;
    return bpidx;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get Betapsi Index.');
  }
}

export const itemOfBtp = idx => {

  if(R.isNil(idx)){
    throw new Error(
      'Betapsi index is nil.'
    )
  }

  if(!RA.isNumber(idx)){
    throw new Error(
      'Betapsi index must be a number.'
    );
  }

  if(idx > 59){
    throw new Error(
      'Betapsi index should not be bigger than 59.'
    )
  }

  if(idx < 0){
    throw new Error(
      'Betapsi index should not be smaller than 0.'
    )
  }

  try{
    const tenthIdx = Math.floor(idx / 10);

    // Betapsi Lead Branch Index
    const bplbi = 12 - (tenthIdx * 2);

    // Trunk Index
    const tkidx = idx % 10;
    const trunk = itemOfTrunk(tkidx);

    // Branch Index
    const bridx =  bplbi + tkidx;

    const branch = itemOfBranch(bridx);

    return trunk + branch;
  }
  catch(err){
    console.log(err);
    throw new Error('Cannot get Betapsi item.');
  }


}
