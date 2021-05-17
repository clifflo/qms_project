import * as R from 'ramda';
import {
  getEpsilonIntraFacesCorrelationContext
} from './epsilonFile_08';
import {
  getEpsilonDualLongHooksContext_4
} from './epsilonMiniHub_02';

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

  const epsilonIntraFacesEnvelop = {
    epsilonJackToKingRelationContext,
    epsilonJackToQueenRelationContext,
    epsilonQueenToKingRelationContext,
    epsilonJackToKingCorrelationContext,
    epsilonQueenToKingCorrelationContext,
    epsilonJackToQueenCorrelationContext
  };

  const epsilonDualLongHooksContext_5 = {
    ...epsilonDualLongHooksContext_4,
    epsilonIntraFacesEnvelop
  };

  return epsilonDualLongHooksContext_4;
}

export const getEpsilonDualLongHooksContext_5 =
  R.compose(
    buildEpsilonDualLongHooksContext_5,
    getEpsilonDualLongHooksContext_4);
