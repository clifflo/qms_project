import * as R from 'ramda';

export const getEpsilonIntraFacesRelationContext =
  (sourceEpsilonFocusCrossContext,
  targetEpsilonFocusCrossContext) => {

  const sourceEpsilonFaceType =
    sourceEpsilonFocusCrossContext
    .epsilonFaceType;

  const targetEpsilonFaceType =
    targetEpsilonFocusCrossContext
    .epsilonFaceType;

  const sourceEpsilonFaceBranchElementalEnglish =
    sourceEpsilonFocusCrossContext
    .crossInHookBranchElementalEnglish;

  const targetEpsilonFaceBranchElementalEnglish =
    targetEpsilonFocusCrossContext
    .crossInHookBranchElementalEnglish;

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
