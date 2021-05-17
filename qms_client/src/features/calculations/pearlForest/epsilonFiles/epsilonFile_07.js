import * as R from 'ramda';
import {
  getTwigElementalRelationContextByEnglish
} from './twigHubCloneOfEpsilon';

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
    + 'elemental english');

  const targetEpsilonFaceBranchElementalEnglish =
    targetEpsilonFocusCrossContext
    .crossInHookBranchElementalEnglish;

  checkNilWithString(
    targetEpsilonFaceBranchElementalEnglish,
    'Target epsilon face branch '
    + 'elemental english');

  const rhoIntraFacesRelationContext =
    getTwigElementalRelationContextByEnglish(
      epsilonSourceFaceBranchElementalEnglish,
      epsilonTargetFaceBranchElementalEnglish);

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
