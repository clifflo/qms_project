import {
  getTwigVanillaElementalContextByChinese
} from './twigFile_01';
import {
  twigElementalViewingMyselfContextSet
} from './twigFile_04';
import {
  getCyclicItemFromList,
  checkNilWithNumber
} from './utilityHubCloneOfTwig';

export const
  getTwigElementalViewingMyselfContextByChinese = (
  myselfTwigElementalChinese,
  opponentTwigElementalChinese) => {

  const myselfTwigVanillaElementalContext =
    getTwigVanillaElementalContextByChinese(
      myselfTwigElementalChinese);

  const opponentTwigVanillaElementalContext =
    getTwigVanillaElementalContextByChinese(
      opponentTwigElementalChinese);

  const myselfTwigElementalIndex =
    myselfTwigVanillaElementalContext
    .twigVanillaElementalIndex;

  checkNilWithNumber(
    myselfTwigElementalIndex,
    'Myself twig elemental index');

  const opponentTwigElementalIndex =
    opponentTwigVanillaElementalContext
    .twigVanillaElementalIndex;

  checkNilWithNumber(
    opponentTwigElementalIndex,
    'Opponent twig elemental index');

  const twigElementalOpponentMinusMyselfIndex =
    opponentTwigElementalIndex
    - myselfTwigElementalIndex;

  checkNilWithNumber(
    twigElementalOpponentMinusMyselfIndex,
    'Twig elemental opponent minus myself index');

  const twigElementalViewingMyselfContext =
    getCyclicItemFromList(
      twigElementalViewingMyselfContextSet,
      twigElementalOpponentMinusMyselfIndex,
      'twigElementalOpponentMinusMyselfIndex');

  return {
    myselfTwigElementalChinese,
    opponentTwigElementalChinese,
    ...twigElementalViewingMyselfContext,
    _type: 'Twig elemental viewing myself comparison'
  };
}
