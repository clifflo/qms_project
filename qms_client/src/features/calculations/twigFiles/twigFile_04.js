import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithNumber,
  getItemByNumberFromList
} from './utilityHubCloneOfTwig';
import {
  getTwigElementalContextByChinese
} from './twigFile_01';

// Elemental relation index is defined as the
// twig elemental index of opponent minus myself.
// Relation in english is defined as opponent
// viewing myself.
export const
  twigElementalRelationContextSet = [
  {
    twigElementalRelationChinese: '比和',
    twigElementalRelationEnglish:
      'Twig elemental relation brother',
    twigElementalRelationIndex: 0
  },
  {
    twigElementalRelationChinese: '生他',
    twigElementalRelationEnglish:
      'Twig elemental relation parent',
    twigElementalRelationIndex: 1
  },
  {
    twigElementalRelationChinese: '剋他',
    twigElementalRelationEnglish:
      'Twig elemental relation ghost',
    twigElementalRelationIndex: 2
  },
  {
    twigElementalRelationChinese: '被剋',
    twigElementalRelationEnglish:
      'Twig elemental relation money',
    twigElementalRelationIndex: 3
  },
  {
    twigElementalRelationChinese: '被生',
    twigElementalRelationEnglish:
      'Twig elemental relation son',
    twigElementalRelationIndex: 4
  }
]
