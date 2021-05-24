import {
  sigmaBrakeSet
} from './sigmaBrakeFiles/sigmaBrakeFileHost';

export const sigmaDayBranchPartialSet =
  filterItemByStringFromList(
    sigmaBrakeSet,
    'Sigma day branch',
    'sigmaBrakeSource');
