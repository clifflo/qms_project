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

export const getEpsilonFocusToFaceRelationContext =
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

      const deltaFocusToRhoFaceRelationContext =
      getTwigElementalRelationContextByEnglish(
        epsilonFaceCrossBranchElementalEnglish,
        epsilonFocusCrossBranchElementalEnglish);

      const epsilonFocusToFaceRelationEnglish =
        epsilonFocusFaceRelationContext
        .twigElementalRelationEnglish;

      checkNilWithString(
        epsilonFocusFaceRelationEnglish,
        'Epsilon focus face relation english');

      const epsilonFaceType =
        epsilonFaceCrossContext
        .epsilonFaceType;

      const deltaFocusEnglishOfRhoFaceType =
        epsilonFaceCrossContext
        .deltaFocusEnglish;

      const epsilonFocusType =
        epsilonFocusCrossContextSet[0]
        .deltaFocusEnglish;

      const epsilonFocusToFaceRelationContext = {
        _type: 'Epsilon focus to face relation context',
        epsilonFaceType,
        epsilonFocusType,
        deltaFocusEnglishOfRhoFaceType,
        epsilonFocusFaceRelationEnglish,
        epsilonFaceCrossBranchElementalEnglish,
        epsilonFocusCrossBranchElementalEnglish,
      };

      return epsilonFocusToFaceRelationContext;
    };
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get epsilon focus to face context');
  }
}
