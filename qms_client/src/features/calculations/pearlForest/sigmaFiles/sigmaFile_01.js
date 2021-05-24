import {
  sigmaBrakeTotalSet
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
