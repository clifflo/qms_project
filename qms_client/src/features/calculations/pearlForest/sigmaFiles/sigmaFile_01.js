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
    'SigmaBrakeSourceDayTrunk');

export const
  sigmaBrakeContextPartialSetOfDayBranch =
  getSigmaBrakePartialSet(
    'SigmaBrakeSourceDayBranch');

export const
  sigmaBrakeContextPartialSetOfMonthOriginal =
  getSigmaBrakePartialSet(
    'SigmaBrakeSourceMonthOriginal');

export const
  sigmaBrakeContextPartialSetOfMonthBranch =
  getSigmaBrakePartialSet(
    'SigmaBrakeSourceMonthBranch');

export const
  sigmaBrakeContextPartialSetOfSeason =
  getSigmaBrakePartialSet(
    'SigmaBrakeSourceSeason');

export const
  sigmaBrakeContextPartialSetOfYearBranch =
  getSigmaBrakePartialSet(
    'SigmaBrakeSourceYearBranch');
