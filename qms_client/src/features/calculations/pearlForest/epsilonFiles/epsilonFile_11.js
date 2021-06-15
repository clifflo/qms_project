import {
  getFermentedCrossInHookContext_1
} from './epsilonFile_10';
import {
  getEpsilonDualLongHooksContext_5
} from './epsilonMiniHub_03';
import * as R from 'ramda';

export const getEpsilonDualLongHooksContext_6 =
  (askingMonthOriginalChinese,
  askingDayTwigFullComboChinese,
  wheatHookName,
  cheeseHookName) => {

  const epsilonDualLongHooksContext_5 =
    getEpsilonDualLongHooksContext_5(
      askingDayTwigFullComboChinese,
      wheatHookName,
      cheeseHookName);

  const {
    wheatCrossInHookContextSetFinal
  } = epsilonDualLongHooksContext_5;

  const loadedGetFermentedCrossInHookContext_1 =
    R.curry(getFermentedCrossInHookContext_1)
    (askingMonthOriginalChinese);

  const fermentedCrossInHookContextSet_1 =
    R.map(
      loadedGetFermentedCrossInHookContext_1,
      wheatCrossInHookContextSetFinal);

  const epsilonDualLongHooksContext_6 =
    R.dissoc(
      'wheatCrossInHookContextSetFinal',
      {
        ...epsilonDualLongHooksContext_5,
        fermentedCrossInHookContextSet_1,
        _type: 'EpsilonDualLongHooksContext_6'
      }
    );

  return epsilonDualLongHooksContext_6;
}
