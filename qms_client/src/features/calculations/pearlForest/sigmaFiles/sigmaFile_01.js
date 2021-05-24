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

export const
  sigmaBrakeContextOfDayBranchPartialSet =
  getSigmaBrakePartialSet(
    'sigma-day-branch');

const sigmaBrakeContextOfMonthOriginalPartialSet =
  getSigmaBrakePartialSet('sigma-month-original');

const sigmaBrakeContextOfMonthBranchPartialSet =
  getSigmaBrakePartialSet('sigma-month-branch');
