import * as R from 'ramda';
import {
  getTwigElementalRelationContextByEnglish
} from './twigHubCloneOfEpsilon';
import {
  deltaFocusEnglishSet
} from './deltaHubCloneOfEpsilon';
import {
  checkNilWithString,
  checkNilWithTypedObject,
  checkNilWithArray
} from './utilityHubCloneOfEpsilon';

const getEpsilonFocusToFaceContext =
  (epsilonFaceCrossContext,
  epsilonFocusCrossContextSet) => {

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
        epsilonFocusCrossContextSet[0]
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

      const epsilonFaceType =
        epsilonFaceCrossContext
        .epsilonFaceType;

      const epsilonFocusType =
        epsilonFocusCrossContextSet[0]
        .deltaFocusEnglish;

      const epsilonFocusToFaceContext = {
        _type: 'Epsilon focus to face context',
        epsilonFaceType,
        epsilonFocusType,
        epsilonFocusFaceRelationEnglish,
        epsilonFaceCrossBranchElementalEnglish,
        epsilonFocusCrossBranchElementalEnglish,
      };

      return epsilonFocusToFaceContext;
    };
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get epsilon focus to face context');
  }
}

export const getEpsilonFocusToFaceContextSet =
  (epsilonFocusCrossContextSetList,
  epsilonFaceCrossContext)   => {

  try{
    checkNilWithTypedObject(
      epsilonFaceCrossContext,
      'Epsilon face cross context');

    const loadedGetEpsilonFocusToFaceContext =
      R.curry
      (getEpsilonFocusToFaceContext)
      (epsilonFaceCrossContext);

    const epsilonFocusFaceReactionContextSet =
      R.map(
        loadedGetEpsilonFocusToFaceContext,
        epsilonFocusCrossContextSetList);

    checkNilWithArray(
      epsilonFocusFaceReactionContextSet,
      'Epsilon focus face reaction context set');

    return epsilonFocusFaceReactionContextSet;

  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get epsilon focus to face '
      + 'context set.');
  }
}
