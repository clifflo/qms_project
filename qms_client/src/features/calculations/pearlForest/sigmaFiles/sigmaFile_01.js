import {
  sigmaBrakeSet
} from './sigmaBrakeFiles/sigmaBrakeFileHost';
import {
  filterItemByStringFromList
} from './_utilityHubBySigma';

export const sigmaDayBranchPartialSet =
  filterItemByStringFromList(
    sigmaBrakeSet,
    'Sigma day branch',
    'sigmaBrakeSource');

export const sigmaMonthOriginalPartialSet =
  filterItemByStringFromList(
    sigmaBrakeSet,
    'Sigma month original',
    'sigmaBrakeSource');
