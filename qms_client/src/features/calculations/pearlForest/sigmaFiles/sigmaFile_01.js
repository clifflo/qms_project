import {
  sigmaBrakeSet
} from './sigmaBrakeFiles/sigmaBrakeFileHost';
import {
  filterItemByStringFromList
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

export const sigmaDayBranchBrakePartialSet =
  getSigmaBrakePartialSet(
    'sigma-day-branch');

export const sigmaMonthOriginalBrakePartialSet =
  getSigmaBrakePartialSet(
    'sigma-month-original');

export const sigmaMonthBranchBrakePartialSet =
  getSigmaBrakePartialSet(
    'sigma-month-branch');

const convertSigmaMonthBranchToOriginalBrake =
  sigmaMonthBranchBrake => {

  
}
