import {
  sgcxts_2
}

export const getSgcxts_3 = () => {

  const mapFn_1 = bkmch => {

    const key = RA.concatAll(
      getBhdcvs(bkmch[1]));
      
    const value = RA.concatAll(
      getBhdcvs(bkmch[2]));

    return [key, value];
  }

  const mapFn_2 = sigma => {

    const bkcxt = R.compose(
      R.fromPairs,
      R.map(mapFn_1))
    (sigma.bkmhes);

    return {
      adjdStce: sigma.adjdStce,
      sgmna: sigma.sgmna,
      bkcxt
    }
  }

  return R.map(mapFn_2, sgcxts_2);
}

export const sgcxts_3 = getSgcxts_3();
