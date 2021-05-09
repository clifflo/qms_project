import {
  isValidTwigTrunkChinese
} from './twigFile_02';

export const testIsValidTwigTrunkChinese_01 = () => {
  return isValidTwigTrunkChinese('辛');
}

export const testIsValidTwigTrunkChinese_02 = () => {
  return !isValidTwigTrunkChinese('子');
}
