import * as R from 'ramda';
import {
  checkNilWithString
} from './_utilityHubByEpsilon';

export const
  getEpsilonIntraFacesCorrelationContext =
  epsilonIntraFacesRelationContext => {

  try{
    const {
      sourceEpsilonFaceType,
      targetEpsilonFaceType,
      sourceEpsilonFaceBranchElementalEnglish,
      targetEpsilonFaceBranchElementalEnglish,
      epsilonIntraFacesRelationEnglish
    } = epsilonIntraFacesRelationContext;

    checkNilWithString(
      sourceEpsilonFaceType,
      'Source epsilon face type');

    checkNilWithString(
      targetEpsilonFaceType,
      'Target epsilon focus type');

    checkNilWithString(
      epsilonIntraFacesRelationEnglish,
      'Epsilon intra faces relation English');

    let epsilonIntraFacesCorrelationHacker;
    let epsilonIntraFacesCorrelationHacked;
    let epsilonIntraFacesCorrelationProducer;
    let epsilonIntraFacesCorrelationProduct;

    switch(epsilonIntraFacesRelationEnglish){
      case 'Twig elemental relation money':
        epsilonIntraFacesCorrelationHacker =
          sourceEpsilonFaceType;
        epsilonIntraFacesCorrelationHacked =
          targetEpsilonFaceType;
        return {
          _type:
          'Epsilon intra face correlation context',
          epsilonIntraFacesCorrelationType:
          'Twig elemental correlation hacking',
          epsilonIntraFacesCorrelationHacker,
          epsilonIntraFacesCorrelationHacked,
          sourceEpsilonFaceBranchElementalEnglish,
          targetEpsilonFaceBranchElementalEnglish
        };
      case 'Twig elemental relation ghost':
        epsilonIntraFacesCorrelationHacker =
          targetEpsilonFaceType;
        epsilonIntraFacesCorrelationHacked =
          sourceEpsilonFaceType;

        return {
          _type:
          'Epsilon intra face correlation context',
          epsilonIntraFacesCorrelationType:
          'Twig elemental correlation hacking',
          epsilonIntraFacesCorrelationHacker,
          epsilonIntraFacesCorrelationHacked,
          sourceEpsilonFaceBranchElementalEnglish,
          targetEpsilonFaceBranchElementalEnglish
        };
      case 'Twig elemental relation parent':
        epsilonIntraFacesCorrelationProducer =
          targetEpsilonFaceType;
        epsilonIntraFacesCorrelationProduct =
          sourceEpsilonFaceType;
        return {
          _type:
          'Epsilon intra face correlation context',
          epsilonIntraFacesCorrelationType:
          'Twig elemental correlation producing',
          epsilonIntraFacesCorrelationProducer,
          epsilonIntraFacesCorrelationProduct,
          sourceEpsilonFaceBranchElementalEnglish,
          targetEpsilonFaceBranchElementalEnglish
        };
      case 'Twig elemental relation son':
        epsilonIntraFacesCorrelationProducer =
          sourceEpsilonFaceType;
        epsilonIntraFacesCorrelationProduct =
          targetEpsilonFaceType;
        return {
          _type:
          'Epsilon intra face correlation context',
          epsilonIntraFacesCorrelationType:
          'Twig elemental correlation producing',
          epsilonIntraFacesCorrelationProducer,
          epsilonIntraFacesCorrelationProduct,
          sourceEpsilonFaceBranchElementalEnglish,
          targetEpsilonFaceBranchElementalEnglish
        };
      case 'Twig elemental relation brother':
        const epsilonSourceFaceParticipant =
          sourceEpsilonFaceType;
        const epsilonTargetFaceParticipant =
          targetEpsilonFaceType;
        const epsilonBothFacesCrossBranchElementalEnglish
        = sourceEpsilonFaceBranchElementalEnglish;
        return {
          _type:
          'Epsilon intra face correlation context',
          epsilonIntraFacesCorrelationType:
          'Twig elemental correlation partnership',
          epsilonSourceFaceParticipant,
          epsilonTargetFaceParticipant,
          epsilonBothFacesCrossBranchElementalEnglish
        };
      default:
        throw new Error('Wrong twig elemental.');
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get epsilon intra faces '
      + 'correlation context.')
  }
}
