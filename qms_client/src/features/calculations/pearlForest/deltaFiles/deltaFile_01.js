import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithString,
  isItemExistByStringFromList
} from './utilityHubCloneOfDelta';

export const deltaFocusContextSet = [
  {
    _type: 'Delta focus context',
    deltaFocusChinese: '丙官鬼',
    deltaFocusEnglish: 'Delta focus ghost',
    deltaFocusElementalRelationEnglish:
      'Twig elemental relation ghost'
  },
  {
    _type: 'Delta focus context',
    deltaFocusChinese: '丙父母',
    deltaFocusEnglish: 'Delta focus parent',
    deltaFocusElementalRelationEnglish:
      'Twig elemental relation parent'
  },
  {
    _type: 'Delta focus context',
    deltaFocusChinese: '丙兄弟',
    deltaFocusEnglish: 'Delta focus brother',
    deltaFocusElementalRelationEnglish:
      'Twig elemental relation brother'
  },
  {
    _type: 'Delta focus context',
    deltaFocusChinese: '丙妻財',
    deltaFocusEnglish: 'Delta focus money',
    deltaFocusElementalRelationEnglish:
      'Twig elemental relation money'
  },
  {
    _type: 'Delta focus context',
    deltaFocusChinese: '丙子孫',
    deltaFocusEnglish: 'Delta focus son',
    deltaFocusElementalRelationEnglish:
      'Twig elemental relation son'
  }
]

export const isValidDeltaFocusEnglish =
  deltaFocusEnglish => {

  checkNilWithString(
    deltaFocusEnglish,
    'Delta focus english');

  return isItemExistByStringFromList(
    deltaFocusContextSet,
    deltaFocusEnglish,
    'deltaFocusEnglish');
}
