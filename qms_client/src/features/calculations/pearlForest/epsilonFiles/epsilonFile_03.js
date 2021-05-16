import * as R from 'ramda';
import {
  getTwigElementalRelationContextByEnglish
} from './twigHubCloneOfEpsilon';

const getEpsilonFocusFaceReactionContextFunction_1 =
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

      const  {
        epsilonFocusFaceRelationEnglish,
        epsilonFaceCrossBranchElementalEnglish,
        epsilonFocusCrossBranchElementalEnglish,
      };
    };
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Epsilon focus face reaction '
      + 'function 1 is error.');
  }
}

const getEpsilonFocusFaceReactionContextFunction_2 =
  epsilonFaceCrossContext => {

  try{
    checkNilWithTypedObject(
      epsilonFaceCrossContext,
      'Epsilon face cross context');

    const loadedGetEpsilonFocusFaceReactionFunction_1 =
      R.curry
      (getEpsilonFocusFaceReactionFunction_1)
      (epsilonFaceCrossContext);
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Epsilon focus face reaction '
      + 'function 2 is error.');
  }





}

const buildEpsilonDualLongHooksContext_3 =
  epsilonDualLongHooksContext_2 => {

  const {
    epsilonEnvelop_1,
    epsilonEnvelop_2
  } = epsilonDualLongHooksContext_2;

  const epsilonEnvelopValues_1 =
    R.values(epsilonEnvelop_1);

  const epsilonEnvelopValues_2 =
    R.values(epsilonEnvelop_2);





}
