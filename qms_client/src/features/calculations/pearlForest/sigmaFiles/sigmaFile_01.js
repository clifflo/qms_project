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
    'Sigma day branch');

export const sigmaMonthOriginalBrakePartialSet =
  getSigmaBrakePartialSet(
    'Sigma month original');

export const sigmaMonthBranchBrakePartialSet =
  getSigmaBrakePartialSet(
    'Sigma month branch');

const convertSigmaMonthBranchToOriginalBrake =
  sigmaMonthBranchBrake => {

  
}
