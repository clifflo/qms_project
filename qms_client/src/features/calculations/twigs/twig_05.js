import {
  idxOfBranch,
  idxOfTrunk,
  itemOfTrunk,
  itemOfBranch,
  isValidTrunk,
  isValidBranch
} from './twig_01';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const getBpse = betapsi => {

  const bptk = betapsi[0];
  const bpbr = betapsi[1];

  if(!isValidTrunk(bptk)){
    throw new Error(
      `${bptk} is not a valid trunk for betapsi.`);
  }

  if(!isValidBranch(bpbr)){
    throw new Error(
      `${bpbr} is not a valid branch for betapsi.`
    )
  }

  const difference =
    idxOfBranch(branch) - idxOfTrunk(trunk);

  const isValidMatch = (difference % 2) == 0
  if(!isValidMatch){
    throw new Error(
      'Betapsi not valid due to wrong match '
      + 'of BPTK and BPBR.'
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
    throw new Error(
      'Cannot get Betapsi Index.');
  }
}
