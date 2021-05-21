import {
  DateTime,
  Interval
} from 'luxon';
import {
  checkNilWithTypedObject
} from './utilityMiniHub_01';

export const getIntervalWithEndInclusive =
  (startLuxonBox,
  endLuxonBox) => {

  checkNilWithTypedObject(
    startLuxonBox,
    'LuxonBox',
    'startLuxonBox');

  checkNilWithTypedObject(
    endLuxonBox,
    'LuxonBox',
    'endLuxonBox');

  const startLuxonCar =
    DateTime.fromObject(startLuxonBox);

  const endLuxonCar =
    DateTime.fromObject(endLuxonBox);

  const interval =
    Interval.fromDateTimes(
      startLuxonCar,
      endLuxonCar.plus({ days: 1 })
    );

  return interval;
}
