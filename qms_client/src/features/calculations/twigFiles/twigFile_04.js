import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithNumber,
  getItemByNumberFromList
} from './utilityHubShadowOfTwigFiles';
import {
  getTwigElementalContextByChinese
} from './twigFile_01';

export const
  twigElementalViewingMyselfContextSet = [
  {
    twigElementalViewingMyselfChinese: '比和',
    twigElementalViewingMyselfEnglish:
      'Viewing myself as brother.',
    twigElementalOpponentMinusMyselfIndex: 0
  },
  {
    twigElementalViewingMyselfChinese: '生他',
    twigElementalViewingMyselfEnglish:
      'Viewing myself as parent.',
    twigElementalOpponentMinusMyselfIndex: 1
  },
  {
    twigElementalViewingMyselfChinese: '剋他',
    twigElementalViewingMyselfEnglish:
      'Viewing myself as ghost.',
    twigElementalOpponentMinusMyselfIndex: 2
  },
  {
    twigElementalViewingMyselfChinese: '被剋',
    twigElementalViewingMyselfEnglish:
      'Viewing myself as bank.',
    twigElementalOpponentMinusMyselfIndex: 3
  },
  {
    twigElementalViewingMyselfChinese: '被生',
    twigElementalViewingMyselfEnglish:
      'Viewing myself as son.',
    twigElementalOpponentMinusMyselfIndex: 4
  }
]
