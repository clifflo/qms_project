import * as R from 'ramda';
import {
  checkNilWithArray,
  checkNilWithString
} from './utilityHubCloneOfEpsilon';

export const
  getEpsilonFocusToFaceCorrelationContext =
  epsilonFocusToFaceRelationContext => {

  try{
    const {
      epsilonFaceType,
      epsilonFocusType,
      epsilonFocusToFaceRelationEnglish,
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
      epsilonFocusToFaceRelationEnglish,
      'Epsilon focus to face relation english');

    let epsilonFocusToFaceCorrelationHacker;
    let epsilonFocusToFaceCorrelationHacked;
    let epsilonFocusToFaceCorrelationProducer;
    let epsilonFocusToFaceCorrelationProduct;

    switch(epsilonFocusToFaceRelationEnglish){
      case 'Twig elemental relation money':
        epsilonFocusToFaceCorrelationHacker =
          epsilonFocusType;
        epsilonFocusToFaceCorrelationHacked =
          epsilonFaceType;
        return {
          _type:
          'Epsilon focus to face correlation context',
          epsilonFocusToFaceCorrelationType:
          'Twig elemental correlation hacking',
          epsilonFocusToFaceCorrelationHacker,
          epsilonFocusToFaceCorrelationHacked,
          epsilonFaceCrossBranchElementalEnglish,
          epsilonFocusCrossBranchElementalEnglish
        };
      case 'Twig elemental relation ghost':
        epsilonFocusToFaceCorrelationHacker =
          epsilonFaceType;
        epsilonFocusToFaceCorrelationHacked =
          epsilonFocusType;

        return {
          _type:
          'Epsilon focus to face correlation context',
          epsilonFocusToFaceCorrelationType:
          'Twig elemental correlation hacking',
          epsilonFocusToFaceCorrelationHacker,
          epsilonFocusToFaceCorrelationHacked,
          epsilonFaceCrossBranchElementalEnglish,
          epsilonFocusCrossBranchElementalEnglish
        };
      case 'Twig elemental relation parent':
        epsilonFocusToFaceCorrelationProducer =
          epsilonFaceType;
        epsilonFocusToFaceCorrelationProduct =
          epsilonFocusType;
        return {
          _type:
          'Epsilon focus to face correlation context',
          epsilonFocusToFaceCorrelationType:
          'Twig elemental correlation producing',
          epsilonFocusToFaceCorrelationProducer,
          epsilonFocusToFaceCorrelationProduct,
          epsilonFaceCrossBranchElementalEnglish,
          epsilonFocusCrossBranchElementalEnglish
        };
      case 'Twig elemental relation son':
        epsilonFocusToFaceCorrelationProducer =
          epsilonFocusType;
        epsilonFocusToFaceCorrelationProduct =
          epsilonFaceType;
        return {
          _type:
          'Epsilon focus to face correlation context',
          epsilonFocusToFaceCorrelationType:
          'Twig elemental correlation producing',
          epsilonFocusToFaceCorrelationProducer,
          epsilonFocusToFaceCorrelationProduct,
          epsilonFaceCrossBranchElementalEnglish,
          epsilonFocusCrossBranchElementalEnglish
        };
      case 'Twig elemental relation brother':
        const epsilonFocusParticipant = epsilonFocusType;
        const epsilonFaceParticipant = epsilonFaceType;
        const epsilonFaceAndFaceCrossBranchElementalEnglish
        = epsilonFaceCrossBranchElementalEnglish;
        return {
          _type:
          'Epsilon focus to face correlation context',
          epsilonFocusToFaceCorrelationType:
          'Twig elemental correlation partnership',
          epsilonFocusParticipant,
          epsilonFaceParticipant,
          epsilonFaceAndFaceCrossBranchElementalEnglish
        };
      default:
        throw new Error('Wrong twig elemental.');
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get epsilon focus to face '
      + 'correlation context.')
  }
}
