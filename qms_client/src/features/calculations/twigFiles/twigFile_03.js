import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const twigBranchContextSet = [
  {
    twigBranchIndex: 0,
    twigBranchChinese: '子',
    twigBranchEnglish: 'Psi'
  },
  {
    twigBranchIndex: 1,
    twigBranchChinese: '丑',
    twigBranchEnglish: 'Chi'
  },
  {
    twigBranchIndex: 2,
    twigBranchChinese: '寅',
    twigBranchEnglish: 'Phi'
  },
  {
    twigBranchIndex: 3,
    twigBranchChinese: '卯',
    twigBranchEnglish: 'Upsilon'
  },
  {
    twigBranchIndex: 4,
    twigBranchChinese: '辰',
    twigBranchEnglish: 'Tau'
  },
  {
    twigBranchIndex: 5,
    twigBranchChinese: '巳',
    twigBranchEnglish: 'Sigma'
  },
  {
    twigBranchIndex: 6,
    twigBranchChinese: '午',
    twigBranchEnglish: 'Rho'
  },
  {
    twigBranchIndex: 7,
    twigBranchChinese: '未',
    twigBranchEnglish: 'Pi'
  },
  {
    twigBranchIndex: 8,
    twigBranchChinese: '申',
    twigBranchEnglish: 'Omicron'
  },
  {
    twigBranchIndex: 9,
    twigBranchChinese: '酉',
    twigBranchEnglish: 'Xi'
  },
  {
    twigBranchIndex: 10,
    twigBranchChinese: '戌',
    twigBranchEnglish: 'Nu'
  },
  {
    twigBranchIndex: 11,
    twigBranchChinese: '亥',
    twigBranchEnglish: 'Mu'
  }
]

export const isValidTwigBranchChinese =
  twigBranchChinese => {

  checkNilWithString(
    twigBranchChinese, 'Twig branch chinese');

  return isItemExistByStringFromList(
    twigBranchContextSet,
    twigBranchChinese,
    'twigBranchChinese');
}

export const getTwigBranchContextByIndex =
  twigBranchIndex => {

  try{
    checkNilWithNumber(
      twigBranchIndex, 'Twig branch index');

    return getCyclicItemFromList(
      twigBranchContextSet,
      twigBranchIndex,
      'twigBranchIndex'
    );
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig branch context by index.');
  }
}

export const getTwigBranchContextByChinese =
  twigBranchChinese => {

  try{

    checkNilWithString(
      twigBranchChinese,
      'Twig branch chinese');

    const twigBranchContext = getItemByStringFromList(
      twigBranchContextSet,
      twigBranchChinese,
      'twigBranchChinese');

    if(R.isNil(twigBranchContext)){
      throw new Error(
        twigBranchChinese + ' '
        + 'is not a valid twig branch chinese.');
    }

    return twigBranchContext;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig branch context by chinese.');
  }
}
