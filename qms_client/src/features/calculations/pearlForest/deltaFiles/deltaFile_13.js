import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getTwigFlushOpponentOfChinese,
  getTwigHitOpponentOfChinese,
  getTwigSmallAlloyOpponentOfChinese,
  getTwigPauseOpponentOfChinese
} from './twigHubCloneOfDelta';
import {
  checkNilWithTypedObject
} from './utilityHubCloneOfDelta'

export const
  mapFunctionForWheatCrossInHookContext_3 =
  (askingDayTwigOpponentEnvelop,
  wheatCrossInHookContext_2) => {

  const crossInHookBranchChinese =
    wheatCrossInHookContext_2
    .crossInHookBranchChinese;

  checkNilWithTypedObject(
    askingDayTwigOpponentEnvelop,
    'Asking day twig opponent envelop');

  const {
    askingDayFlushOpponentChinese,
    askingDayHitOpponentChinese,
    askingDayPauseOpponentChinese,
    askingDaySmallAlloyOpponentChinese
  } = askingDayTwigOpponentEnvelop;

  const matchAskingDayFlushOpponent =
    askingDayFlushOpponentChinese ==
    crossInHookBranchChinese;

  const matchAskingDayHitOpponent =
    askingDayHitOpponentChinese ==
    crossInHookBranchChinese;

  const matchAskingDayPauseOpponent =
    askingDayPauseOpponentChinese ==
    crossInHookBranchChinese;

  const matchAskingDaySmallAlloyOpponent =
    askingDaySmallAlloyOpponentChinese ==
    crossInHookBranchChinese;

  const wheatCrossInHookContext_3 = {
    ...wheatCrossInHookContext_2,
    matchAskingDayFlushOpponent,
    matchAskingDayHitOpponent,
    matchAskingDayPauseOpponent,
    matchAskingDaySmallAlloyOpponent,
    _type: 'Wheat cross in hook context 3'
  };

  return wheatCrossInHookContext_3;
}

export const
  mapFunctionForCheeseCrossInHookContext_3 =
  (askingDayTwigOpponentEnvelop,
  cheeseCrossInHookContext_2) => {

  try{
    
    const crossInHookBranchChinese =
      cheeseCrossInHookContext_2
      .crossInHookBranchChinese;

    checkNilWithTypedObject(
      askingDayTwigOpponentEnvelop,
      'Asking day twig opponent envelop');

    const {
      askingDayFlushOpponentChinese,
      askingDayHitOpponentChinese,
      askingDayPauseOpponentChinese,
      askingDaySmallAlloyOpponentChinese
    } = askingDayTwigOpponentEnvelop;

    const matchAskingDayFlushOpponent =
      askingDayFlushOpponentChinese ==
      crossInHookBranchChinese;

    const matchAskingDayHitOpponent =
      askingDayHitOpponentChinese ==
      crossInHookBranchChinese;

    const matchAskingDayPauseOpponent =
      askingDayPauseOpponentChinese ==
      crossInHookBranchChinese;

    const matchAskingDaySmallAlloyOpponent =
      askingDaySmallAlloyOpponentChinese ==
      crossInHookBranchChinese;

    const cheeseCrossInHookContext_3 = {
      ...cheeseCrossInHookContext_2,
      matchAskingDayFlushOpponent,
      matchAskingDayHitOpponent,
      matchAskingDayPauseOpponent,
      matchAskingDaySmallAlloyOpponent,
      _type: 'Cheese cross in hook context 3'
    };

    return cheeseCrossInHookContext_3;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get cheese cross in hook context 3.');
  }
}
