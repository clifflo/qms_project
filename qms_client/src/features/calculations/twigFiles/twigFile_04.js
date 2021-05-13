import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithNumber,
  getItemByNumberFromList
} from './utilityHubCloneOfTwig';
import {
  getTwigVanillaElementalContextByChinese
} from './twigFile_01';

export const
  twigElementalViewingMyselfContextSet = [
  {
    twigElementalViewingMyselfChinese: '比和',
    twigElementalViewingMyselfEnglish:
      'Twig brother',
    twigElementalOpponentMinusMyselfIndex: 0
  },
  {
    twigElementalViewingMyselfChinese: '生他',
    twigElementalViewingMyselfEnglish:
      'Twig parent',
    twigElementalOpponentMinusMyselfIndex: 1
  },
  {
    twigElementalViewingMyselfChinese: '剋他',
    twigElementalViewingMyselfEnglish:
      'Twig ghost',
    twigElementalOpponentMinusMyselfIndex: 2
  },
  {
    twigElementalViewingMyselfChinese: '被剋',
    twigElementalViewingMyselfEnglish:
      'Twig bank',
    twigElementalOpponentMinusMyselfIndex: 3
  },
  {
    twigElementalViewingMyselfChinese: '被生',
    twigElementalViewingMyselfEnglish:
      'Twig son',
    twigElementalOpponentMinusMyselfIndex: 4
  }
]
