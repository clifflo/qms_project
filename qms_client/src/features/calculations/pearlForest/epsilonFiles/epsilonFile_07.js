import * as R from 'ramda';
import {
  getTwigElementalRelationContextByEnglish
} from './twigHubCloneOfEpsilon';
import {
  checkNilWithString
} from './utilityHubCloneOfEpsilon';

export const getEpsilonIntraFacesRelationContext =
  (sourceEpsilonFocusCrossContext,
  targetEpsilonFocusCrossContext) => {

  const sourceEpsilonFaceType =
    sourceEpsilonFocusCrossContext
    .epsilonFaceType;

  checkNilWithString(
    sourceEpsilonFaceType,
    'Source epsilon face type');

  const targetEpsilonFaceType =
    targetEpsilonFocusCrossContext
    .epsilonFaceType;

  checkNilWithString(
    targetEpsilonFaceType,
    'Target epsilon face type');

  const sourceEpsilonFaceBranchElementalEnglish =
    sourceEpsilonFocusCrossContext
    .crossInHookBranchElementalEnglish;

  checkNilWithString(
    sourceEpsilonFaceBranchElementalEnglish,
    'Source epsilon face branch '
    + 'elemental English');

  const targetEpsilonFaceBranchElementalEnglish =
    targetEpsilonFocusCrossContext
    .crossInHookBranchElementalEnglish;

  checkNilWithString(
    targetEpsilonFaceBranchElementalEnglish,
    'Target epsilon face branch '
    + 'elemental English');

  const rhoIntraFacesRelationContext =
    getTwigElementalRelationContextByEnglish(
      sourceEpsilonFaceBranchElementalEnglish,
      targetEpsilonFaceBranchElementalEnglish);

  const epsilonIntraFacesRelationEnglish =
    rhoIntraFacesRelationContext
    .twigElementalRelationEnglish;

  const epsilonIntraFacesRelationContext = {
    _type: 'Epsilon intra faces relation context',
    sourceEpsilonFaceType,
    targetEpsilonFaceType,
    sourceEpsilonFaceBranchElementalEnglish,
    targetEpsilonFaceBranchElementalEnglish,
    epsilonIntraFacesRelationEnglish
  };

  return epsilonIntraFacesRelationContext;
}
