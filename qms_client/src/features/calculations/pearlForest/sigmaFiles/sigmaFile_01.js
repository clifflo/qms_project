import {
  sigmaBrakeSet
} from './sigmaBrakeFiles/sigmaBrakeFileHost';
import {
  filterItemByStringFromList,
  checkNilByArray,
  checkNilWithUntypedObject
} from './_utilityHubBySigma';
import {
  getTauMonthOriginalChineseFromBranch
} from './_tauHubBySigma';

const getSigmaBrakePartialSet =
  sigmaBrakeSource => {

  return filterItemByStringFromList(
    sigmaBrakeSet,
    sigmaBrakeSource,
    'sigmaBrakeSource');
}

export const sigmaBrakeContextPartialSetOfDayBranch =
  getSigmaBrakePartialSet(
    'sigma-day-branch');

export const sigmaBrakeContextPartialSetOfMonthOriginal =
  getSigmaBrakePartialSet('sigma-month-original');

export const sigmaBrakeContextPartialSetOfMonthBranch =
  getSigmaBrakePartialSet('sigma-month-branch');

const handleSigmaBoltOfMonthBranchToOriginal =
  sigmaBoltOfMonthBranch => {

  const sigmaSourceNutOfMonthBranch =
    sigmaBoltOfMonthBranch[0];

  checkNilByString(
    sigmaSourceNutOfMonthBranch,
    'sigmaSourceNutOfMonthBranch');

  const sigmaTargetNutOfMonthBranch =
    sigmaBoltOfMonthBranch[1];

  const sigmaBoltContextOfMonthBranch = {
    _type: 'SigmaBoltContext',
    sigmaSourceNutOfMonthBranch,
    sigmaTargetNutOfMonthBranch
  };

}

const convertSigmaClutchContextOfMonthBranchToOriginal =
  sigmaBrakeContextOfMonthBranch => {

  const { sigmaBoltDictionary } =
    sigmaBrakeContextOfMonthBranch;

  checkNilWithUntypedObject(
    sigmaBoltDictionary,
    'sigmaBoltDictionary');

  const sigmaBoltPairs =
    R.toPairs(sigmaBoltDictionary);





}
