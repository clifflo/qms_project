import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getTwigFlushOpponentOfChinese,
  getTwigHitOpponentOfChinese,
  getTwigSmallAlloyOpponentOfChinese,
  getTwigPauseOpponentOfChinese
} from './_twigHubByDelta';
import {
  checkNilWithTypedObject,
  checkNilWithString
} from './_utilityHubByDelta'

export const
  mapFunctionOfWheatCrossInHookContextFinal =
  (askingDayTwigReactionOpponentEnvelop,
  wheatCrossInHookContext_2) => {

  const crossInHookBranchChinese =
    wheatCrossInHookContext_2
    .crossInHookBranchChinese;

  checkNilWithTypedObject(
    askingDayTwigReactionOpponentEnvelop,
    'AskingDayTwigReactionOpponentEnvelop');

  const {
    askingDayFlushOpponentChinese,
    askingDayHitOpponentChinese,
    askingDayPauseOpponentChinese,
    askingDaySmallAlloyOpponentChinese
  } = askingDayTwigReactionOpponentEnvelop;

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
    _type: 'WheatCrossInHookContextFinal'
  };

  return wheatCrossInHookContext_3;
}

export const
  mapFunctionOfCheeseCrossInHookContextFinal =
  (askingDayTwigReactionOpponentEnvelop,
  cheeseCrossInHookContext_2) => {

  try{

    const crossInHookBranchChinese =
      cheeseCrossInHookContext_2
      .crossInHookBranchChinese;

    checkNilWithTypedObject(
      askingDayTwigReactionOpponentEnvelop,
      'askingDayTwigReactionOpponentEnvelop',
      'AskingDayTwigReactionOpponentEnvelop');

    const {
      askingDayFlushOpponentChinese,
      askingDayHitOpponentChinese,
      askingDayPauseOpponentChinese,
      askingDaySmallAlloyOpponentChinese
    } = askingDayTwigReactionOpponentEnvelop;

    checkNilWithString(
      askingDayFlushOpponentChinese,
      'askingDayFlushOpponentChinese');

    checkNilWithString(
      askingDayHitOpponentChinese,
      'askingDayHitOpponentChinese');

    checkNilWithString(
      askingDayPauseOpponentChinese,
      'askingDayPauseOpponentChinese');

    checkNilWithString(
      askingDaySmallAlloyOpponentChinese,
      'askingDaySmallAlloyOpponentChinese');

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
      _type: 'CheeseCrossInHookContextFinal'
    };

    return cheeseCrossInHookContext_3;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get cheese cross in hook context 3.');
  }
}
