import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getTwigTrunkContextByChinese
} from './twigHubCloneOfDelta';
import {
  checkNilWithNumber,
  checkNilWithTypedObject,
  getItemByNumberFromList,
  getCyclicItemFromList
} from './utilityHubCloneOfDelta';

export const deltaPaladinContextSet = [
  {
    _type: 'Delta paladin context.',
    deltaPaladinChinese: '丙玄武',
    deltaPaladinEnglish: 'Delta paladin turtle.',
    deltaPaladinIndex: 0
  },
  {
    _type: 'Delta paladin context.',
    deltaPaladinChinese: '丙白虎',
    deltaPaladinEnglish: 'Delta paladin tiger.',
    deltaPaladinIndex: 1
  },
  {
    _type: 'Delta paladin context.',
    deltaPaladinChinese: '丙螣蛇',
    deltaPaladinEnglish: 'Delta paladin cobra.',
    deltaPaladinIndex: 2
  },
  {
    _type: 'Delta paladin context.',
    deltaPaladinChinese: '丙勾陳',
    deltaPaladinEnglish: 'Delta paladin unicorn.',
    deltaPaladinIndex: 3
  },
  {
    _type: 'Delta paladin context.',
    deltaPaladinChinese: '丙朱雀',
    deltaPaladinEnglish: 'Delta paladin phoenix.',
    deltaPaladinIndex: 4
  },
  {
    _type: 'Delta paladin context.',
    deltaPaladinChinese: '丙青龍',
    deltaPaladinEnglish: 'Delta paladin dragon.',
    deltaPaladinIndex : 5
  }
]

export const
  getDeltaPilotPaladinIndexByAskingDayTrunkChinese =
  askingDayTrunkChinese => {

  const askingDayTrunkIndex =
    getTwigTrunkContextByChinese(
      askingDayTrunkChinese)
      .twigTrunkIndex;

  checkNilWithNumber(
    askingDayTrunkIndex,
    'Asking day trunk index');

  const deltaPilotPaladinIndex =
    6 - Math.floor(askingDayTrunkIndex / 2);

  return deltaPilotPaladinIndex;
}

export const getDeltaPaladinContextByIndex =
  deltaPaladinIndex => {

  checkNilWithNumber(
    deltaPaladinIndex,
    'Delta paladin index');

  const deltaPaladinContext =
    getCyclicItemFromList(
      deltaPaladinContextSet,
      deltaPaladinIndex,
      'deltaPaladinIndex');

  checkNilWithTypedObject(
    deltaPaladinContext,
    'Delta paladin context.');

  return deltaPaladinContext;

}
