
const getWnli_2 = () => {

  const wmnames_1 =
    '正,二,三,四,五,六,七,八,九,十,十一,十二';

  const wmnames_2 = R.split(',', wmnames_1);

  const mapFn_1n = (yr_1, wybp, mo_1, wmidx) => {

    const mo_2 = R.slice(0, 2, mo_1);
    let yr_2;
    let mo_3;
    const day = R.slice(3, 5, mo_1);
    if(mo_2 == '13'){
      yr_2 = (parseInt(yr_1) + 1).toString();
      mo_3 = '01'
    }
    else {
      yr_2 = yr_1;
      mo_3 = mo_2;
    }

    const wmost = `${yr_2}-${mo_3}-${day}`;
    const wmname = item(wmnames_2, wmidx);
    return {
      year: yr_1,
      wybp,
      wmname,
      wmost,
      wmidx
    }
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = (yrContext) => {

    // Months without leaps
    const mswl = R.dropLast(1, yrContext.months);

    const leap_1 = R.takeLast(1, yrContext.months)[0];

    const year = parseInt(yrContext.year);

    // Betapsi Index
    const bpix = (year - 1984) % 60;
    const wybp = itemOfBtp(bpix);

    const months_1 = RA.mapIndexed(
      mapFn_1c(yrContext.year)(wybp),
      mswl);

    let months_2;
    let leap_2;

    if(leap_1 != '—'){
      const leapSplit = R.split(':', leap_1);
      leap_2 = year + '-' +
        R.drop(1, R.take(6, leapSplit[1]));
    }
    else {
      leap_2 = '---'
    }

    return {
      year,
      wybp,
      months: months_1,
      leap: leap_2
    }
  }

  return R.map(mapFn_2, calr_1);

}

const calr_2 = getCalr_2();
