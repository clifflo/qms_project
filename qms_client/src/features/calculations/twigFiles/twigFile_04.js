import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithNumber,
  getItemByNumberFromList
} from './utilityHubShadowOfTwigFiles';
import {
  getTwigVanillaElementalContextByChinese
} from './twigFile_01';

export const
  twigElementalViewingMyselfContextSet = [
  {
    twigElementalViewingMyselfChinese: '比和',
    twigElementalViewingMyselfEnglish:
      'Twig elemental viewing myself as brother.',
    twigElementalOpponentMinusMyselfIndex: 0
  },
  {
    twigElementalViewingMyselfChinese: '生他',
    twigElementalViewingMyselfEnglish:
      'Twig elemental viewing myself as parent.',
    twigElementalOpponentMinusMyselfIndex: 1
  },
  {
    twigElementalViewingMyselfChinese: '剋他',
    twigElementalViewingMyselfEnglish:
      'Twig elemental viewing myself as ghost.',
    twigElementalOpponentMinusMyselfIndex: 2
  },
  {
    twigElementalViewingMyselfChinese: '被剋',
    twigElementalViewingMyselfEnglish:
      'Twig elemental viewing myself as bank.',
    twigElementalOpponentMinusMyselfIndex: 3
  },
  {
    twigElementalViewingMyselfChinese: '被生',
    twigElementalViewingMyselfEnglish:
      'Twig elemental viewing myself as son.',
    twigElementalOpponentMinusMyselfIndex: 4
  }
]
