import * as R from 'ramda';

export getEpsilonIntraFacesRelationContext =
  (sourceEpsilonFocusCrossContext,
  targetEpsilonFocusCrossContext) => {

  const epsilonSourceFaceBranchElementalEnglish =
    sourceEpsilonFocusCrossContext
    .crossInHookBranchElementalEnglish;

  const epsilonTargetFaceBranchElementalEnglish =
    targetEpsilonFocusCrossContext
    .crossInHookBranchElementalEnglish;

  const rhoIntraFacesRelationContext =
    getTwigElementalRelationContextByEnglish(
      epsilonSourceFaceBranchElementalEnglish,
      epsilonTargetFaceBranchElementalEnglish);

  const epsilonIntraFacesRelationEnglish =
    rhoIntraFacesRelationContext
    .twigElementalRelationEnglish;

  return {
    sourceEpsilonFocusCrossContext,
    targetEpsilonFocusCrossContext,
    epsilonIntraFacesRelationEnglish
  }
}
