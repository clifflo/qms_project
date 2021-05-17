import * as R from 'ramda';

const getEpsilonFocusToFaceCorrelationContext =
  epsilonFocusToFaceRelationContext => {

  const {
    epsilonFaceType,
    epsilonFocusType,
    epsilonFocusFaceRelationEnglish,
    epsilonFaceCrossBranchElementalEnglish,
    epsilonFocusCrossBranchElementalEnglish
  } = epsilonFocusToFaceRelationContext;

  checkNilWithString(
    epsilonFaceType,
    'Epsilon face type');

  checkNilWithString(
    epsilonFocusType,
    'Epsilon focus type');

  checkNilWithString(
    epsilonFocusFaceRelationEnglish,
    'Epsilon focus face relation english');

  switch(epsilonFocusFaceRelationEnglish){
    case 'Twig elemental money':

      const epsilonFocusToFaceCorrelationHacker =
        epsilonFocusType;

      const epsilonFocusToFaceCorrelationHacked =
        epsilonFaceType;

      return {
        _type: 'Epsilon focus to face correlation context',
        epsilonFocusToFaceCorrelationHacker,
        epsilonFocusToFaceCorrelationHacked,
        epsilonFaceCrossBranchElementalEnglish,
        epsilonFocusCrossBranchElementalEnglish
      };
    case 'Twig elemental ghost':

      const epsilonFocusToFaceCorrelationHacker =
        epsilonFaceType;

      const epsilonFocusToFaceCorrelationHacked =
        epsilonFocusType;

      return {
        _type: 'Epsilon focus to face correlation context',
        epsilonFocusToFaceCorrelationHacker,
        epsilonFocusToFaceCorrelationHacked,
        epsilonFaceCrossBranchElementalEnglish,
        epsilonFocusCrossBranchElementalEnglish
      };
    case 'Twig elemental parent':

      const epsilonFocusToFaceCorrelationProducer =
        epsilonFaceType;

      const epsilonFocusToFaceCorrelationProduct =
        epsilonFocusType;

      return {
        _type: 'Epsilon focus to face correlation context',
        epsilonFocusToFaceCorrelationHacker,
        epsilonFocusToFaceCorrelationHacked,
        epsilonFaceCrossBranchElementalEnglish,
        epsilonFocusCrossBranchElementalEnglish
      };
    case 'Twig elemental son':

      const epsilonFocusToFaceCorrelationProducer =
        epsilonFocusType;

      const epsilonFocusToFaceCorrelationProduct =
        epsilonFaceType;

      return {
        _type: 'Epsilon focus to face correlation context',
        epsilonFocusToFaceCorrelationHacker,
        epsilonFocusToFaceCorrelationHacked,
        epsilonFaceCrossBranchElementalEnglish,
        epsilonFocusCrossBranchElementalEnglish
      };
    case 'Twig elemental brother':

      const epsilonFocusParticipant = epsilonFocusType;
      const epsilonFaceParticipant = epsilonFaceType;

      const epsilonFaceAndFaceCrossBranchElementalEnglish
      = epsilonFaceCrossBranchElementalEnglish;

      return {
        _type: 'Epsilon focus to face correlation context',
        epsilonFocusParticipant,
        epsilonFaceParticipant,
        epsilonFaceAndFaceCrossBranchElementalEnglish
      };
    default:
      throw new Error('Wrong twig elemental.');
  }
}

const getEpsilonFocusToFaceCorrelationContextSet =
  epsilonFocusToFaceRelationContext =>
  R.map(
    getEpsilonFocusToFaceCorrelationContext,
    epsilonFocusToFaceRelationContext);

const buildEpsilonDualLongHooksContext_4 =
  epsilonDualLongHooksContext_3 => {

  
}
