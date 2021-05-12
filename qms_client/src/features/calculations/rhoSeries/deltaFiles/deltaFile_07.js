import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

const longHookCrossContextMapFunction_4 =
  (deltaPilotPaladinIndex,
  longHookCrossContext_3) => {

  const { longHookCrossDownwardIndex }
    = longHookCrossContext_3;

  checkNilWithNumber(
    longHookCrossDownwardIndex,
    'Long hook cross downward index');

  const deltaPaladinIndexForCross =
    longHookCrossDownwardIndex
    + deltaPilotPaladinIndex;

  const deltaPaladinContextForCross =
    getDeltaPaladinContextByIndex(
      deltaPaladinIndexForCross);

  

}

const deltaDatedLongHookContextMapFunction_1 = (
  askingDayTrunkChinese,
  deltaLongHookContext_4) => {


}
