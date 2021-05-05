import wnli_4 from './wnli_4';

// Get Wan Nian Li Day
const getWniday = dateMoment => {

  const findFn = _month => {
    const result = dateMoment
      .isBetween(
        _month.wmost,
        _month.wmoend,
        undefined,
        '[)');

    return result;
  }

  const month = R.find(findFn, calr_4);
  const wdbp = getDbp(dateMoment);
  const atLeap = dateMoment
    .isBetween(month.leap, month.wmoend, undefined, '[)');

  const wybp = month.wybp;

  // Trunk of year
  const tkyr = wybp[0];
  const tkyi = idxOfTrunk(tkyr) % 5;

  // Index of start trunk of year
  const styi = (tkyi + 1) * 2;
  const stoy = itemOfTrunk(styi);

  // Month's trunk index
  const mtix = styi + month.wmidx;
  const mtrk = itemOfTrunk(mtix);
  const mbix = month.wmidx + 2;
  const mbrh = itemOfBranch(mbix);
  const wmbp = mtrk + mbrh;

  return {
    date: dateMoment.format('YYYY-MM-DD'),
    ...month,
    wdbp,
    wmbp,
    atLeap
  }
}

// Get Wan Nian Li Today
export const getWtoday = () => {
  return getWniday(moment());
}
