import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const getTrunkLiturgy = trunk => {
  return (idxOfTrunk(trunk) % 2) == 0 ?
    'Alpha': 'Omega';
}

export const getBranchLiturgy = (branch) => {
  return (idxOfBranch(branch) % 2) == 0 ?
    'Alpha': 'Omega';
}

export const getTwigLiturgy = (twig) => {

  if(isValidTrunk(twig)){
    const trunk = twig;
    return getTrunkLiturgy(trunk);
  }
  else if(isValidBranch(twig)){
    const branch = twig;
    return getBranchLiturgy(branch);
  }
  else {
    throw new Error(`${twig} is not a valid twig.`);
  }
}
