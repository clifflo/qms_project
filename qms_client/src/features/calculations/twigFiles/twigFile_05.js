import {
  getTwigElementalContextByChinese,
  getTwigElementalContextByEnglish
} from './twigFile_01';
import {
  twigElementalRelationContextSet
} from './twigFile_04';
import {
  getCyclicItemFromList,
  checkNilWithNumber
} from './_utilityHubByTwig';

export const
  getTwigElementalRelationContextByChinese = (
  myselfTwigElementalChinese,
  opponentTwigElementalChinese) => {

  const myselfTwigElementalContext =
    getTwigElementalContextByChinese(
      myselfTwigElementalChinese);

  const opponentTwigElementalContext =
    getTwigElementalContextByChinese(
      opponentTwigElementalChinese);

  const myselfTwigElementalIndex =
    myselfTwigElementalContext
    .twigElementalIndex;

  checkNilWithNumber(
    myselfTwigElementalIndex,
    'Myself twig elemental index');

  const opponentTwigElementalIndex =
    opponentTwigElementalContext
    .twigElementalIndex;

  checkNilWithNumber(
    opponentTwigElementalIndex,
    'Opponent twig elemental index');

  const twigElementalRelationIndex =
    opponentTwigElementalIndex
    - myselfTwigElementalIndex;

  checkNilWithNumber(
    twigElementalRelationIndex,
    'Twig elemental relation index');

  const twigElementalRelationContext =
    getCyclicItemFromList(
      twigElementalRelationContextSet,
      twigElementalRelationIndex,
      'twigElementalRelationIndex');

  return {
    myselfTwigElementalChinese,
    opponentTwigElementalChinese,
    ...twigElementalRelationContext,
    _type: 'Twig elemental relation context'
  };
}

export const
  getTwigElementalRelationContextByEnglish = (
  myselfTwigElementalEnglish,
  opponentTwigElementalEnglish) => {

  const myselfTwigElementalContext =
    getTwigElementalContextByEnglish(
      myselfTwigElementalEnglish);

  const opponentTwigElementalContext =
    getTwigElementalContextByEnglish(
      opponentTwigElementalEnglish);

  const myselfTwigElementalIndex =
    myselfTwigElementalContext
    .twigElementalIndex;

  checkNilWithNumber(
    myselfTwigElementalIndex,
    'Myself twig elemental index');

  const opponentTwigElementalIndex =
    opponentTwigElementalContext
    .twigElementalIndex;

  checkNilWithNumber(
    opponentTwigElementalIndex,
    'Opponent twig elemental index');

  const twigElementalRelationIndex =
    opponentTwigElementalIndex
    - myselfTwigElementalIndex;

  checkNilWithNumber(
    twigElementalRelationIndex,
    'Twig elemental relation index');

  const twigElementalRelationContext =
    getCyclicItemFromList(
      twigElementalRelationContextSet,
      twigElementalRelationIndex,
      'twigElementalRelationIndex');

  return {
    myselfTwigElementalEnglish,
    opponentTwigElementalEnglish,
    ...twigElementalRelationContext,
    _type: 'Twig elemental relation context'
  };
}
