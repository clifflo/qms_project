import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getTwigTrunkContextByChinese
} from './_twigHubByDelta';
import {
  checkNilWithNumber,
  checkNilWithTypedObject,
  getItemByNumberFromList,
  getCyclicItemFromList
} from './_utilityHubByDelta';

export const deltaPaladinContextSet = [
  {
    _type: 'DeltaPaladinContext',
    deltaPaladinChinese: '丙玄武',
    deltaPaladinEnglish: 'DeltaPaladinTurtle',
    deltaPaladinIndex: 0
  },
  {
    _type: 'DeltaPaladinContext',
    deltaPaladinChinese: '丙白虎',
    deltaPaladinEnglish: 'DeltaPaladinTiger',
    deltaPaladinIndex: 1
  },
  {
    _type: 'DeltaPaladinContext',
    deltaPaladinChinese: '丙螣蛇',
    deltaPaladinEnglish: 'DeltaPaladinCobra',
    deltaPaladinIndex: 2
  },
  {
    _type: 'DeltaPaladinContext',
    deltaPaladinChinese: '丙勾陳',
    deltaPaladinEnglish: 'DeltaPaladinUnicorn',
    deltaPaladinIndex: 3
  },
  {
    _type: 'DeltaPaladinContext',
    deltaPaladinChinese: '丙朱雀',
    deltaPaladinEnglish: 'DeltaPaladinPhoenix',
    deltaPaladinIndex: 4
  },
  {
    _type: 'DeltaPaladinContext',
    deltaPaladinChinese: '丙青龍',
    deltaPaladinEnglish: 'DeltaPaladinDragon',
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
    'askingDayTrunkIndex');

  const deltaPilotPaladinIndex =
    6 - Math.floor(askingDayTrunkIndex / 2);

  return deltaPilotPaladinIndex;
}

export const getDeltaPaladinContextByIndex =
  deltaPaladinIndex => {

  checkNilWithNumber(
    deltaPaladinIndex,
    'deltaPaladinIndex');

  const deltaPaladinContext =
    getCyclicItemFromList(
      deltaPaladinContextSet,
      deltaPaladinIndex,
      'deltaPaladinIndex');

  checkNilWithTypedObject(
    deltaPaladinContext,
    'DeltaPaladinContext');

  return deltaPaladinContext;

}
