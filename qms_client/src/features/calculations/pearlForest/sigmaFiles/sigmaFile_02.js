import * as R from 'ramda';


const handleSigmaBoltOfMonthBranchToOriginal =
  sigmaBoltOfMonthBranch => {

  const sigmaSourceNutOfMonthBranch =
    sigmaBoltOfMonthBranch[0];

  checkNilByString(
    sigmaSourceNutOfMonthBranch,
    'sigmaSourceNutOfMonthBranch');

  const sigmaTargetNutOfMonthBranch =
    sigmaBoltOfMonthBranch[1];

  checkNilByString(
    sigmaTargetNutOfMonthBranch,
    'sigmaTargetNutOfMonthBranch');

  const sigmaBoltContextOfMonthBranch = {
    _type: 'SigmaBoltContextOfMonthBranch',
    sigmaSourceNutOfMonthBranch,
    sigmaTargetNutOfMonthBranch
  };

  return sigmaBoltContextOfMonthBranch;
}

const convertSigmaClutchContextOfMonthBranchToOriginal =
  sigmaBrakeContextOfMonthBranch => {

  const sigmaBoltDictionaryOfMonthBranch =
    sigmaBrakeContextOfMonthBranch
    .sigmaBoltDictionary

  checkNilWithUntypedObject(
    sigmaBoltDictionaryOfMonthBranch,
    'sigmaBoltDictionaryOfMonthBranch');

  const sigmaBoltPairsOfMonthBranch =
    R.toPairs(sigmaBoltDictionary);

  checkNilByArray(
    sigmaBoltPairsOfMonthBranch,
    'sigmaBoltPairsOfMonthBranch');

  const sigmaBoltContextSetOfMonthBranch =
    R.map(
      handleSigmaBoltOfMonthBranchToOriginal,
      sigmaBoltPairsOfMonthBranch);

  checkNilByArray(
    sigmaBoltContextSetOfMonthBranch,
    'sigmaBoltContextSetOfMonthBranch');

  const sigmaClutchContextOfMonthBranch = {
    sigmaBoltContextSetOfMonthBranch,

  };
}

export const sigmaClutchContextOfMonthBranch =
  R.map(
    convertSigmaClutchContextOfMonthBranchToOriginal,
    sigmaBrakeContextPartialSetOfMonthBranch);
