import {
  idxOfBranch,
  idxOfTrunk,
  itemOfTrunk,
  itemOfBranch,
  isValidTrunk,
  isValidBranch
} from './twig_1';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const getBpse = (betapsi) => {

  const trunk = betapsi[0];
  const branch = betapsi[1];

  if(!isValidTrunk(trunk)){
    throw new Error(
      `${trunk} is not a valid trunk for betapsi.`);
  }

  if(!isValidBranch(branch)){
    throw new Error(
      `${branch} is not a valid branch for betapsi.`
    )
  }

  const difference = idxOfBranch(branch) - idxOfTrunk(trunk);
  const isValidMatch = (difference % 2) == 0
  if(!isValidMatch){
    throw new Error(
      'Betapsi not valid due to wrong match of trunk and branch.'
    )
  }

  // Betapsi Series Lead Branch
  const bslb = itemOfBranch(difference);

  // Betapsi Series Full Name
  const bsfn = `甲${bslb}旬`;

  // Betapsi Series Void A
  const bsva = itemOfBranch(difference - 2);

  // Betapsi Series Void B
  const bsvb = itemOfBranch(difference - 1);

  // Betapsi Series Void List
  const bsvl = [bsva, bsvb];

  return {
    bsfn,
    bsvl
  }
}

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
    console.error(err);
    throw new Error('Cannot get Betapsi item.');
  }


}
