import {
  sigmaBrakeTotalSet
} from '../sigmaBrakeFiles/sigmaBrakeFileHost';
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
    sigmaBrakeTotalSet,
    sigmaBrakeSource,
    'sigmaBrakeSource');
}

export const
  sigmaBrakeContextPartialSetOfDayTrunk =
  getSigmaBrakePartialSet(
    'sigma-brake-source-day-trunk');

export const
  sigmaBrakeContextPartialSetOfDayBranch =
  getSigmaBrakePartialSet(
    'sigma-brake-source-day-branch');

export const
  sigmaBrakeContextPartialSetOfMonthOriginal =
  getSigmaBrakePartialSet(
    'sigma-brake-source-month-original');

export const
  sigmaBrakeContextPartialSetOfMonthBranch =
  getSigmaBrakePartialSet(
    'sigma-brake-source-month-branch');

export const
  sigmaBrakeContextPartialSetOfSeason =
  getSigmaBrakePartialSet(
    'sigma-brake-source-season');
