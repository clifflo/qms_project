import * as R from 'ramda';
import {
  getEpsilonIntraFacesCorrelationContext
} from './epsilonFile_08';

const buildEpsilonDualLongHooksContext_5 =
  epsilonDualLongHooksContext_4 => {

  const { epsilonFaceEnvelop } =
    epsilonDualLongHooksContext_4;

  const {
    epsilonJackCrossContext,
    epsilonQueenCrossContext,
    epsilonKingCrossContext
  } = epsilonFaceEnvelop;

  const epsilonJackToKingRelationContext =
    getEpsilonIntraFacesRelationContext(
      epsilonJackCrossContext,
      epsilonKingCrossContext);

  const epsilonJackToQueenRelationContext =
    getEpsilonIntraFacesRelationContext(
      epsilonJackCrossContext,
      epsilonQueenCrossContext);

  const epsilonQueenToKingRelationContext =
    getEpsilonIntraFacesRelationContext(
      epsilonQueenCrossContext,
      epsilonKingCrossContext);

  const epsilonJackToKingCorrelationContext =
    getEpsilonIntraFacesCorrelationContext(
      epsilonJackToKingRelationContext);

  const epsilonQueenToKingCorrelationContext =
    getEpsilonIntraFacesCorrelationContext(
      epsilonQueenToKingRelationContext);

  const epsilonJackToQueenCorrelationContext =
    getEpsilonIntraFacesCorrelationContext(
      epsilonJackToQueenRelationContext);

}
