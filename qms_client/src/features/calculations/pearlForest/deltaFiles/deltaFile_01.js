import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithString,
  isItemExistByStringFromList
} from './_utilityHubByDelta';

export const deltaFocusContextSet = [
  {
    _type: 'Delta focus context',
    deltaFocusChinese: '丙官鬼',
    deltaFocusEnglish: 'DeltaFocusGhost',
    deltaFocusElementalRelationEnglish:
      'Twig elemental relation ghost'
  },
  {
    _type: 'Delta focus context',
    deltaFocusChinese: '丙父母',
    deltaFocusEnglish: 'DeltaFocusParent',
    deltaFocusElementalRelationEnglish:
      'Twig elemental relation parent'
  },
  {
    _type: 'Delta focus context',
    deltaFocusChinese: '丙兄弟',
    deltaFocusEnglish: 'DeltaFocusBrother',
    deltaFocusElementalRelationEnglish:
      'Twig elemental relation brother'
  },
  {
    _type: 'Delta focus context',
    deltaFocusChinese: '丙妻財',
    deltaFocusEnglish: 'DeltaFocusMoney',
    deltaFocusElementalRelationEnglish:
      'Twig elemental relation money'
  },
  {
    _type: 'Delta focus context',
    deltaFocusChinese: '丙子孫',
    deltaFocusEnglish: 'DeltaFocusSon',
    deltaFocusElementalRelationEnglish:
      'Twig elemental relation son'
  }
]

export const isValidDeltaFocusEnglish =
  deltaFocusEnglish => {

  checkNilWithString(
    deltaFocusEnglish,
    'Delta focus English');

  return isItemExistByStringFromList(
    deltaFocusContextSet,
    deltaFocusEnglish,
    'deltaFocusEnglish');
}

export const deltaFocusEnglishSet =
  R.map(
    R.prop('deltaFocusEnglish'),
    deltaFocusContextSet);
