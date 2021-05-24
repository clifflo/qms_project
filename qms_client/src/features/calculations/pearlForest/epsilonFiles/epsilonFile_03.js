import * as R from 'ramda';
import {
  getTwigElementalRelationContextByEnglish
} from './_twigHubByEpsilon';
import {
  deltaFocusEnglishSet
} from './_deltaHubByEpsilon';
import {
  checkNilWithString,
  checkNilWithTypedObject,
  checkNilWithArray
} from './_utilityHubByEpsilon';

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
        'Epsilon face cross branch elemental English');

      const epsilonFocusCrossTypeEnglish =
        epsilonFocusCrossContextSet[0]
        .deltaFocusEnglish;

      const epsilonFocusCrossBranchElementalEnglish =
      epsilonFocusCrossContextSet[0]
      .crossInHookBranchElementalEnglish;

      checkNilWithString(
        epsilonFocusCrossBranchElementalEnglish,
        'Epsilon focus cross branch elemental English');

      const deltaFocusToRhoFaceRelationContext =
      getTwigElementalRelationContextByEnglish(
        epsilonFaceCrossBranchElementalEnglish,
        epsilonFocusCrossBranchElementalEnglish);

      checkNilWithTypedObject(
        deltaFocusToRhoFaceRelationContext,
        'Twig elemental relation context');

      const epsilonFocusToFaceRelationEnglish =
        deltaFocusToRhoFaceRelationContext
        .twigElementalRelationEnglish;

      checkNilWithString(
        epsilonFocusToFaceRelationEnglish,
        'Epsilon focus to face relation English');

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
        epsilonFocusToFaceRelationEnglish,
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
