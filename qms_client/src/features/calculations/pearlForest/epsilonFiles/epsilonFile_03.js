import * as R from 'ramda';
import {
  getTwigElementalRelationContextByEnglish
} from './twigHubCloneOfEpsilon';
import {
  deltaFocusEnglishSet
} from './deltaHubCloneOfEpsilon';

const getEpsilonFocusFaceReactionContext =
  (epsilonFaceCrossContext,
  epsilonFocusCrossContext) => {

  try{
    if(R.isEmpty(epsilonFocusCrossContextSet)){
      return null;
    }
    else {

      const epsilonFaceCrossBranchElementalEnglish =
      epsilonFaceCrossContext
      .crossInHookBranchElementalEnglish;

      checkNilWithString(
        epsilonFaceCrossBranchElementalEnglish,
        'Epsilon face cross branch elemental english');

      const epsilonFocusCrossTypeEnglish =
        epsilonFocusCrossContext
        .deltaFocusEnglish;

      const epsilonFocusCrossBranchElementalEnglish =
      epsilonFocusCrossContextSet[0]
      .crossInHookBranchElementalEnglish;

      checkNilWithString(
        epsilonFocusCrossBranchElementalEnglish,
        'Epsilon focus cross branch elemental english');

      const epsilonFocusFaceRelationContext =
      getTwigElementalRelationContextByEnglish(
        epsilonFaceCrossBranchElementalEnglish,
        epsilonFocusCrossBranchElementalEnglish);

      const epsilonFocusFaceRelationEnglish =
        epsilonFocusFaceRelationContext
        .twigElementalRelationEnglish;

      checkNilWithString(
        epsilonFocusFaceRelationEnglish,
        'Epsilon focus face relation english');

      const epsilonFocusFaceReactionContext = {
        epsilonFocusFaceRelationEnglish,
        epsilonFaceCrossBranchElementalEnglish,
        epsilonFocusCrossBranchElementalEnglish,
      };

      return epsilonFocusFaceReactionContext;
    };
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Epsilon focus face reaction '
      + 'function 1 is error.');
  }
}

export const getEpsilonFocusFaceReactionContextSet =
  (epsilonFocusCrossContextList,
  epsilonFaceCrossContext)   => {

  try{
    checkNilWithTypedObject(
      epsilonFaceCrossContext,
      'Epsilon face cross context');

    const loadedGetEpsilonFocusFaceReactionContext =
      R.curry
      (getEpsilonFocusFaceReactionContext)
      (epsilonFaceCrossContext);

    const epsilonFocusFaceReactionContextSet =
      R.map(
        loadedGetEpsilonFocusFaceReactionContext,
        epsilonFocusCrossContextList);

    checkNilWithArray(
      epsilonFocusFaceReactionContextSet,
      'Epsilon focus face reaction context set');

    return epsilonFocusFaceReactionContextSet;

  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Epsilon focus face reaction '
      + 'function 2 is error.');
  }
}
