
const getDeltaFullLongHookContext =
  (askingDayTrunkChinese,
  wheatLongHookName,
  cheeseLongHookName) => {

  checkNilWithString(
    wheatLongHookName,
    'Wheat long hook name');

  checkNilWithString(
    cheeseLongHookName,
    'Cheese long hook name');

  const deltaDatedLongHookContextSet =
    getDeltaDatedLongHookContextSet(
      askingDayTrunkChinese);

  checkNilWithArray(
    deltaDatedLongHookContextSet,
    'Delta dated long hook context set');

  const wheatDeltaDatedLongHookContext =
    getItemByStringFromList(
      deltaDatedLongHookContextSet,
      wheatLongHookName,
      'longHookName');

  checkNilWithTypedObject(
    wheatDeltaDatedLongHookContext,
    'Wheat delta dated long hook context',
    'Delta dated long hook context'
  )

  const crossStrikeStatusSet =
    getCrossStrikeStatusSet(
      wheatLongHookName,
      cheeseLongHookName);

  const cheeseDeltaLongHookContext_4 =
    getItemByStringFromList(
      deltaLongHookContextSet_4,
      cheeseLongHookName,
      'longHookName');


}
